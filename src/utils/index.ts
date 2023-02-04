export const levels = [
  ["a", "b", "c", "e", "l", "o", "v", "w", "u", "y"],
  ["d", "f", "k", "r", "s", "i", "t"],

  ["g", "h", "m", "n", "x"],

  ["p", "q", "j", "z"],
];
export function getLevelWords(
  passedWords: string[],
  levelIndex: number
): string[] {
  const words = [...passedWords];
  let levelWords: string[] = [];
  let level = levels[levelIndex - 1];
  for (let i = 1; i < levelIndex; i++) {}
  for (let wordIndex in words) {
    let skip = true;
    for (let letter of words[wordIndex]) {
      console.log(level.includes(letter), wordIndex, letter, words[wordIndex]);
      if (level.includes(letter)) {
        skip = false;
      }
    }
    if (!skip) {
      levelWords.push(words[wordIndex]);
      words.splice(Number(wordIndex), 1);
    }
  }
  return levelWords;
}
// if (!words[wordIndex].includes(letter)) {
//   levelWords.push(words[wordIndex]);
//   words.splice(wordIndex, 1);
// }
export function getAllWordsLeveled() {
  let allLevelWords = [];
  for (let level of levels) {
    let currentLevelWords = [];
    for (let letter of level) {
      for (let word in fourLetterWords) {
        console.log(fourLetterWords[word]);
        if (fourLetterWords[word].includes(letter)) {
          currentLevelWords.push(fourLetterWords[word]);
          fourLetterWords.splice(word, 1);
        }
      }
    }
    allLevelWords.push(currentLevelWords);
  }
}
