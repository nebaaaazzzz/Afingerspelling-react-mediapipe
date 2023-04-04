import { getLevelWords } from '.';
import { expect, test } from '@jest/globals';
import { fourLetterWords } from '../data/english/four-letter';
test('check fourds for each level', () => {
  expect(getLevelWords(fourLetterWords, 2)).toContain;
});
