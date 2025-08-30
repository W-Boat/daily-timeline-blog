# Daily Timeline Blog

一个优雅简洁的 Hexo 博客主题，专为记录日常时光而设计。采用黑白配色方案，响应式设计，高级动效，性能优化。

## ✨ 特性

- 📱 **响应式设计** - 完美适配所有设备
- ⚡ **性能优化** - 快速加载，流畅动画
- 🎨 **简约设计** - 优雅的黑白配色主题
- 📖 **时间轴布局** - 类似朋友圈的时间线展示
- 🚀 **一键部署** - 支持 GitHub Pages 和 Vercel
- 💫 **高级动效** - 平滑的滚动动画和过渡效果

## 🚀 快速开始

### 安装依赖

```bash
cd daily-timeline-blog
npm install
```

### 本地预览

```bash
npm run server
```

访问 `http://localhost:4000` 查看效果

### 创建新文章

```bash
npx hexo new "文章标题"
```

### 生成静态文件

```bash
npm run build
```

## 📁 项目结构

```
daily-timeline-blog/
├── themes/timeline/          # 自定义主题
│   ├── layout/              # 模板文件
│   ├── source/              # 静态资源
│   └── _config.yml          # 主题配置
├── source/_posts/           # 文章目录
├── _config.yml              # 站点配置
├── package.json             # 项目依赖
└── vercel.json              # Vercel 配置
```

## 🌐 部署

### GitHub Pages

1. 将项目推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Actions
3. 每次推送到 `main` 分支时自动部署

### Vercel

1. 将仓库连接到 Vercel
2. 选择项目并导入
3. Vercel 会自动识别配置并部署

## ⚙️ 配置

### 站点配置 (_config.yml)

```yaml
# 站点信息
title: Daily Timeline
subtitle: 'A minimalist daily journal'
description: 'Elegant daily moments captured in time'
author: Your Name

# 主题
theme: timeline

# 部署配置
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: main
```

### 主题配置 (themes/timeline/_config.yml)

```yaml
# 颜色配置
colors:
  primary: "#000000"
  secondary: "#ffffff"
  text: "#1a1a1a"

# 动画配置
timeline:
  enable_animation: true
  animation_duration: "0.3s"

# 性能优化
performance:
  lazy_load: true
  minify_css: true
```

## 📝 写作建议

- 使用有意义的标题
- 添加相关标签便于分类
- 保持内容简洁优雅
- 记录日常生活中的美好瞬间

## 🎨 自定义

### 修改颜色主题

编辑 `themes/timeline/source/css/style.styl` 文件中的颜色变量。

### 添加新布局

在 `themes/timeline/layout/` 目录下创建新的 EJS 模板文件。

### 自定义动画

修改 `themes/timeline/source/js/main.js` 文件中的动画逻辑。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

---

开始记录你的时光线吧！ ✨