import { AlphabetDefinationI } from '../type';

export class AmharicAlphabet {
  private alphabetArray: AlphabetDefinationI[] = [];

  private _helpTexts = { straight: 'Straigthen it', bend: 'Bend it' };

  constructor() {
    let noCurl = 180;
    let halfCurlMin = 130;
    let fullCurlMinMoreForgiving = 90;
    let fullCurlMin = 60;
    let fullCurlMax = 0;
    let ሀ: AlphabetDefinationI = {
      letterNumber: 1,
      letter: 'ሀ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      }
    };
    let ለ: AlphabetDefinationI = {
      letterNumber: 2,
      letter: 'ለ',
      rotation: 'up',
      thumb: {
        curlMin: 180,
        curlMax: 110,
        special: 'pinchThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Pinch the thumb and pointer finger together'
      },
      index: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'pinchThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      }
    };
    let ሐ: AlphabetDefinationI = {
      letterNumber: 3,
      letter: 'ሐ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let መ: AlphabetDefinationI = {
      letterNumber: 4,
      letter: 'መ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'betweenMiddleAndRing',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ሠ: AlphabetDefinationI = {
      letterNumber: 5,
      letter: 'ሠ',
      rotation: 'up',
      thumb: {
        curlMin: 180,
        curlMax: 110,
        special: 'pinchThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Pinch the thumb and pointer finger together'
      },
      index: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'pinchThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      }
    };
    let ረ: AlphabetDefinationI = {
      letterNumber: 6,
      letter: 'ረ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: noCurl - 30,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'indexAndMiddleMustBeClose',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'indexAndMiddleMustBeClose',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ሰ: AlphabetDefinationI = {
      letterNumber: 7,
      letter: 'ሰ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Bend it so its inside your palm'
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      }
    };
    let ሸ: AlphabetDefinationI = {
      letterNumber: 8,
      letter: 'ሸ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbToTheLeft',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Straigten it - and make sure it is close to index finger'
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      }
    };
    let ቀ: AlphabetDefinationI = {
      letterNumber: 9,
      letter: 'ቀ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let በ: AlphabetDefinationI = {
      letterNumber: 10,
      letter: 'በ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ተ: AlphabetDefinationI = {
      letterNumber: 11,
      letter: 'ተ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'betweenIndexAndMiddleLetterT',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: halfCurlMin,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ቸ: AlphabetDefinationI = {
      letterNumber: 12,
      letter: 'ቸ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherindex',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ኀ: AlphabetDefinationI = {
      letterNumber: 13,
      letter: 'ኀ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: noCurl - 30,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ነ: AlphabetDefinationI = {
      letterNumber: 14,
      letter: 'ነ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbToTheLeft',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Straigten it - and make sure it is close to index finger'
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ኘ: AlphabetDefinationI = {
      letterNumber: 15,
      letter: 'ኘ',
      rotation: 'side',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbToTheLeft',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Straigten it - and make sure it is close to index finger'
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let አ: AlphabetDefinationI = {
      letterNumber: 16,
      letter: 'አ',
      rotation: 'side',
      thumb: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ከ: AlphabetDefinationI = {
      letterNumber: 17,
      letter: 'ከ',
      rotation: 'down',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbPointerAlignOnYAxis',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin - 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: halfCurlMin + 30,
        curlMax: fullCurlMin + 30,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ኸ: AlphabetDefinationI = {
      letterNumber: 18,
      letter: 'ኸ',
      rotation: 'down',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbPointerAlignOnYAxis',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin - 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: halfCurlMin + 30,
        curlMax: fullCurlMin + 30,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ወ: AlphabetDefinationI = {
      letterNumber: 19,
      letter: 'ወ',
      rotation: 'up',
      thumb: {
        curlMin: 160,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      index: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      }
    }; // not confertable wit letter "wee"
    let ዐ: AlphabetDefinationI = {
      letterNumber: 20,
      letter: 'ዐ',
      rotation: 'up',
      thumb: {
        curlMin: 180,
        curlMax: 110,
        special: 'pinchThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Pinch the thumb and pointer finger together'
      },
      index: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'pinchThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ዘ: AlphabetDefinationI = {
      letterNumber: 21,
      letter: 'ዘ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      }
    };
    let ዠ: AlphabetDefinationI = {
      letterNumber: 22,
      letter: 'ዠ ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      }
    };
    let የ: AlphabetDefinationI = {
      letterNumber: 23,
      letter: 'የ',
      rotation: 'side',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: halfCurlMin,
        curlMax: 10,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ደ: AlphabetDefinationI = {
      letterNumber: 24,
      letter: 'ደ',
      rotation: 'down',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbToTheLeft',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Straigten it - and make sure it is close to index finger'
      },
      index: {
        curlMin: halfCurlMin + 40,
        curlMax: fullCurlMin + 40,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ጀ: AlphabetDefinationI = {
      letterNumber: 25,
      letter: 'ጀ',
      rotation: 'down',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbToTheLeft',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Straigten it - and make sure it is close to index finger'
      },
      index: {
        curlMin: halfCurlMin + 40,
        curlMax: fullCurlMin + 40,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: noCurl,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ገ: AlphabetDefinationI = {
      letterNumber: 26,
      letter: 'ge',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin - 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      }
    };
    let ጸ: AlphabetDefinationI = {
      letterNumber: 30,
      letter: 'ጸ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'crossIndexAndMiddle',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'crossIndexAndMiddle',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ፀ: AlphabetDefinationI = {
      letterNumber: 31,
      letter: 'ፀ',
      rotation: 'up',
      thumb: {
        curlMin: 180,
        curlMax: 110,
        special: 'pinchThumbAndlittle',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Pinch the thumb and little finger together'
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      little: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'pinchThumbAndlittle',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      }
    };

    // Missing z,p,q,j,h
    this.alphabetArray = [
      ሀ,
      ለ,
      ሐ,
      መ,
      ሠ,
      ረ,
      ሰ,
      ሸ,
      ቀ,
      በ,
      ተ,
      ቸ,
      ኀ,
      ነ,
      ኘ,
      አ,
      ከ,
      ኸ,
      ወ,
      ዐ,
      ዘ,
      ዠ,
      የ,
      ደ,
      ጀ,
      ገ,
      ጸ,
      ፀ
    ];
  }

  public getRandomLetter = () => {
    var getRandom = Math.floor(Math.random() * this.alphabetArray.length);
    return this.alphabetArray[getRandom];
  };

  public getSpecificLetter = (findLetter: string) => {
    var length = this.alphabetArray.length;
    for (var i = 0; i < length; i++) {
      var currentLetter = this.alphabetArray[i];
      var getLetterName = currentLetter.letter;
      if (getLetterName.toLowerCase() === findLetter.toLowerCase()) {
        return currentLetter;
      }
    }
  };
}
