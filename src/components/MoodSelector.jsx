// src/components/MoodSelector.jsx
import { moodVerseMap } from '../data/moodVerseMap';

const MoodSelector = ({ setMood }) => {
  const moods = Object.keys(moodVerseMap);

  return (
    <div className="mood-selector">
      <label htmlFor="mood">How are you feeling today?</label>
      <select id="mood" onChange={(e) => setMood(e.target.value)}>
        <option value="">Select a mood</option>
        {moods.map((mood) => (
          <option key={mood} value={mood}>
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MoodSelector;
