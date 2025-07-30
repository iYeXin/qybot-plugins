# 天气查询插件

基于和风天气API实现的QQ机器人天气查询插件，支持实时天气与三日预报。

## 功能特性

- 实时天气数据查询
- 三日天气预报展示
- 支持原神地名随机加载（需配置开启）
- 多语言指令支持（中英文指令）

## 使用说明

### 基础指令
```
@bot weather [城市名]
@bot 天气 [城市名]
```

### 指令示例
```
用户：@bot weather 上海
机器人：
🌤️ 上海：当前天气: 晴
🌡️ 温度: 28℃ | 体感: 30℃
💨 东南风 3级
💧 湿度: 65% | 能见度: 10公里
🕒 更新时间: 15:45:00

📅 未来三天预报:

📌 2023-08-01 晴
☀️ 温度: 26~32℃
🌙 夜间: 多云
...
```

## 配置要求

在 `config.js` 中配置：
```
Sle.exports = {
    WEATHER_API_HOST: "https://your-api-host.com",
    WEATHER_API_KEY: "your-api-key",
    GENSHIN_PLACE: false // 开启原神地名随机加载
};
```

## 注意事项

1. API Host需从和风天气控制台获取
2. 城市名称需使用标准中文名称
3. 原神地名功能需手动开启
4. API调用受和风天气服务条款限制

## 技术实现

通过 `getLocationld` 实现城市定位：
```
async function getLocationId(cityName) {
    // ... 城市查询逻辑 ...
    return {
        id: data.location[0].id,
        name: data.location[0].name
    };
}
```

## 安装步骤

1. 将插件目录放入 `/plugins`
2. 配置API密钥和Host地址
3. 重启机器人或等待热重载
4. 在控制台添加指令：`weather`, `天气`

## 错误处理

- API限额超限时返回友好提示
- 城市不存在时自动使用默认城市
- 网络错误自动重试3次


## 数据来源
本插件天气数据由[和风天气](https://www.qweather.com)提供
        