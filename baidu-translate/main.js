const crypto = require('crypto');
const config = require('./config');

function createSign(appId, q, salt, secret) {
  return crypto.createHash('md5').update(appId + q + salt + secret).digest('hex');
}

module.exports = {
  baiduTranslatePlugin: {
    async main(msgType, msgContent, senderOpenid) {
      const [targetLang, ...textParts] = msgContent.split(' ');
      const q = textParts.join(' ');
      
      // 获取语言代码
      const langCode = config.LANGUAGE_MAP[targetLang] || 'zh';
      const salt = Date.now();
      
      try {
        const sign = createSign(config.APP_ID, q, salt, config.SECRET_KEY);
        const params = new URLSearchParams({
          q,
          from: 'auto',
          to: langCode,
          appid: config.APP_ID,
          salt,
          sign
        });

        const response = await fetch(`${config.API_URL}?${params}`);
        const data = await response.json();

        if (data.error_code) {
          return `翻译失败：${data.error_msg}`;
        }

        const result = data.trans_result[0];
        return `\n「${result.src}」\n${result.dst}\n（${data.from} → ${data.to}）`;
      } catch (error) {
        console.error('[翻译插件] 错误:', error);
        return '翻译服务暂时不可用';
      }
    }
  }
};