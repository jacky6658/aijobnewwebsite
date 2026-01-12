# AIJOB Website - Next.js SEO 優化版

這是一個使用 Next.js 14 建構的 SEO 友好網站，專注於 AI 智能體開發與培訓服務。

## 🚀 功能特色

- ✅ **SEO 優化**：完整的 metadata、結構化資料、sitemap 和 robots.txt
- ✅ **伺服器端渲染 (SSR)**：提升搜尋引擎索引效率
- ✅ **靜態生成 (SSG)**：預渲染頁面，提升載入速度
- ✅ **響應式設計**：完美支援各種裝置
- ✅ **AI 聊天機器人**：整合 Google Gemini API
- ✅ **課程解析功能**：自動解析課程連結並生成卡片

## 📦 技術棧

- **框架**：Next.js 14 (App Router)
- **語言**：TypeScript
- **樣式**：Tailwind CSS
- **圖標**：Lucide React
- **AI 服務**：Google Gemini API
- **圖表**：Recharts

## 🛠️ 安裝與執行

### 1. 安裝依賴

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 設定環境變數

建立 `.env.local` 檔案：

```env
API_KEY=your_google_gemini_api_key
```

### 3. 執行開發伺服器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

### 4. 建置生產版本

```bash
npm run build
npm start
```

## 📁 專案結構

```
AIJobwebsite-nextjs/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # 根布局（含 SEO metadata）
│   ├── page.tsx         # 首頁
│   ├── globals.css      # 全域樣式
│   ├── sitemap.ts       # 自動生成 sitemap
│   └── robots.ts        # robots.txt 設定
├── components/          # React 組件
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ToolLibrary.tsx
│   ├── AIApps.tsx
│   ├── CourseParser.tsx
│   ├── Mentors.tsx
│   ├── Footer.tsx
│   └── AIAgent.tsx
├── services/           # 服務層
│   └── geminiService.ts
├── public/             # 靜態資源
│   └── image/
├── constants.ts        # 常數定義
├── types.ts           # TypeScript 類型定義
└── package.json
```

## 🔍 SEO 優化項目

1. **Metadata API**：自動生成 meta 標籤
2. **結構化資料 (JSON-LD)**：協助搜尋引擎理解內容
3. **自動生成 Sitemap**：`/sitemap.xml`
4. **Robots.txt**：`/robots.txt`
5. **語義化 HTML**：使用正確的 HTML5 標籤
6. **圖片優化**：Next.js Image 組件自動優化
7. **Open Graph**：社群媒體分享優化
8. **Twitter Cards**：Twitter 分享優化

## 📝 環境變數

| 變數名稱 | 說明 | 必填 |
|---------|------|------|
| `API_KEY` | Google Gemini API 金鑰 | 是 |

## 🚀 部署

### Vercel (推薦)

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 匯入專案
3. 設定環境變數
4. 自動部署完成

### 其他平台

Next.js 可以部署到任何支援 Node.js 的平台：
- Netlify
- AWS Amplify
- Railway
- 自架伺服器

## 📄 授權

© 2024 AIJOB LABS. All rights reserved.

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request！

## 📞 聯絡我們

- 網站：https://aijob.com.tw
- Email：contact@aijob.com.tw

---

**Powered by Next.js & AI Generation**
