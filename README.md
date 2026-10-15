# FLOW FOR GOOD 💧

**引导清水，连接希望。 / Guide clean water. Change what happens next.**

一个以清洁饮水为主题的手绘风格网页益智游戏。通过旋转管道，将左上角的水源连接到右下角的黄色 Jerry Can；污染的水必须经过自然过滤，只有清水到达终点才算成功。

A hand-drawn web puzzle about clean water. Rotate pipes to connect the top-left water source to the yellow jerry can in the bottom-right corner. Polluted water must pass through a natural filter; only clean water at the destination counts as a win.

**[🎮 在线游玩 / Play online](https://martincaominxuan.github.io/flow-for-good/)**

## 游戏玩法 / How to play

1. 点击或轻触管道，使其顺时针旋转 90°。水源、终点、污染、过滤和地形格固定。  
   Click or tap a pipe to rotate it 90° clockwise. The source, destination, pollution, filters, and terrain stay fixed.
2. 将水源与 Jerry Can 连通。清水经过污染格变为浑浊水，经过自然过滤格恢复清水。  
   Connect the source to the jerry can. Pollution turns clean water cloudy; a natural filter turns it clean again.
3. 点击 **FLOW WATER**，观察逐格水流动画：蓝色为清水，浑浊色为污染水。  
   Press **FLOW WATER** to watch the route fill tile by tile: blue for clean water, muddy brown for polluted water.
4. 失败后保留棋盘，可以继续调整。**Show route** 可显示已验证的路线，不会自动旋转管道。  
   Failed flows preserve the board so you can keep adjusting. **Show route** reveals the verified route without rotating pipes for you.

## 五个预设关卡 / Five preset levels

所有关卡均为固定设计，并通过可解性测试，不会随机生成无解布局。  
Every level is deliberately designed and tested for solvability; no random unsolvable boards are generated.

| 关卡 / Level | 步数限制 / Turn limit | 时间限制 / Time limit | 已验证解法步数 / Verified solution turns |
| --- | --- | --- | --- |
| 1 | 12 | 无 / None | 9 |
| 2 | 16 | 无 / None | 9 |
| 3 | 无 / None | 120 秒 / seconds | 10 |
| 4 | 无 / None | 105 秒 / seconds | 15 |
| 5 | 24 | 120 秒 / seconds | 15 |

每次旋转计一步；放水不扣步数。计时从第一次旋转或放水开始，包含水流动画时间。说明弹窗、后台标签页及返回首页时暂停计时。超限后进入练习模式，可继续调整，或重启当前关卡重新挑战。  
Each rotation uses one turn; testing the flow does not. The timer starts with the first rotation or flow attempt and includes the flow animation. It pauses while instructions are open, the tab is in the background, or the home screen is shown. After exceeding a limit, continue in practice mode or restart the level for a fresh challenge.

## 视觉与交互 / Visuals and interaction

- 奶油纸张背景、手绘社区山泉插画、黄色 Jerry Can、蓝色水流和柔和绿色植物。  
  Cream paper textures, a hand-drawn community landscape, a yellow jerry can, blue water, and soft green plants.
- 独立开始页、角色提示、精简 HUD、桌面与手机响应式布局。  
  A dedicated start screen, character guidance, a compact HUD, and responsive desktop/mobile layouts.
- 使用用户提供的官方 charity: water logo 原图。插画生成说明见 [ASSETS.md](ASSETS.md)。  
  Uses the original official charity: water logo supplied by the project creator. See [ASSETS.md](ASSETS.md) for illustration provenance.

## 本地运行 / Run locally

无需安装依赖，直接用浏览器打开 `index.html` 即可游玩。也可以在项目目录启动静态服务器：  
No dependencies are required. Open `index.html` directly in a browser, or serve the project directory locally:

```sh
python3 -m http.server 4173 --directory .
```

打开 / Open: [http://localhost:4173](http://localhost:4173)

Google Fonts 为可选在线字体，离线时使用系统字体，游戏规则与交互不依赖网络。  
Google Fonts are optional; system fonts are used offline. Gameplay logic and interactions do not require a network connection.

## 核心测试 / Core tests

```sh
node test.cjs
```

验证五关可解、旋转步数在限制内、端点固定、污染与过滤状态变化、污水到达终点失败，以及放水测试不修改棋盘布局。  
Verifies all five solutions, turn limits, fixed endpoints, pollution/filter transitions, failure when polluted water reaches the destination, and non-destructive flow checks.

## 项目结构 / Project files

| 文件 / File | 用途 / Purpose |
| --- | --- |
| `index.html` | 页面结构 / Page structure |
| `style.css`, `storybook.css` | 响应式与手绘风格 / Responsive and storybook styling |
| `engine.js` | 规则与固定关卡 / Rules and preset levels |
| `app.js` | 交互、水流动画与页面切换 / Interaction, flow animation, and navigation |
| `charity-water-logo.png` | 官方 logo 原图 / Original official logo |
| `water-journey.png` | 开始页插画 / Start-screen illustration |
| `test.cjs` | 核心逻辑测试 / Core logic tests |

## 发布与项目说明 / Deployment and project note

GitHub Pages 从 `main` 分支的根目录自动发布。更新游戏文件后，网站会重新部署。  
GitHub Pages publishes from the root of the `main` branch. Updating the game files triggers a new deployment.

本项目为独立课程作业与教育原型，并非 charity: water 官方产品。了解真实清洁饮水项目，请访问 [charitywater.org](https://www.charitywater.org/)。  
This is an independent coursework and educational prototype, not an official charity: water product. Learn about real clean-water projects at [charitywater.org](https://www.charitywater.org/).
