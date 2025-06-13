// src/utils/fetchAyah.js
export async function fetchAyah(verseKey) {
  const url = `https://api.alquran.cloud/v1/ayah/${verseKey}/editions/quran-uthmani,en.sahih`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch ayah');

  const data = await res.json();
  const editions = data.data;

  const arabicObj = editions.find(
    (e) => e.edition.identifier === 'quran-uthmani',
  );
  const englishObj = editions.find((e) => e.edition.identifier === 'en.sahih');

  return {
    arabic: arabicObj.text,
    english: englishObj.text,
    verseKey,
  };
}
