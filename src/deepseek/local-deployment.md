# Local Deployment of DeepSeek R1

::: info
Run the DeepSeek R1 model locally via Ollama.
:::


## Ollama

[Ollama](https://github.com/ollama/ollama) is an open-source project focused on running, managing, and configuring large language models locally. Download the latest release from [Ollama GitHub](https://github.com/ollama/ollama/releases) (e.g.,`Ollama-darwin.zip`), extract it, and double-click to install. After installation, use the command-line tool `ollama`.


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

The [DeepSeek R1 model](https://ollama.com/library/deepseek-r1) includes seven variants with different parameter sizes, six of which are distilled models. 

![deepseek-r1.png](https://share.pileax.ai/assets/deepseek-r1.DNHSbr6W.png)

::: tip
For personal computers, we recommend the `14b` variant, which requires approximately **9GB** of storage.
:::

### Running the Model


```bash
ollama run deepseek-r1:14b
```

The model will be automatically downloaded on the first run. After launching DeepSeek, interact with it via the command-line interface or Web UI.

**Starting a Conversation**


```bash
>>> Who are you?
```

**Ending a Conversation**


```bash
>>> /bye
```

### Web UI

[Open WebUI](https://github.com/open-webui/open-webui) is a web-based interface that supports Ollama, OpenAI, and DeepSeek APIs.

**Installation**


```bash
# Install via pip
pip install open-webui

# For Python versions above 3.11
pipx install --fetch-missing-python --python 3.11 open-webui

# Start the service
open-webui serve
```

After starting the service, access the Web UI at: [http://localhost:8080](http://localhost:8080/).