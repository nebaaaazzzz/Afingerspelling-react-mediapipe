import amharicWords from './amharicwords';
import { fourLetterWords } from './words';

function getLanguageWords(lang: string) {
  return lang == 'en' ? fourLetterWords : amharicWords;
}

export default getLanguageWords;
