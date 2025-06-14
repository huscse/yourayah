// src/components/DuaWall.jsx
import React, { useState } from 'react';

const duas = [
  {
    category: 'Stress',
    arabic:
      'اللّهُـمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
    translation:
      'O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.',
  },
  {
    category: 'Stress',
    arabic:
      'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ وَالْعَجْزِ وَالْكَسَلِ وَالْجُبْنِ وَالْبُخْلِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
    translation:
      'O Allah, I seek refuge in you from grief and sadness, from weakness and laziness, from miserliness and cowardice, from being overcome by debt and overpowered by others.',
  },
  {
    category: 'Stress',
    arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    translation: 'There is no might and no power except with Allah.',
  },
  {
    category: 'Stress',
    arabic: 'يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْث',
    translation: 'O Ever-Living, O Sustainer, in Your Mercy I seek relief.',
  },
  {
    category: 'Success',
    arabic:
      'رَبِّ ٱشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَٱحْلُلْ عُقْدَةًۭ مِّن لِّسَانِى يَفْقَهُوا۟ قَوْلِى',
    translation:
      'My Lord, expand for me my chest, and ease for me my task, and untie the knot from my tongue, so that they may understand my speech.',
  },
  {
    category: 'Success',
    arabic:
      'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لاَ يَنْفَعُ وَمِنْ قَلْبٍ لاَ يَخْشَعُ وَمِنْ نَفْسٍ لاَ تَشْبَعُ وَمِنْ دَعْوَةٍ لاَ يُسْتَجَابُ لَهَا',
    translation:
      'O Allah, I seek refuge in Thee from the knowledge which does not benefit, from the heart that does not entertain the fear (of Allah), from the soul that does not feel contented, and from the supplication that is not responded to.',
  },
  {
    category: 'Health',
    arabic:
      'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا',
    translation:
      'O Allah, Lord of mankind, remove the harm and cure [him/her]. You are the Curer. There is no cure except Your cure. A cure that leaves no illness behind.',
  },
  {
    category: 'Health',
    arabic:
      'اللَّهُمَّ عَافِنِي فِي بَدَنِي اللَّهُمَّ عَافِنِي فِي سَمْعِي اللَّهُمَّ عَافِنِي فِي بَصَرِي لَا إِلَهَ إِلَّا أَنْتَ',
    translation:
      'O Allah, give me health in my body, O Allah, give me health in my hearing, O Allah, give me health in my sight. There is no deity worthy of worship except You.',
  },
  {
    category: 'Health',
    arabic:
      ' أَعُوذُ بِقُدْرَةِ اللهِ وَسُلْطَانِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ',
    translation:
      'I seek refuge in the might of Allah and in His power from the evil of what I am experiencing and of what I fear.',
  },
  {
    category: 'Exams',
    arabic: 'رَبِّ زِدْنِي عِلْمًا',
    translation: 'My Lord, increase me in knowledge.',
  },
  {
    category: 'Exams',
    arabic:
      'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لاَ يَنْفَعُ وَمِنْ قَلْبٍ لاَ يَخْشَعُ وَمِنْ نَفْسٍ لاَ تَشْبَعُ وَمِنْ دَعْوَةٍ لاَ يُسْتَجَابُ لَهَا',
    translation:
      'O Allah, I seek refuge in Thee from the knowledge which does not benefit, from the heart that does not entertain the fear (of Allah), from the soul that does not feel contented, and from the supplication that is not responded to.',
  },
  {
    category: 'Exams',
    arabic:
      'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لاَ يَنْفَعُ وَمِنْ قَلْبٍ لاَ يَخْشَعُ وَمِنْ نَفْسٍ لاَ تَشْبَعُ وَمِنْ دَعْوَةٍ لاَ يُسْتَجَابُ لَهَا',
    translation:
      'O Allah, I seek refuge in Thee from the knowledge which does not benefit, from the heart that does not entertain the fear (of Allah), from the soul that does not feel contented, and from the supplication that is not responded to.',
  },
  {
    category: 'Exams',
    arabic:
      'رَبِّ يَسِّرْ وَلَا تُعَسِّرْ وَتَمِّمْ بِالْخَيْرِ وَبِكَ نَسْتَعِينُ',
    translation:
      'My Lord, expand for me my breast [with assurance], and ease for me my task, and untie the knot from my tongue that they may understand my speech.',
  },
  {
    category: 'Gratitude',
    arabic:
      'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
    translation:
      'O Allah, help me to remember You, thank You, and worship You in the best manner.',
  },
  {
    category: 'Sadness',
    arabic:
      'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ، وَرَبُّ الْعَرْشِ الْعَظِيمِ',
    translation:
      'There is no god but Allah, the Most Great, the Most Forbearing. There is no god but Allah, Lord of the heavens and the earth, and Lord of the Mighty Throne.',
  },
  {
    category: 'Forgiveness',
    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    translation:
      'O Allah, You are Most Forgiving, and You love forgiveness; so forgive me.',
  },
  {
    category: 'Forgiveness',
    arabic:
      'رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الأَبْرَارِ',
    translation:
      'Our Lord! Forgive our sins, remove from us our misdeeds, and grant that we join the righteous when we die.',
  },
  {
    category: 'Forgiveness',
    arabic:
      'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإنْ لَمْ تَغْفِرْلَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الخَاسِرِينَ',
    translation:
      'Our Lord! We have wronged ourselves. If You do not forgive us and have mercy on us, we will certainly be lost.',
  },
  {
    category: 'Forgiveness',
    arabic:
      ' رَبَّنَآ إِنَّنَآ ءَامَنَّا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ ٱلنَّارِ',
    translation:
      'Our Lord! We have believed, so forgive our sins and protect us from the torment of the Fire.',
  },
  {
    category: 'Protection',
    arabic:
      'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    translation:
      'In the Name of Allah, with Whose Name nothing is harmed on earth or in the heavens, and He is the All-Hearing, the All-Knowing.',
  },
  {
    category: 'Protection',
    arabic:
      'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ',
    translation:
      'There is no god but Allah alone Who has no partner; to Him belong the dominions, to Him praise is due, and He is Omnipotent',
  },
  {
    category: 'Protection',
    arabic:
      'اللَّهُمَّ آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    translation:
      'O Allah, grant us the good in this world and the good in the Hereafter and save us from the torment of Hell-Fire.',
  },
  {
    category: 'Protection',
    arabic:
      'بِسْمِ اللهِ تَوَكَّلْـتُ عَلى اللهِ وَلا حَوْلَ وَلا قُـوَّةَ إِلاّ بِالله',
    translation:
      'In the Name of Allah, I have placed my trust in Allah, there is no might and no power except by Allah.',
  },
];

const categories = [
  'All',
  'Stress',
  'Success',
  'Health',
  'Exams',
  'Forgiveness',
  'Protection',
];

const DuaBySituation = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDuas =
    selectedCategory === 'All'
      ? duas
      : duas.filter((dua) => dua.category === selectedCategory);

  return (
    <section className="dua-wall-container">
      <h2 className="dua-wall-title">Dua Wall 🤍</h2>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${
              selectedCategory === cat ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="dua-wall-grid">
        {filteredDuas.map((dua, index) => (
          <div key={index} className="dua-card">
            <p className="dua-arabic">{dua.arabic}</p>
            <p className="dua-translation">{dua.translation}</p>
            <p className="dua-reference">{dua.reference}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DuaBySituation;
