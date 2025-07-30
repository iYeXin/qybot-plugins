# QYbot DeepSeek AI 插件
基于 DeepSeek 大模型 API 实现的智能对话插件，提供多场景 AI 交互能力。

## 功能特性
- 支持 DeepSeek 多版本模型（chat/chatr1）
- 自动转换 Markdown 为图文消息
- 实时查询 API 余额
- 智能降级处理机制
- 支持宽屏模式(-w后缀)
## 使用说明
### 1. 基础指令格式
```
@bot <模型类型> <对话内容>
@bot deepseek
```
### 2. 指令示例
```
@bot chat 解释量子力学
@bot chatr1-w 写一篇关于春天的散文
@bot deepseek
```
### 3. 可用指令集
```
chat     -> 通用对话模式
chatr1   -> 深度推理模式
chat-w   -> 宽屏通用模式
chatr1-w -> 宽屏推理模式
deepseek -> 查询服务状态
```
## 配置要求
在 config.json 中配置参数：

```
{
  "API_KEY": "从 platform.deepseek.com 获取的API密钥"
}
```
## 注意事项
1. 宽屏模式使用 1080px 宽度渲染
2. 图片生成超时自动返回原始 Markdown
3. 对话内容自动附加安全响应配置
## 使用示例
```
用户：@bot chat 用Python实现快速排序
机器人：
[代码块图片]

用户：@bot deepseek
机器人：
服务可用：
剩余余额：￥15.20
```
## 安装说明
1. 将插件文件夹放入 QYbot 的 /plugins 目录
1. 在 DeepSeek平台 创建API密钥
2. 在 `config.json` 中填写有效API_KEY
3. 重启机器人或等待插件热重载
## 错误处理
- API 调用失败时自动降级为文本回复
- 图片生成超时(8秒)自动切换 Markdown 格式

本插件严格遵循 QYbot 开发规范，通过 DeepSeek官方API文档 实现核心功能。