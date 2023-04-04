import amharicWords from './amharicwords';
import { fourLetterWords } from './english/four-letter';

function getLanguageWords(lang: string) {
  return lang == 'en' ? fourLetterWords : amharicWords;
}

export default getLanguageWords;
