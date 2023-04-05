import amharicWords from './amharicwords';
import { fourLetterWords } from './english/level-4';

async function getLanguageWords(lang, mode, levelIndex) {
  if (lang == 'en') {
    if (mode == 'learn') {
      const { default: words } = await import(
        `../data/english/level-${levelIndex + 1}.ts`
      );
      return words;
    } else {
      const { default: words } = await import(
        `../data/english/level-${4}.ts` // get level 4
      );
      return words;
    }
  } else {
    return amharicWords;
  }
}

export default getLanguageWords;
