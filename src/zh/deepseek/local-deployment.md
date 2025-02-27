# 本地部署 DeepSeek R1

::: info
通过 Ollama 在本地安装运行 DeepSeek R1 模型。
:::

## Ollama
[Ollama](https://github.com/ollama/ollama) 是一个开源项目，专注于在本地运行、管理和配置大型语言模型。 在 [Ollama Github](https://github.com/ollama/ollama/releases) 下载，得到 Ollama-darwin.zip ，解压后即可双击运行安装，安装完成后就可以使用命令行工具```ollma```。

```bash
> ollama -h
Large language model runner

Usage:
  ollama [flags]
  ollama [command]

Available Commands:
  serve       Start ollama
  create      Create a model from a Modelfile
  show        Show information for a model
  run         Run a model
  stop        Stop a running model
  pull        Pull a model from a registry
  push        Push a model to a registry
  list        List models
  ps          List running models
  cp          Copy a model
  rm          Remove a model
  help        Help about any command
```

## DeepSeek R1
[DeepSeek R1 模型](https://ollama.com/library/deepseek-r1) 包含7个不同参数级别的模型，其中6个是蒸馏模型。
::: tip
这里根据个人电脑配置，选择 ```14b``` 的模型，预计需要9G存储空间。
:::

### 运行模型
```bash
ollama run deepseek-r1:14b
```
首次运行会自动下载模型到本地。 DeepSeek运行后，可以通过命令行或Web UI进行交互。

**开始对话**

```bash
>>> 你是谁？
```

**结束对话**

```bash
>>> /bye
```

### Web UI

[open-webui](https://github.com/open-webui/open-webui) 是一个Web版的AI交互界面，支持Ollama, OpenAI, DeepSeek的API。

```bash
# 安装
pip install open-webui

# 如果 Python 版本高于3.11，使用这个方法安装
pipx install --fetch-missing-python --python 3.11 open-webui

# 启动服务
open-webui serve
```
启动服务后，就可以在Web中与模型进行交互了，默认访问地址为：http://localhost:8080

