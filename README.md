# Xia Dynasty 游戏作品集

静态站点（Astro），展示 [Game_demo](https://github.com/zhan-gyu746/Game_demo) 里的原创游戏。上线地址：<https://zhan-gyu746.github.io/>

演示视频嵌 B 站；安装包请放到 **Game_demo 的 GitHub Releases**，不要提交进本仓库。

## 本地预览

需要 Node.js 18 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开终端提示的本地地址（一般是 `http://localhost:4321/`）。

## 部署

1. 仓库为 [zhan-gyu746/zhan-gyu746.github.io](https://github.com/zhan-gyu746/zhan-gyu746.github.io)（用户站，根路径）。
2. 把本目录推到该仓库的 `main` 分支。
3. 仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。
4. 等待 Actions 成功后访问 <https://zhan-gyu746.github.io/>。

## 加一款新游戏

1. 复制 `src/content/games/` 下任意一篇 Markdown，文件名即网址 slug（例如 `my-game.md` → `/games/my-game`）。
2. 改 frontmatter：标题、类型、年份、平台、封面路径。
3. 封面和截图放到 `public/games/新slug/`，路径写成 `/games/新slug/cover.jpg` 这类站点根路径。
4. 在 Unity 导出 Windows 独立包，打成 zip（不要提交进本仓库）。
5. 在 [Game_demo Releases](https://github.com/zhan-gyu746/Game_demo/releases) 新建 Release，建议 tag 形如 `slim-v1.0.0`、`key-space-v1.0.0`，上传 zip。
6. 把资源直链填进 `downloads.url`。有 B 站视频则填 `bilibiliBvid`（只要 BV 号，例如 `BV1xx411c7mD`）。
7. 提交并推送本仓库，等 GitHub Actions 部署完成。

字段示例：

```yaml
title: Slim
kind: game
genre: 桌面小品
year: 2025
platforms: [Windows]
cover: /games/slim/cover.svg
screenshots:
  - /games/slim/1.svg
bilibiliBvid: ""
downloads:
  - label: Windows
    version: v1.0.0
    size: 80 MB
    url: https://github.com/zhan-gyu746/Game_demo/releases/download/slim-v1.0.0/Slim-windows.zip
```

`bilibiliBvid` 或 `downloads.url` 留空时，详情页会显示「尚未上传 / 尚未发布」，不会出现坏链。

## 只更新已有游戏

- 换图：替换 `public/games/...` 里的文件，保持文件名或同步改 Markdown。
- 换版本：改对应 Markdown 里的 `version`、`size`、`url`。
- KEY-SPACE：仓库里还没有独立构建包，详情页会显示未发布；Build 出 zip 并上传 Release 后再填 `downloads`。
- Slim：请把 `Slim/` 下的 exe 与 `_Data` 打成一个 zip 再上传 Release，不要把网站下载按钮指到 `raw.githubusercontent.com` 上的单个 exe。

## 不要放进本站或 Releases 的内容

第三方商业资源（例如 Epic Toon FX）不能作为「我的资源」提供下载。若合法购买，只适合在说明里链到商店页面。
