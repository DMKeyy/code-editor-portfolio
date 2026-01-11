# 💼 VS Code Portfolio

A modern, interactive portfolio website styled as a Visual Studio Code interface. Built with React, TypeScript, and Tailwind CSS, featuring a responsive design that adapts beautifully to all screen sizes.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-VS%20Code%20Theme-blue?style=for-the-badge&logo=visualstudiocode)

## 🌟 Features

- **VS Code Interface**: Authentic VS Code-like user interface with tabs, sidebar, and terminal
- **Responsive Design**: Fully responsive with mobile-optimized navigation
- **Interactive Navigation**: Browse through About, Projects, and Contact sections like files in an editor
- **Terminal Simulation**: Includes a working terminal component for that authentic dev experience
- **Modern UI Components**: Built with Radix UI and shadcn/ui for accessible, customizable components
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Dark Theme**: Eye-friendly dark color scheme matching VS Code's dark theme

## 🚀 Live Demo

🔗 **[View Live Portfolio](https://dmkey.netlify.app/)**

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form**: Web3Forms

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DMKeyy/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx          # VS Code-style sidebar navigation
│   │   ├── TabBar.tsx           # File tabs component
│   │   ├── Terminal.tsx         # Terminal simulation
│   │   ├── VSCodeLayout.tsx     # Main layout component
│   │   ├── WelcomeScreen.tsx    # Welcome/landing screen
│   │   ├── tabs/
│   │   │   ├── AboutTab.tsx     # About section
│   │   │   ├── ProjectsTab.tsx  # Projects showcase
│   │   │   └── ContactTab.tsx   # Contact information
│   │   ├── projects/
│   │   │   └── ProjectDetail.tsx
│   │   └── ui/                  # Reusable UI components (shadcn/ui)
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   ├── pages/                   # Page components
│   ├── types/                   # TypeScript type definitions
│   └── App.tsx                  # Root component
├── public/                      # Static assets
└── package.json
```

## 🎨 Customization

1. **Update About Section**: Edit `src/components/tabs/AboutTab.tsx`
2. **Add Projects**: Modify `src/components/tabs/ProjectsTab.tsx`
3. **Change Contact Info**: Update `src/components/tabs/ContactTab.tsx`
4. **Customize Colors**: Adjust Tailwind configuration in `tailwind.config.ts`
5. **Add New Tabs**: Create new components in `src/components/tabs/` and update `VSCodeLayout.tsx`


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/DMKeyy/Portfolio/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**DMKeyy**

- GitHub: [@DMKeyy](https://github.com/DMKeyy)
- Portfolio: [dmkeyy.github.io/Portfolio](https://dmkeyy.github.io/Portfolio/)

## ⭐ Show your support

Give a ⭐️ if you like this project!

## 🙏 Acknowledgments

- Inspired by Visual Studio Code's interface
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

Built with ❤️ using React and TypeScript
