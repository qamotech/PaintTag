# 🎨🏷️ PaintTag Vault

**Small React paint-record prototype for adding and removing property, room, color-name, and paint-formula entries in the current browser session.**

🏷️ Maintained in [qamotech/PaintTag](https://github.com/qamotech/PaintTag) · 🌐 Public repository

## ✨ What is here

- 🏠 Record a property and room.
- 🎨 Store a color name and formula in component state.
- ➕ Add records through a compact form.
- 🗑️ Remove records from the visible list.

## 🧭 Try the project

Start the development server, choose Add New Paint, enter a sample property/room/color/formula, save it, and remove the sample when finished.

## 🚀 Local setup

```sh
git clone https://github.com/qamotech/PaintTag.git
cd PaintTag
```

Use Node.js and npm compatible with the versions in `package.json`. Install dependencies locally, then launch the declared development command:

```sh
npm install
npm run dev
```

Open the address printed by the development server. The manifest is the source of truth for commands:

| Command | Declared operation |
|---|---|
| `npm run dev` | `vite --port=3000 --host=0.0.0.0` |
| `npm run build` | `vite build` |
| `npm run preview` | `vite preview` |
| `npm run clean` | `rm -rf dist server.js` |
| `npm run lint` | `tsc --noEmit` |

Install/build scripts can execute code. Inspect project configuration and keep secrets in local configuration excluded from Git. No dependency installation or application build was performed for this documentation update.

## 🗂️ Source map

- 📄 [`index.html`](index.html)
- 📄 [`metadata.json`](metadata.json)
- 📄 [`package.json`](package.json)
- 📄 [`tsconfig.json`](tsconfig.json)
- 📄 [`vite.config.ts`](vite.config.ts)
- 📄 [`src`](src) — source directory
- 📄 [`assets`](assets) — source directory

## ⚙️ Configuration & data

Records currently live only in React state and disappear after reload. The document icon has no action handler. No camera capture, durable storage, authentication, or backend is implemented in the inspected component.

Keep credentials, private exports, customer records, and personal information out of commits and screenshots. A local browser demo is not evidence of account security, reliable persistence, or connected external services. Preserve exports before changing storage keys or resetting an application.

## 🧪 Verification checklist

- 🔎 Confirm the entry file and asset paths above exist in your checkout.
- ▶️ Start the documented runtime and inspect browser or terminal errors.
- 🧭 Exercise the project-specific workflow described above using sample data.
- 📱 Check narrow and wide layouts when the project has a browser interface.
- 💾 Verify save/export and recovery behavior before trusting important work to it.
- 📝 Record the exact command, browser, operating system, and outcome of your checks.

This guide was prepared from repository files and manifests. It does not claim a fresh build, deployment, security audit, or full functional test of this project.

## 🤝 Contributions & useful reports

Keep changes focused and explain the user-visible result. Preserve existing assets and configuration unless a change requires updating them. Include reproduction steps, expected and actual behavior, and relevant screenshots with personal information removed. For UI work, include the viewport and browser; for runtime issues, include the command and error text.

## 🛠️ Maintenance priorities

- 📚 Keep this guide aligned with implemented behavior and current entry points.
- 🧪 Add or maintain checks for the core workflow before expanding features.
- ♿ Review labels, keyboard navigation, contrast, and responsive layout.
- 📦 Document external services, asset rights, and deployment prerequisites.

## 📜 Licensing & attribution

This documentation update does not grant a new software or asset license. Consult existing license files, source headers, package metadata, and original asset terms; resolve inconsistencies with the owner before redistribution. Third-party names and resources retain their own terms.
