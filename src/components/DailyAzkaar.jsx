import React from 'react';

const azkaarList = [
  {
    arabic: 'اللّهُـمَّ أَنْتَ رَبِّـي لا إِلـهَ إِلاّ أَنْتَ',
    translation:
      'O Allah, You are my Lord, none has the right to be worshipped except You.',
    reference: 'Morning & Evening',
  },
  {
    arabic: 'سُبْحَانَ اللّهِ وَبِحَمْدِهِ',
    translation: 'Glory is to Allah and praise is to Him.',
    reference: '100 times a day',
  },
  {
    arabic: 'أَسْتَغْفِرُ اللّٰهَ',
    translation: 'I seek forgiveness from Allah.',
    reference: 'Dhikr',
  },
  {
    arabic: 'لا إِلٰهَ إِلَّا اللّٰهُ',
    translation: 'There is no deity but Allah.',
    reference: 'Best remembrance',
  },
  {
    arabic: 'اللّهُ أَكْبَرُ',
    translation: 'Allah is the Greatest.',
    reference: 'General dhikr',
  },
  {
    arabic: 'الْـحَمْدُ لِلّٰهِ',
    translation: 'All praise is due to Allah.',
    reference: 'Gratitude',
  },
];

const DailyAzkaar = () => {
  return (
    <section className="app-container">
      <h1>Daily Azkaar</h1>
      {azkaarList.map((z, index) => (
        <div className="ayah-container" key={index}>
          <p className="arabic-text">{z.arabic}</p>
          <p className="english-text">{z.translation}</p>
          <p className="verse-reference">{z.reference}</p>
        </div>
      ))}
    </section>
  );
};

export default DailyAzkaar;
