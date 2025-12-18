'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function TifinaghKeyboard() {
  const [text, setText] = useState('');
  const [showLatin, setShowLatin] = useState(true);
  const [copied, setCopied] = useState(false);

  // Tifinagh characters organized by rows with their Latin equivalents
  const keyboardLayout = [
    [
      { tifinagh: 'ⴰ', latin: 'a' },
      { tifinagh: 'ⴱ', latin: 'b' },
      { tifinagh: 'ⴳ', latin: 'g' },
      { tifinagh: 'ⴷ', latin: 'd' },
      { tifinagh: 'ⴹ', latin: 'ḍ' },
      { tifinagh: 'ⴻ', latin: 'e' },
      { tifinagh: 'ⴼ', latin: 'f' },
      { tifinagh: 'ⴽ', latin: 'k' },
      { tifinagh: 'ⵀ', latin: 'h' },
      { tifinagh: 'ⵃ', latin: 'ḥ' },
    ],
    [
      { tifinagh: 'ⵉ', latin: 'i' },
      { tifinagh: 'ⵊ', latin: 'j' },
      { tifinagh: 'ⵍ', latin: 'l' },
      { tifinagh: 'ⵎ', latin: 'm' },
      { tifinagh: 'ⵏ', latin: 'n' },
      { tifinagh: 'ⵓ', latin: 'u' },
      { tifinagh: 'ⵔ', latin: 'r' },
      { tifinagh: 'ⵕ', latin: 'ṛ' },
      { tifinagh: 'ⵖ', latin: 'ɣ' },
      { tifinagh: 'ⵙ', latin: 's' },
    ],
    [
      { tifinagh: 'ⵚ', latin: 'ṣ' },
      { tifinagh: 'ⵛ', latin: 'c' },
      { tifinagh: 'ⵜ', latin: 't' },
      { tifinagh: 'ⵟ', latin: 'ṭ' },
      { tifinagh: 'ⵡ', latin: 'w' },
      { tifinagh: 'ⵢ', latin: 'y' },
      { tifinagh: 'ⵣ', latin: 'z' },
      { tifinagh: 'ⵥ', latin: 'ẓ' },
      { tifinagh: 'ⵯ', latin: 'ʷ' },
      { tifinagh: 'ⵇ', latin: 'q' },
    ],
    [
      { tifinagh: 'ⵅ', latin: 'x' },
      { tifinagh: 'ⵖ', latin: 'ɣ' },
      { tifinagh: 'ⵧ', latin: 'ʷ' },
      { tifinagh: 'ⵯ', latin: 'ʷ' },
    ]
  ];

  const handleKeyPress = (char) => {
    setText(prev => prev + char);
  };

  const handleSpace = () => {
    setText(prev => prev + ' ');
  };

  const handleBackspace = () => {
    setText(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setText('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Tifinagh Keyboard Online - Free Amazigh Script Typing Tool | ⵜⵉⴼⵉⵏⴰⵖ</title>
        <meta name="title" content="Tifinagh Keyboard Online - Free Amazigh Script Typing Tool | ⵜⵉⴼⵉⵏⴰⵖ" />
        <meta name="description" content="Free online Tifinagh keyboard for typing in the ancient Amazigh (Berber) script. Easy-to-use virtual keyboard with Latin transliteration. Type ⵜⵉⴼⵉⵏⴰⵖ characters instantly." />
        <meta name="keywords" content="tifinagh keyboard, amazigh keyboard, berber keyboard, tamazight keyboard, tifinagh typing, amazigh script, berber script, neo-tifinagh, tifinagh online, clavier tifinagh, ⵜⵉⴼⵉⵏⴰⵖ" />
        <meta name="author" content="Mohamed Jada" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        <link rel="canonical" href="https://tifinaghkeyboard.mohamedjada.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tifinaghkeyboard.mohamedjada.com/" />
        <meta property="og:title" content="Tifinagh Keyboard Online - Free Amazigh Script Typing Tool" />
        <meta property="og:description" content="Free online Tifinagh keyboard for typing in the ancient Amazigh (Berber) script. Easy-to-use virtual keyboard with Latin transliteration." />
        <meta property="og:image" content="https://tifinaghkeyboard.mohamedjada.com/og-image.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="ar_MA" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tifinaghkeyboard.mohamedjada.com/" />
        <meta property="twitter:title" content="Tifinagh Keyboard Online - Free Amazigh Script Typing Tool" />
        <meta property="twitter:description" content="Free online Tifinagh keyboard for typing in the ancient Amazigh (Berber) script. Easy-to-use virtual keyboard with Latin transliteration." />
        <meta property="twitter:image" content="https://tifinaghkeyboard.mohamedjada.com/twitter-image.jpg" />
        <meta property="twitter:creator" content="@yourtwitter" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#d97706" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tifinagh Keyboard" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Tifinagh Keyboard",
              "alternateName": "ⵜⵉⴼⵉⵏⴰⵖ Keyboard",
              "url": "https://tifinaghkeyboard.mohamedjada.com",
              "description": "Free online virtual keyboard for typing in Tifinagh script, the ancient writing system of the Amazigh (Berber) people.",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "Mohamed Jada",
                "url": "http://mohamedjada.com/"
              },
              "inLanguage": ["en", "ber"],
              "keywords": "tifinagh, amazigh, berber, keyboard, virtual keyboard, typing tool",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "screenshot": "https://tifinaghkeyboard.mohamedjada.com/screenshot.jpg"
            })
          }}
        />
        
        {/* Alternate Languages */}
        <link rel="alternate" hrefLang="en" href="https://tifinaghkeyboard.mohamedjada.com/" />
        <link rel="alternate" hrefLang="fr" href="https://tifinaghkeyboard.mohamedjada.com/fr/" />
        <link rel="alternate" hrefLang="ar" href="https://tifinaghkeyboard.mohamedjada.com/ar/" />
        <link rel="alternate" hrefLang="x-default" href="https://tifinaghkeyboard.mohamedjada.com/" />
      </Head>
      <title>Tifinagh Keyboard Online - Free Amazigh Script Typing Tool | ⵜⵉⴼⵉⵏⴰⵖ</title>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-4 md:p-8">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Work+Sans:wght@400;500;600&display=swap');
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }

          .animate-scaleIn {
            animation: scaleIn 0.4s ease-out forwards;
          }

          .animate-slideInDown {
            animation: slideInDown 0.3s ease-out forwards;
          }

          .key-button {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .key-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          }

          .key-button:active {
            transform: translateY(0px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .pattern-bg {
            background-image: 
              linear-gradient(30deg, rgba(251, 191, 36, 0.05) 12%, transparent 12.5%, transparent 87%, rgba(251, 191, 36, 0.05) 87.5%, rgba(251, 191, 36, 0.05)),
              linear-gradient(150deg, rgba(251, 191, 36, 0.05) 12%, transparent 12.5%, transparent 87%, rgba(251, 191, 36, 0.05) 87.5%, rgba(251, 191, 36, 0.05)),
              linear-gradient(30deg, rgba(251, 191, 36, 0.05) 12%, transparent 12.5%, transparent 87%, rgba(251, 191, 36, 0.05) 87.5%, rgba(251, 191, 36, 0.05)),
              linear-gradient(150deg, rgba(251, 191, 36, 0.05) 12%, transparent 12.5%, transparent 87%, rgba(251, 191, 36, 0.05) 87.5%, rgba(251, 191, 36, 0.05));
            background-size: 80px 140px;
            background-position: 0 0, 0 0, 40px 70px, 40px 70px;
          }
        `}</style>

        <div className="max-w-5xl mx-auto">
          {/* Header with SEO-friendly structure */}
          <header className="text-center mb-8 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-3 bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent" style={{ fontFamily: "'Crimson Pro', serif" }}>
              ⵜⵉⴼⵉⵏⴰⵖ
            </h1>
            <p className="text-xl md:text-2xl text-amber-800/80" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Tifinagh Keyboard - Online Amazigh Script Typing Tool
            </p>
            <p className="text-sm text-amber-700/60 mt-2" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              The ancient script of the Amazigh (Berber) people - Free virtual keyboard
            </p>
          </header>

          {/* Main content with semantic HTML */}
          <main>
            {/* Text Display Area */}
            <section className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }} aria-label="Text output area">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-amber-200/50 p-6 min-h-[180px] pattern-bg">
                <div className="flex justify-between items-start mb-3">
                  <label className="text-sm font-semibold text-amber-900/70" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    
                  </label>
                  <div className="flex gap-2 relative">
                    <button
                      onClick={copyToClipboard}
                      className="cursor-pointer px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs rounded-lg transition-all duration-200 shadow-md hover:shadow-lg relative"
                      style={{ fontFamily: "'Work Sans', sans-serif" }}
                      aria-label="Copy text to clipboard"
                    >
                      {copied ? '✓ Copied!' : 'Copy'}
                    </button>
                    <button
                      onClick={handleClear}
                      className="cursor-pointer px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                      style={{ fontFamily: "'Work Sans', sans-serif" }}
                      aria-label="Clear all text"
                    >
                      Clear
                    </button>
                  </div>
                </div>
                <div 
                  className="text-3xl md:text-4xl leading-relaxed text-amber-950 min-h-[100px] focus:outline-none"
                  style={{ fontFamily: "'Crimson Pro', serif", wordWrap: 'break-word' }}
                  role="textbox"
                  aria-label="Typed Tifinagh text"
                >
                  {text || <span className="text-amber-400/40">Start typing in Tifinagh...</span>}
                </div>
              </div>
            </section>

            {/* Toggle for Latin letters */}
            <div className="flex justify-center mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={() => setShowLatin(!showLatin)}
                className="cursor-pointer px-5 py-2.5 bg-white/70 backdrop-blur-sm hover:bg-white/90 text-amber-800 rounded-xl transition-all duration-200 shadow-lg border border-amber-200/50 font-medium"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
                aria-label={showLatin ? 'Hide Latin transliteration' : 'Show Latin transliteration'}
                aria-pressed={showLatin}
              >
                {showLatin ? 'Hide' : 'Show'} Latin Letters
              </button>
            </div>

            {/* Keyboard */}
            <section className="bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-amber-300/30 p-6 md:p-8 animate-scaleIn" style={{ animationDelay: '0.3s' }} aria-label="Tifinagh virtual keyboard">
              <div className="space-y-3">
                {keyboardLayout.map((row, rowIndex) => (
                  <div 
                    key={rowIndex} 
                    className="flex flex-wrap justify-center gap-2 animate-fadeInUp"
                    style={{ animationDelay: `${0.4 + rowIndex * 0.1}s` }}
                    role="group"
                    aria-label={`Keyboard row ${rowIndex + 1}`}
                  >
                    {row.map((key, keyIndex) => (
                      <button
                        key={keyIndex}
                        onClick={() => handleKeyPress(key.tifinagh)}
                        className="key-button cursor-pointer bg-white hover:bg-amber-50 rounded-xl shadow-md w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center border-2 border-amber-200/40 hover:border-amber-400/60"
                        aria-label={`Type Tifinagh character ${key.tifinagh}, Latin equivalent ${key.latin}`}
                      >
                        <span className="text-3xl md:text-4xl text-amber-900" style={{ fontFamily: "'Crimson Pro', serif" }}>
                          {key.tifinagh}
                        </span>
                        {showLatin && (
                          <span className="text-[10px] text-amber-600/70 mt-1" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                            {key.latin}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                ))}

                {/* Control keys */}
                <div className="flex flex-wrap justify-center gap-2 mt-4 animate-fadeInUp" style={{ animationDelay: '0.8s' }} role="group" aria-label="Control keys">
                  <button
                    onClick={handleSpace}
                    className="key-button cursor-pointer bg-white hover:bg-amber-50 rounded-xl shadow-md px-12 h-16 md:h-20 flex items-center justify-center border-2 border-amber-200/40 hover:border-amber-400/60 text-amber-700 font-medium"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                    aria-label="Add space"
                  >
                    Space
                  </button>
                  <button
                    onClick={handleBackspace}
                    className="key-button cursor-pointer bg-white hover:bg-red-50 rounded-xl shadow-md w-24 h-16 md:h-20 flex items-center justify-center border-2 border-amber-200/40 hover:border-red-400/60 text-amber-700 font-medium"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                    aria-label="Delete last character"
                  >
                    ⌫ Delete
                  </button>
                </div>
              </div>
            </section>

            {/* SEO Content Section */}
            <article className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200/50 p-6 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              <h2 className="text-2xl font-bold text-amber-900 mb-4" style={{ fontFamily: "'Crimson Pro', serif" }}>
                About Tifinagh Script
              </h2>
              <div className="text-amber-800/90 space-y-3" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                <p>
                  Tifinagh (ⵜⵉⴼⵉⵏⴰⵖ) is the ancient script used to write the Amazigh (Berber) languages across North Africa. This online keyboard provides an easy way to type in Tifinagh characters without installing special fonts or keyboard layouts.
                </p>
                <p>
                  Our virtual keyboard supports the Neo-Tifinagh alphabet, which is standardized and widely used in Morocco, Algeria, and other Amazigh-speaking regions. Each key shows both the Tifinagh character and its Latin transliteration for easy learning.
                </p>
                <h3 className="text-xl font-semibold text-amber-900 mt-4 mb-2">
                  Features:
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Complete Tifinagh character set</li>
                  <li>Latin transliteration display</li>
                  <li>One-click copy to clipboard</li>
                  <li>Mobile-friendly interface</li>
                  <li>No installation required</li>
                  <li>100% free to use</li>
                </ul>
              </div>
            </article>
          </main>

          {/* Footer */}
          <footer className="text-center mt-8 text-amber-800/60 text-sm animate-fadeInUp" style={{ fontFamily: "'Work Sans', sans-serif", animationDelay: '0.9s' }}>
            <p>Made with ❤️ by <a className='underline hover:text-amber-900' href="http://mohamedjada.com/" rel="author">Mohamed Jada</a></p>
            <p className="mt-2 text-xs">© 2024 Tifinagh Keyboard. Free online tool for typing Amazigh script.</p>
          </footer>
        </div>
      </div>
    </>
  );
}