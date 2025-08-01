# QYbot DeepSeek 插件

基于 DeepSeek API 实现的 QQ 机器人智能对话插件，支持与 DeepSeek Chat 和 DeepSeek Reasoner 模型进行交互，并可查询账户余额。

## 功能特性

- 支持与 DeepSeek Chat 模型对话
- 支持与 DeepSeek Reasoner 模型对话
- 支持查询账户余额
- 自动将 Markdown 格式回复转换为图片
- 智能错误处理和超时回退机制

## 使用说明

### 1. 与 DeepSeek Chat 模型对话

```
@bot chat <对话内容>
```

示例：

```
@bot chat 你好，介绍一下你自己
```

### 2. 与 DeepSeek Reasoner 模型对话

```
@bot chatr1 <对话内容>
```

示例：

```
@bot chatr1 请帮我解决一个数学问题：2的10次方等于多少？
```

### 3. 查询账户余额

```
@bot deepseek
```

### 4. 宽屏模式（图片宽度为1080px）

在原有指令后添加 `-w` 后缀可启用宽屏模式：

```
@bot chat-w <对话内容>
@bot chatr1-w <对话内容>
```

## 配置要求

在 `config.json` 中填写您的 DeepSeek API Key：

```
{
    "API_KEY": "your_api_key_here"
}
```

## 注意事项

1. 插件需要有效的 DeepSeek API Key 才能正常工作
2. 图片生成依赖 Chrome 浏览器环境
3. Markdown 转图片过程有 8 秒超时限制
4. 超时或转换失败时会自动回退为文本格式回复
5. 请勿在对话内容中包含敏感词汇

## 使用示例

1. 与 DeepSeek Chat 对话：

```
用户：@bot chat 你好，介绍一下你自己
机器人：
[图片]
```

2. 与 DeepSeek Reasoner 对话：

```
用户：@bot chatr1 请帮我解决一个数学问题：2的10次方等于多少？
机器人：
[图片]
```

3. 查询账户余额：

```
用户：@bot deepseek
机器人：服务可用：
剩余余额：￥99.9
```

4. 宽屏模式：

```
用户：@bot chat-w 生成一个表格展示中国五大城市的人口数量
机器人：
[图片]
```

5. API 错误处理：

```
用户：@bot chat 无效请求
机器人：DeepSeek 服务暂时不可用
```

## 安装说明

1. 将插件文件夹放入 QYbot 的`/plugins`目录
2. 在`config.json`中填写 DeepSeek API Key
3. 重启机器人或等待插件热重载
4. 在 QQ 机器人控制台添加指令：chat、chatr1、deepseek、chat-w、chatr1-w

## 错误处理

插件实现了全面的错误处理机制：

1. API 调用失败时返回友好提示
2. 网络请求错误时自动重试
3. Markdown 转图片超时时自动回退为文本格式
4. 无效指令时提示错误信息
        