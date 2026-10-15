# FLOW FOR GOOD

完整静态网页游戏原型，直接打开 `index.html` 即可游玩，无需安装依赖。也可在本目录运行 `python3 -m http.server 4173 --directory .`，访问 http://localhost:4173。

## 游戏规则
- 5×5 固定棋盘，左上水源、右下黄色 Jerry Can。
- 点击/触摸管道顺时针旋转。污染、过滤、地形与端点固定。
- 蓝色清水经过污染后变浑浊，经过自然过滤恢复蓝色。只有清水到达终点才能成功。
- FLOW WATER 逐格显示结果；流动失败保留当前布局。
- 第 1 关：12 步；第 2 关：16 步；第 3 关：120 秒；第 4 关：105 秒；第 5 关：24 步 + 120 秒。
- 计时从第一次旋转/放水开始。说明弹窗或后台标签页暂停计时。放水不扣步数，旋转计一步。
- 超限后进入练习模式，可继续调整和过关；重启本关恢复正式挑战。所有关卡可通过顶部进度条直接进入。
- Show route 提示经过验证的路线，不自动旋转。

## 文件
`index.html` 页面、`style.css` 响应式样式、`engine.js` 独立规则与关卡、`app.js` 交互与动画、`charity-water-logo.png` 用户提供的原始官方 logo（未修改，CSS 仅约束显示窗口）。

字体使用可选 Google Fonts；离线时回退系统字体，游戏不依赖网络。CTA 指向 charitywater.org。页面为独立教育原型。

## 验证
运行 `node test.cjs`。验证五关预设路线、初始未完成、旋转可解且在步数内、固定端点、污染/过滤状态、污水失败和失败不修改棋盘。

已验证解法需要的旋转数依次为 9、9、10、15、15。计时关卡预留充足操作时间，计时包含放水动画。

## 手绘美术版本（2026-10-15）
新增独立开始页与返回/继续游戏，纸张纹理、手绘字体、社区山泉场景、带接头与高光的管道、岩石树木、自然污染水纹、过滤植物和角色提示。原五关数据与规则未改动。返回首页时保留布局并暂停计时。官方 logo 原文件未改变。

新版增加 `storybook.css` 和 `water-journey.png`。插画生成方式与完整提示见 `ASSETS.md`。

## Public website

GitHub Pages serves the repository root from the `main` branch. After deployment, the website URL will be shown in repository Settings → Pages. Push edits to the game files to update the website.
