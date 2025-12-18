# ⵜⵉⴼⵉⵏⴰⵖ Tifinagh Keyboard

A beautiful, free online virtual keyboard for typing in Tifinagh script - the ancient writing system of the Amazigh (Berber) people of North Africa.

![Tifinagh Keyboard Preview](/public/keyboard-overview.png)

## ✨ Features

- 🎹 **Complete Tifinagh Character Set** - All Neo-Tifinagh letters
- 🔤 **Latin Transliteration** - Toggle to show/hide Latin equivalents
- 📋 **One-Click Copy** - Copy your text to clipboard instantly
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🎨 **Beautiful UI** - Modern, gradient design with smooth animations
- ⚡ **Fast & Lightweight** - No installation required
- 🌐 **SEO Optimized** - Discoverable by search engines
- ♿ **Accessible** - ARIA labels for screen readers

## 🚀 Demo

[Live Demo](https://tifinaghkeyboard.mohamedjada.com)

#
## 🛠️ Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Fonts](https://fonts.google.com/) - Crimson Pro & Work Sans

## 🏃 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/tifinagh-keyboard.git
cd tifinagh-keyboard
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
tifinagh-keyboard/
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.js              # Main keyboard component
├── public/
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── og-image.jpg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── styles/
│   └── globals.css
├── README.md
├── package.json
└── next.config.js
```

## 🎨 Customization

### Changing Colors

The keyboard uses Tailwind's amber/orange color scheme. To change colors, update the following classes in the component:

```jsx
// Main gradient background
className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"

// Header gradient
className="bg-gradient-to-r from-amber-700 via-orange-600 to-red-600"

// Button colors
className="bg-amber-600 hover:bg-amber-700"
```

### Adding More Characters

To add additional Tifinagh characters, update the `keyboardLayout` array:

```jsx
const keyboardLayout = [
  [
    { tifinagh: 'ⴰ', latin: 'a' },
    { tifinagh: 'ⴱ', latin: 'b' },
    // Add more characters here
  ],
  // Add more rows here
];
```


Then import and use it in your `_app.js`.


## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions

- [ ] Add keyboard shortcuts
- [ ] Add text-to-speech for Tifinagh
- [ ] Create a mobile app version
- [ ] Add more Tifinagh variants
- [ ] Implement local storage for saving texts
- [ ] Add translation feature
- [ ] Create a browser extension
- [ ] Add dark mode
- [ ] Support for bidirectional text

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohamed Jada**

- Website: [mohamedjada.com](http://mohamedjada.com/)
- GitHub: [@xmawe](https://github.com/xmawe)

## 🙏 Acknowledgments

- Inspired by the rich cultural heritage of the Amazigh people
- Thanks to all contributors who help improve this tool
- Special thanks to the Tifinagh Unicode Consortium
- Font resources from Google Fonts

## 📚 Learn More

### About Tifinagh

- [Tifinagh on Wikipedia](https://en.wikipedia.org/wiki/Tifinagh)
- [Berber Languages](https://en.wikipedia.org/wiki/Berber_languages)
- [Royal Institute of Amazigh Culture (IRCAM)](http://www.ircam.ma/)

### About the Amazigh People

- [Amazigh Culture](https://en.wikipedia.org/wiki/Berbers)
- [Amazigh World](https://amazighworld.org/)

## 🐛 Bug Reports

Found a bug? Please open an issue on GitHub with:
- A clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 💬 Support

If you have questions or need help:

- Open an issue on GitHub
- Email: jadamohameed@gmail.com

## ⭐ Show Your Support

If this project helped you, please give it a ⭐ on GitHub!

## 📈 Roadmap

- [x] Basic keyboard functionality
- [x] Latin transliteration toggle
- [x] Copy to clipboard feature
- [x] Mobile responsive design
- [x] SEO optimization
- [ ] Keyboard shortcuts (Ctrl/Cmd + keys)
- [ ] Text-to-speech
- [ ] Save texts locally
- [ ] Dark mode
- [ ] Multi-language interface (French, Arabic)
- [ ] Browser extension
- [ ] Mobile app (React Native)
- [ ] API for developers

---

Made with ❤️ for the Amazigh community

**ⵜⴰⵏⵎⵉⵔⵜ** (Thank you!)