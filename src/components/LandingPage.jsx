import React from 'react';

const LandingPage = ({ onStartUsing }) => {
  return (
    <div className="landing-container">
      {/* Decorative Elements */}
      <div className="landing-decoration">
        <div className="floating-element element-1">✨</div>
        <div className="floating-element element-2">🌙</div>
        <div className="floating-element element-3">💫</div>
      </div>

      {/* Main Content */}
      <div className="landing-content">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="landing-title">
            Find Peace in Every
            <span className="title-highlight"> Moment</span>
          </h1>
          <p className="landing-subtitle">
            Your personal companion for discovering Quranic guidance tailored to
            your heart's needs
          </p>
        </div>

        {/* Main Message */}
        <div className="message-section">
          <div className="message-card">
            <div className="quote-icon">"</div>
            <p className="main-message">
              Life isn't always sunshine and rainbows. Sometimes we face storms
              that shake our very foundation, moments when the path ahead seems
              unclear, and our hearts feel heavy with uncertainty.
            </p>
          </div>

          <div className="message-card">
            <div className="wisdom-icon">🕊️</div>
            <p className="main-message">
              But in every trial, every joy, every quiet moment of reflection,
              the Quran offers us guidance. Its verses are like gentle whispers
              from the Divine, reminding us that we are never truly alone in our
              journey.
            </p>
          </div>

          <div className="message-card">
            <div className="heart-icon">💚</div>
            <p className="main-message">
              Whether you're seeking comfort in sorrow, gratitude in joy,
              strength in weakness, or peace in chaos, let the timeless wisdom
              of Allah's words illuminate your path and soothe your soul.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="features-title">How It Works</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎭</div>
              <h3>Share Your Mood</h3>
              <p>
                Select how you're feeling, whether joyful, anxious, grateful, or
                seeking guidance
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔍</div>
              <h3>Discover Wisdom</h3>
              <p>
                Receive carefully selected verses that speak directly to your
                current state of heart
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌟</div>
              <h3>Find Peace</h3>
              <p>
                Experience the tranquility that comes from connecting with
                divine guidance
              </p>
            </div>
          </div>
        </div>

        {/* Daily Azkaar Feature Section */}
        <div className="features-section">
          <h2 className="features-title">Daily Azkaar 📿</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🌅</div>
              <h3>Start & End Your Day Right!</h3>
              <p>
                Morning and evening Azkaar to strengthen your connection with
                Allah and bring serenity to your routine.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🕊️</div>
              <h3>Spiritual Calm</h3>
              <p>
                Simple reminders and short ayahs that help you pause, breathe,
                and remember — even in busy moments.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🧘</div>
              <h3>Mindful Moments</h3>
              <p>
                Reflect on daily dhikr for inner balance and peace, no matter
                what your day looks like.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-card">
            <h2 className="cta-title">Begin Your Journey</h2>
            <p className="cta-message">
              Take a moment to center yourself, breathe deeply, and let the
              words of the Quran guide you toward inner peace and clarity.
            </p>

            <button className="start-button" onClick={onStartUsing}>
              <span className="button-text">Start Using</span>
              <span className="button-arrow">→</span>
            </button>
          </div>
        </div>

        <footer>
          {' '}
          <p className="foot-title">
            &copy; 2025 Ayah For You • Made with 💚 for the Ummah by Husnain
          </p>
        </footer>
      </div>

      <style jsx>{`
        .landing-container {
          min-height: 100vh;
          max-width: 900px;
          margin: 0 auto;
          padding: var(--mobile-padding);
          padding-top: max(var(--mobile-padding), env(safe-area-inset-top));
          padding-bottom: max(
            var(--mobile-padding),
            env(safe-area-inset-bottom)
          );
          position: relative;
          overflow-x: hidden;
        }

        .landing-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .floating-element {
          position: absolute;
          font-size: clamp(1.5rem, 4vw, 2rem);
          opacity: 0.1;
          animation: gentleFloat 8s ease-in-out infinite;
        }

        .element-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .element-2 {
          top: 20%;
          right: 15%;
          animation-delay: 2s;
        }

        .element-3 {
          bottom: 30%;
          left: 5%;
          animation-delay: 4s;
        }

        @keyframes gentleFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .landing-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(2rem, 6vw, 4rem);
          align-items: center;
        }

        .hero-section {
          text-align: center;
          margin-top: clamp(1rem, 4vw, 2rem);
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.2s forwards;
        }

        .hero-icon {
          font-size: clamp(2.5rem, 6vw, 4rem);
          margin-bottom: clamp(1rem, 3vw, 1.5rem);
          opacity: 0.8;
        }

        .landing-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 7vw, 4rem);
          font-weight: 500;
          color: var(--text-dark);
          line-height: 1.2;
          margin-bottom: clamp(1rem, 3vw, 1.5rem);
          letter-spacing: -0.02em;
        }

        .title-highlight {
          background: linear-gradient(135deg, var(--sage), var(--gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .landing-subtitle {
          font-size: clamp(1.1rem, 4vw, 1.4rem);
          color: var(--text-medium);
          font-weight: 300;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.9;
        }

        .message-section {
          display: flex;
          flex-direction: column;
          gap: clamp(1.5rem, 4vw, 2rem);
          width: 100%;
          max-width: 700px;
        }

        .message-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: var(--mobile-border-radius);
          padding: clamp(1.5rem, 5vw, 2.5rem);
          box-shadow: 0 8px 32px var(--shadow-soft);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
          text-align: center;
        }

        .message-card:nth-child(1) {
          animation-delay: 0.4s;
          border-top: 3px solid var(--sage);
        }

        .message-card:nth-child(2) {
          animation-delay: 0.6s;
          border-top: 3px solid var(--gold);
        }

        .message-card:nth-child(3) {
          animation-delay: 0.8s;
          border-top: 3px solid var(--sage-light);
        }

        .quote-icon {
          font-size: clamp(2rem, 5vw, 3rem);
          color: var(--sage);
          font-family: 'Playfair Display', serif;
          margin-bottom: 1rem;
          opacity: 0.6;
        }

        .wisdom-icon,
        .heart-icon {
          font-size: clamp(1.5rem, 4vw, 2rem);
          margin-bottom: clamp(0.75rem, 2vw, 1rem);
          opacity: 0.8;
        }

        .main-message {
          font-size: clamp(1rem, 3.5vw, 1.2rem);
          line-height: 1.7;
          color: var(--text-medium);
          font-weight: 300;
          margin: 0;
          text-align: left;
          font-style: italic;
        }

        .features-section {
          width: 100%;
          max-width: 800px;
          opacity: 0;
          animation: fadeInUp 1s ease-out 1s forwards;
        }

        .features-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 5vw, 2.2rem);
          color: var(--text-dark);
          text-align: center;
          margin-bottom: clamp(1.5rem, 4vw, 2rem);
          font-weight: 500;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: clamp(1rem, 3vw, 1.5rem);
        }

        .feature-item {
          background: rgba(255, 255, 255, 0.9);
          border-radius: var(--mobile-border-radius);
          padding: clamp(1.5rem, 4vw, 2rem);
          text-align: center;
          box-shadow: 0 4px 20px var(--shadow-soft);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 32px var(--shadow-medium);
        }

        .feature-icon {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          margin-bottom: clamp(0.75rem, 2vw, 1rem);
        }

        .feature-item h3 {
          font-size: clamp(1.1rem, 3.5vw, 1.3rem);
          color: var(--text-dark);
          margin-bottom: clamp(0.5rem, 2vw, 0.75rem);
          font-weight: 500;
        }

        .feature-item p {
          font-size: clamp(0.9rem, 3vw, 1rem);
          color: var(--text-medium);
          line-height: 1.6;
          margin: 0;
          font-weight: 300;
        }

        .cta-section {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          opacity: 0;
          animation: fadeInUp 1s ease-out 1.2s forwards;
        }

        .cta-card {
          background: linear-gradient(
            135deg,
            var(--sage-ultra-light),
            rgba(255, 255, 255, 0.95)
          );
          border-radius: var(--mobile-border-radius);
          padding: clamp(2rem, 6vw, 3rem);
          text-align: center;
          box-shadow: 0 12px 40px var(--shadow-medium);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.6);
          position: relative;
          overflow: hidden;
          margin: 0 auto;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(
            90deg,
            var(--sage),
            var(--gold),
            var(--sage)
          );
          border-radius: var(--mobile-border-radius) var(--mobile-border-radius)
            0 0;
        }

        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 5vw, 2rem);
          color: var(--text-dark);
          margin-bottom: clamp(1rem, 3vw, 1.5rem);
          font-weight: 500;
        }

        .cta-message {
          font-size: clamp(1rem, 3.5vw, 1.2rem);
          color: var(--text-medium);
          line-height: 1.6;
          margin-bottom: clamp(1.5rem, 4vw, 2rem);
          font-weight: 300;
          font-style: italic;
        }
        .start-button {
          background: linear-gradient(135deg, var(--sage), var(--sage-light));
          color: white;
          border: none;
          border-radius: var(--mobile-border-radius);
          padding: clamp(1rem, 3vw, 1.25rem) clamp(2rem, 6vw, 3rem);
          font-size: clamp(1rem, 3.5vw, 1.2rem);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          letter-spacing: 0.025em;
          box-shadow: 0 6px 24px var(--shadow-medium);
          overflow: hidden;
          min-height: var(--touch-target);

          /* ✅ Center the button itself */
          margin: 0 auto;

          /* ✅ Keep these for internal content alignment */
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;

          -webkit-tap-highlight-color: rgba(255, 255, 255, 0.2);
          touch-action: manipulation;
          user-select: none;
        }

        .start-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px var(--shadow-strong);
          background: linear-gradient(135deg, var(--sage-dark), var(--sage));
        }

        .start-button:active {
          transform: translateY(-1px);
          transition-duration: 0.1s;
        }

        .button-text {
          font-weight: 500;
          align-items: center;
          justify-content: center;
        }

        .button-arrow {
          font-size: 1.2em;
          transition: transform 0.3s ease;
        }

        .start-button:hover .button-arrow {
          transform: translateX(3px);
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

        /* Mobile Responsive Adjustments */
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .main-message {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .landing-container {
            padding: 1rem;
          }

          .message-section {
            gap: 1rem;
          }

          .message-card {
            padding: 1.5rem;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .message-card,
          .feature-item,
          .cta-card {
            background: rgba(30, 35, 30, 0.95);
            border-color: var(--border-light);
          }

          .floating-element {
            opacity: 0.05;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
