# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with React.js, featuring smooth animations, dark mode, and a clean design to showcase my projects and skills.

![Portfolio Preview]<img width="1896" height="924" alt="image" src="https://github.com/user-attachments/assets/0ee2b85d-f6d3-429c-876b-4beaeca69ad5" />


## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with smooth animations
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📱 Responsive**: Optimized for all device sizes
- **⚡ Fast Performance**: Built with modern React and optimized for speed
- **🎭 Smooth Animations**: Powered by Framer Motion for engaging user experience
- **📧 Contact Form**: Functional contact form for easy communication
- **🔗 Project Showcase**: Interactive project cards with live demos and source code links

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Vercel/Netlify

## 🏗️ Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── asstes/
│   │   └── [images and icons]
│   ├── App.js
│   ├── App.css
│   └── index.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhisek1233/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   ```
   Then edit `.env` and add your EmailJS credentials:
   - Go to [EmailJS.com](https://emailjs.com) and create an account
   - Create a service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key
   - Replace the values in `.env` with your actual credentials

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

This builds the app for production to the `build` folder.

## 🎯 Sections

### 🏠 Hero Section
- Eye-catching introduction with animated elements
- Call-to-action buttons
- Professional photo/avatar

### 👤 About Section
- Personal introduction
- Background information
- Skills overview

### 💻 Skills Section
- Technical skills with progress indicators
- Technology stack
- Tools and frameworks

### 🚧 Projects Section
- Featured project cards
- Live demo and source code links
- Technology stack for each project
- Responsive grid layout

### 📞 Contact Section
- Contact form with validation
- Social media links
- Professional information

## 🎨 Customization

### Colors
Edit the Tailwind CSS configuration in `tailwind.config.js` to customize colors:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom colors
        }
      }
    }
  }
}
```

### Content
Update the content in each component file:
- `src/components/Hero.js` - Personal information
- `src/components/About.js` - About section content
- `src/components/Projects.js` - Project data
- `src/components/Skills.js` - Skills and technologies

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🌟 Key Features Breakdown

### Dark Mode Implementation
- System preference detection
- Manual toggle option
- Persistent theme storage
- Smooth transitions

### Animation System
- Scroll-triggered animations
- Hover effects
- Loading animations
- Staggered element appearances

### Project Cards
- Hover effects with elevation
- Technology tag animations
- Uniform button styling
- Responsive layout

## 🔧 Dependencies

### Main Dependencies
```json
{
  "react": "^18.x.x",
  "react-dom": "^18.x.x",
  "framer-motion": "^10.x.x",
  "lucide-react": "^0.x.x"
}
```

### Dev Dependencies
```json
{
  "@testing-library/jest-dom": "^5.x.x",
  "@testing-library/react": "^13.x.x",
  "tailwindcss": "^3.x.x"
}
```

## 📈 Performance

- ⚡ Lighthouse Score: 95+
- 🎯 SEO Optimized
- 📦 Code Splitting
- 🖼️ Lazy Loading
- 🗜️ Asset Optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Deploy automatically on push
3. Custom domain support

### Netlify
1. Build command: `npm run build`
2. Publish directory: `build`
3. Deploy from Git

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhisek Pradhan**
- 🌐 Website: (https://your-portfolio-url.com)
- 📧 Email: abhisekbehera506@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/abhisek-behera-a797b3273/
- 🐱 GitHub: [@Abhisek1233](https://github.com/Abhisek1233)

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Lucide React](https://lucide.dev/) - Icon Library
- [Vercel](https://vercel.com/) - Deployment Platform

## 📊 Project Status

🚀 **Status**: Active Development
📅 **Last Updated**: January 2025
🔄 **Version**: 1.0.0

---

⭐ If you found this project helpful, please give it a star!

🐛 Found a bug? [Create an issue](https://github.com/Abhisek1233/my_prortfolio)


💡 Have a suggestion? [Start a discussion](https://github.com/Abhisek1233/my_prortfolio)

