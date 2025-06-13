// src/components/AyahDisplay.jsx
import { useEffect, useState } from 'react';
import { moodVerseMap } from '../data/moodVerseMap';
import { fetchAyah } from '../utils/fetchAyah';

const AyahDisplay = ({ mood }) => {
  const [ayah, setAyah] = useState(null);
  const [error, setError] = useState(null);
  const [currentVerseKey, setCurrentVerseKey] = useState('');

  const loadNewAyah = async () => {
    if (!mood) return;
    setError(null);

    const verseKeys = moodVerseMap[mood];
    if (!verseKeys || verseKeys.length === 0) {
      setError('No ayahs available for this mood.');
      return;
    }

    let newKey = verseKeys[Math.floor(Math.random() * verseKeys.length)];

    while (newKey === currentVerseKey && verseKeys.length > 1) {
      newKey = verseKeys[Math.floor(Math.random() * verseKeys.length)];
    }

    try {
      const result = await fetchAyah(newKey);
      setAyah(result);
      setCurrentVerseKey(newKey);
    } catch (err) {
      console.error(err);
      setError('Failed to load ayah.');
    }
  };

  // Load first ayah when mood changes
  useEffect(() => {
    if (mood) {
      loadNewAyah();
    }
  }, [mood]);

  if (!mood) {
    return (
      <div className="select-mood-message">
        Select a mood above to see a comforting ayah
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!ayah) {
    return <div className="loading-message">Loading ayah...</div>;
  }

  return (
    <div className="ayah-container">
      <div className="arabic-text">{ayah.arabic}</div>
      <div className="english-text">{ayah.english}</div>
      <div className="verse-reference">Verse: {ayah.verseKey}</div>

      {moodVerseMap[mood].length > 1 && (
        <button onClick={loadNewAyah} className="ayah-button">
          Show Another Ayah
        </button>
      )}
    </div>
  );
};

export default AyahDisplay;
