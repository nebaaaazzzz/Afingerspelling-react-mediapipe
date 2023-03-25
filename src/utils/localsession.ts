import localforage from 'localforage';
export const configLocalForage = () => {
  localforage.config({
    driver: localforage.LOCALSTORAGE
  });
};
export const storeSessionInfo = async (
  lang: string,
  hand: string,
  level: string
): Promise<void> => {
  await localforage.setItem('lang', lang);
  await localforage.setItem('hand', hand);
  await localforage.setItem('level', level);
};

export const getSessionInfo = async (): Promise<{
  hand: unknown;
  lang: unknown;
  level: unknown;
}> => {
  let lang = await localforage.getItem('lang');
  let hand = await localforage.getItem('hand');
  let level = await localforage.getItem('level');

  return {
    lang,
    hand,
    level
  };
};
