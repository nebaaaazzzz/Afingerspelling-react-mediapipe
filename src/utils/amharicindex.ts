export const levels = [
  ['ሀ', 'ለ', 'ነ', 'ረ', 'ከ', 'በ', 'አ', 'መ'],
  ['ሐ', 'ቀ', 'ቸ', 'ዘ', 'አ', 'ገ', 'ጠ', 'ፈ'],
  ['ፐ', 'ደ', 'ፈ', 'ጀ', 'ተ'],

  ['ወ', 'ከ', 'ዐ', 'ዠ', 'ጨ', 'ጰ']
];
function getRandomWordFromLevelAmharicWords(levelWords: string[]): string[] {
  if (levelWords.length < 10) {
    return levelWords;
  }
  const levelWordsLength = levelWords.length;
  let randomWordArr: string[] = [];
  const set = new Set();
  let randomWordIndexArr = [];
  let numberToCompare = levelWords.length > 9 ? 10 : levelWords.length;
  while (randomWordIndexArr.length < numberToCompare) {
    set.add(Math.floor(Math.random() * levelWordsLength));
    randomWordIndexArr = Array.from(set);
  }
  for (let i of randomWordIndexArr) {
    randomWordArr.push(levelWords[i]);
  }
  return randomWordArr;
}
export function getLevelAmharicWords(
  passedWords: string[],
  levelIndex: number
): string[] {
  const words = [...passedWords];
  let levelWords: string[] = []; //to hold all words in levelIndex
  let levelLetters = levels[levelIndex - 1];
  /*contain level word from levelIndex to 0 concatinated */

  for (let wordIndex in words) {
    let skip = false;
    for (let letter of words[wordIndex]) {
      if (levelLetters.includes(letter)) {
        skip = true;
        break;
      }
    }
    if (skip) {
      levelWords.push(words[wordIndex]);
      words.splice(Number(wordIndex), 1);
    }
  }

  return getRandomWordFromLevelAmharicWords(levelWords);
}
