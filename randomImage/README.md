# 随机二次元图片插件

基于第三方API实现的QQ机器人随机图片推送插件，每日提供不同的二次元图片。

## 功能特性

- 每日随机推送二次元风格图片
- 自动解析图片直链
- 简洁的错误处理机制

## 使用说明

### 基础指令
```
@bot image
```

### 返回示例
```
用户：@bot image
机器人：
✨ 今日随机二次元图片
[图片]
```

## 注意事项

1. 图片源为第三方API(http://acg.yaohud.cn)
2. 每日图片更新取决于API提供商
3. 图片加载速度受网络环境影响

## 技术实现

通过 `randomImage` 方法实现核心功能：
```javascript:/c/QQbot/qybot-plugins/randomImage/main.js
async main(msgType, msgContent, senderOpenid) {
    try {
        const apiUrl = 'http://acg.yaohud.cn/dm/acg.php?return=json';
        // ... 数据获取逻辑 ...
        return {
            text: '✨ 今日随机二次元图片',
            image: acgurl
        };
    } catch (error) {
        console.error('[随机图片插件] 错误:', error);
        return '图片获取失败，请稍后再试~';
    }
}
```

## 安装步骤

1. 将插件目录放入 `/plugins`
2. 重启机器人或等待热重载
3. 在控制台添加指令：`image`

## 错误处理

- API不可用时返回友好提示

## 声明
本插件图片资源来自公开API，版权归原作者所有
        