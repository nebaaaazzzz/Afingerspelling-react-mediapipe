export const levels = [
  ['ሀ', 'ሰ', 'ነ', 'ረ', 'ኘ', 'የ', 'ተ'],
  ['ሠ', 'ነ', 'ረ', 'ገ', 'የ', 'በ'],
  ['መ', 'ለ', 'ሸ', 'ቸ'],

  ['ጠ', 'ጨ', 'መ', 'ሐ']
];
function getRandomWordFromLevelAmharicWords(levelWords: string[]): string[] {
  const levelWordsLength = levelWords.length;
  let randomWordIndexArr: number[] = [];
  let randomWordArr: string[] = [];
  for (let i = 0; i < 10; i++) {
    randomWordIndexArr.push(Math.floor(Math.random() * levelWordsLength));
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
  console.log(levelLetters);
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
// if (!words[wordIndex].includes(letter)) {
//   levelWords.push(words[wordIndex]);
//   words.splice(wordIndex, 1);
// }
// export function getAllWordsLeveled() {
//   let allLevelWords = [];
//   for (let level of levels) {
//     let currentLevelWords = [];
//     for (let letter of level) {
//       for (let word in fourLetterWords) {
//         console.log(fourLetterWords[word]);
//         if (fourLetterWords[word].includes(letter)) {
//           currentLevelWords.push(fourLetterWords[word]);
//           fourLetterWords.splice(word, 1);
//         }
//       }
//     }
//     allLevelWords.push(currentLevelWords);
//   }
// }
