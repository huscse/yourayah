import { useState } from 'react';
import './App.css';
import MoodSelector from './components/MoodSelector';
import AyahDisplay from './components/AyahDisplay';
import LandingPage from './components/LandingPage';
import { Analytics } from '@vercel/analytics/react';
import DailyAzkaar from './components/DailyAzkaar';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'main'
  const [mood, setMood] = useState('');

  const handleStartUsing = () => {
    setCurrentView('main');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    setMood(''); // Reset mood when going back
  };

  if (currentView === 'landing') {
    return <LandingPage onStartUsing={handleStartUsing} />;
  }

  return (
    <div className="app-container">
      {/* Back to Landing Button */}
      <button
        className="back-button"
        onClick={handleBackToLanding}
        aria-label="Back to landing page"
      >
        ← Back
      </button>

      <h1>Daily Ayah for You 💚</h1>
      <MoodSelector setMood={setMood} />
      <AyahDisplay mood={mood} />
      <DailyAzkaar />

      <Analytics />
    </div>
  );
}

export default App;
