## Introduction

AI guide for everyone. [Preview](https://guide.pileax.ai)

### Features
- I18n messages
- Less code
- Flexible and easily scalable

## Quick start

### Installation
```shell
pnpm install
```

### Running
```shell
pnpm docs:dev
```

### Build
```shell
pnpm docs:build
```

and preview it locally:
```shell
pnpm docs:preview
```

## I18n

### Docs Directory Structure
```markdown
├── src
│   ├── index.md
│   └── zh
│       └── index.md
```

### Config and Messages
```markdown
├── config
│   ├── common.mts
│   ├── en.mts
│   ├── index.mts
│   └── zh.mts
├── i18n
│   ├── en.json
│   ├── index.ts
│   └── zh.json
```

## License

[MIT](https://github.com/pileax/pileax-ai-guide/blob/master/LICENSE)



