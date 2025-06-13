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
    reference: '30 times',
  },
  {
    arabic: 'لا إِلٰهَ إِلَّا اللّٰهُ',
    translation: 'There is no deity but Allah.',
    reference: '30 times',
  },
  {
    arabic: 'اللّهُ أَكْبَرُ',
    translation: 'Allah is the Greatest.',
    reference: '30 times',
  },
  {
    arabic: 'الْـحَمْدُ لِلّٰهِ',
    translation: 'All praise is due to Allah.',
    reference: '30 times',
  },
  {
    arabic:
      'اللّهُـمَّ بِكَ أَصْبَـحْنا، وَبِكَ أَمْسَـيْنا، وَبِكَ نَحْـيا، وَبِكَ نَمـوتُ، وَإِلَيْكَ النُّـشُور',
    translation:
      'O Allah, by You we enter the morning, and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.',
    reference: 'Morning Azkar',
  },
  {
    arabic: 'اللّهُـمَّ أَجِرْنِي مِنَ النّار',
    translation: 'O Allah, protect me from the Hellfire.',
    reference: '7 times after Fajr & Maghrib',
  },
  {
    arabic:
      'رَضِيتُ بِاللّٰهِ رَبّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ ﷺ نَبِيّاً',
    translation:
      'I am pleased with Allah as my Lord, Islam as my religion, and Muhammad ﷺ as my Prophet.',
    reference: 'Morning & Evening',
  },
  {
    arabic:
      'حَسْبِيَ اللّٰهُ لا إِلٰهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيم',
    translation:
      'Allah is sufficient for me. There is no deity except Him. I have placed my trust in Him and He is the Lord of the Mighty Throne.',
    reference: '7 times Morning & Evening (Surah At-Tawbah: 129)',
  },

  {
    arabic:
      'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ',
    translation:
      'O Allah, I ask You for Paradise and seek refuge in You from the Fire.',
    reference: 'Dua for jannah',
  },
  {
    arabic: 'يَا حَيُّ يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ',
    translation: 'O Ever-Living, O Sustainer, in Your mercy I seek relief.',
    reference: 'Morning Azkar',
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
