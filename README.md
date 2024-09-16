# github-chat

github的测试模型调用

![效果](https://github.com/yoshino-xiao7/tp/blob/main/img/5368650b700d97851a2947661d2a54e.png?raw=true)

## 部署日志

### 环境准备

1. **环境变量配置**
   确保在项目根目录下创建了一个 `.env` 文件，并包含如下内容：
   
   ```plaintext
   GITHUB_TOKEN=your's GITHUB_TOKEN
   ```
   
3. **依赖安装**
  运行以下命令以安装项目所需的依赖：

  ```bash
  npm install
  ```

```bash
  npm install dotenv
```

```bash
  npm install openai
```

### 启动服务

1. **启动服务器**
  启动服务器以监听请求：

```bash
  cd 根目录
```

```bash
  node server.js
```

### 测试 API

1. **测试 API**
   使用 curl 测试 API 是否正常工作：
   
```bash
  curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"message": "What is the capital of France?"}'
```

### 技术限制

   由于本人过于傻逼（技术不成熟），无法突破技术限制，无法部署在服务器上，深感抱歉
