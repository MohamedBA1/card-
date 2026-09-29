# Premium Digital Business Card Website – Member of Parliament Sayed Samir

A premium, fast, mobile-first, bilingual (Arabic & English) digital business card platform built for **Egyptian Member of Parliament Sayed Samir** (`النائب سيد سمير`). 

This application replicates the appearance, responsiveness, and speed of elite platforms such as HiHello, Popl, and Linq, utilizing custom-tailwed luxury governmental motifs, gold-gilded typography, and professional animations.

---

## 🎨 Visual & Technical Highlights

- **Bilingual Core & Adaptive RTL Layout**: Features a seamless instant toggle between Arabic and English, automatically managing layouts, alignments, typography weightings, and browser page headers.
- **Luxury Brand Colors**: Uses dark royal navy (`#0B1F3A`) paired with brilliant gold gradients (`#C9A227` and `#E9C46A`) and glassmorphic translucent layers for a sleek, authoritative finish.
- **Refined Typography**: Integrates Cairo for beautiful Arabic headings and body alongside Inter for sharp, ultra-clean English letters.
- **Interactive QR Sharing**: Dynamically renders a customized high-contrast QR code linked directly to the live card address with instant copy-to-clipboard fallbacks.
- **VCF Mobile download**: Fully integrated static `.vcf` vCard contact sheet download so users can instantly save the MP's phone number, email, and social networks straight to their mobile device address books.
- **Embedded Interactive Location Services**: Fully responsive, gold-bordered embedded Google Map detailing the constituency office in Mit Ghamr, Dakahlia.
- **Strictly Static**: Runs entirely on the client, with zero server load, meaning zero maintenance, ultra-high security, and instant global delivery.

---

## 📂 Project Architecture & Codebase

```
src/
├── assets/
│   ├── files/
│   │   └── SayedSamir.vcf       # vCard metadata for contact cards
│   └── images/
│       └── sayed_samir_portrait.jpg          # Official MP portrait photo
├── components/
│   ├── About.tsx                 # Bento biographical details & state timeline
│   ├── Contact.tsx               # Maps embed, telephone lines, and working hours
│   ├── Footer.tsx                # Copyright credits, active Facebook links, and back-to-top actions
│   ├── Hero.tsx                  # Profile photo, circular aura animations, and verification badges
│   ├── Navbar.tsx                # Sticky header, section highlighters, and language switchers
│   ├── QRCode.tsx                # Customized API-backed QR code sharing
│   ├── QuickActions.tsx          # Fast touch targets (Call, WhatsApp, Email, Save Contact, Share)
│   └── Stats.tsx                 # Incrementing counter stats for citizens, meetings, and projects
├── App.tsx                       # Global state orchestrator and directory direction manager
├── data.ts                       # High-fidelity bilingually localized translation copy dictionaries
├── index.css                     # Font imports, Tailwind config variables, and glassmorphic card classes
├── main.tsx                      # Entry-point bootstrap
├── declarations.d.ts             # TypeScript static media module resolvers
└── types.ts                      # Shared types & layout configurations
```

---

## 🚀 Setting Up Locally

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** (v9+) installed.

### Installation

1. Clone or extract the project.
2. In the root directory, install the required dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the digital business card.

---

## 📦 Building and Deployment

Since the application is 100% static, it can be deployed to any major host in seconds.

### 1. Build for Production

Compile all assets, styles, and scripts into a high-performance, minified static distribution package:
```bash
npm run build
```
This outputs all files to the `/dist` directory.

### 2. Deploying to Netlify

1. Go to your Netlify dashboard and click **Add new site** > **Deploy manually**.
2. Drag and drop the compiled `/dist` folder directly.
3. Your premium card is live!

### 3. Deploying to GitHub Pages

1. Initialize a Git repository in your workspace if you haven't already:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new repository on GitHub.
3. Push your code to GitHub.
4. Go to **Settings** > **Pages** in your GitHub repository and configure deployment from the `gh-pages` branch, or use a GitHub Action for Vite projects.

---

## 👤 Member of Parliament Information

- **Name**: النائب سيد سمير (MP Sayed Samir)
- **Title**: Member of the Egyptian Parliament (عضو مجلس النواب المصري)
- **Affiliation**: Egyptian Parliament (مجلس النواب المصري)
- **Constituency**: Mit Ghamr, Dakahlia Governorate, Egypt (ميت غمر، الدقهلية)
- **Official Email**: ssamirmp1@gmail.com
- **Direct Phone**: +201009988888
- **Official FaceBook**: https://www.facebook.com/share/181EnYghKG/?mibextid=wwXIfr
