import { AlphabetDefinationI } from '../type';

export class AmharicAlphabet {
  private alphabetArray: AlphabetDefinationI[] = [];
  specialCharacterArray: Record<string, Array<number[]>>;
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
        curlMax: fullCurlMax,
        special: 'distanceBetweenThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: "Bend it - but make sure it doesn't touch your pointer finger"
      },
      index: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      middle: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      ring: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      little: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
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
    let ፐ = [
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7],
      [0.7760849595069885, 0.6140811443328857, -6.820529847573198e-7]
    ];
    let ጨ = [
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7],
      [0.7825914025306702, 0.5587455034255981, -5.424585083346756e-7]
    ];
    let ጠ = [
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434],
      [0.8257927894592285, 0.4633639454841614, -0.0000010900878351094434]
    ];
    let ፈ = [
      [0.8757774829864502, 0.8149726390838623, -3.768534213577368e-7],
      [0.8032734394073486, 0.7991076707839966, -0.0060125780291855335],
      [0.7291219234466553, 0.741241455078125, -0.015201489441096783],
      [0.6767569184303284, 0.7023256421089172, -0.03016524575650692],
      [0.6585494875907898, 0.6553438305854797, -0.04054610803723335],
      [0.7355356812477112, 0.5924860239028931, 0.014382641762495041],
      [0.6929627656936646, 0.5054004192352295, -0.021316422149538994],
      [0.6636446714401245, 0.547311007976532, -0.04366300627589226],
      [0.6556506752967834, 0.5998274087905884, -0.051376014947891235],
      [0.7619687914848328, 0.5740755200386047, 0.00207848334684968],
      [0.7048308253288269, 0.4811735451221466, -0.04310830309987068],
      [0.670676589012146, 0.5410410165786743, -0.06355305016040802],
      [0.6647721529006958, 0.6024235486984253, -0.06418699771165848],
      [0.7968941330909729, 0.5637968182563782, -0.015703361481428146],
      [0.747823178768158, 0.5018398761749268, -0.054255180060863495],
      [0.7061542868614197, 0.5651997923851013, -0.061968185007572174],
      [0.687461793422699, 0.6177291870117188, -0.05370048061013222],
      [0.8345035910606384, 0.5645419359207153, -0.03433872386813164],
      [0.8235280513763428, 0.463815838098526, -0.05494195595383644],
      [0.8099185824394226, 0.4022432565689087, -0.06223233416676521],
      [0.7975450754165649, 0.34336185455322266, -0.06122858449816704]
    ];
    let ጰ = [
      [0.8771805167198181, 0.7848175764083862, -5.431357976704021e-7],
      [0.7958595156669617, 0.773462176322937, 0.010995263233780861],
      [0.7229397892951965, 0.7210379838943481, 0.006233715917915106],
      [0.6689661741256714, 0.691649317741394, -0.00796548556536436],
      [0.6369162201881409, 0.6673038601875305, -0.019361652433872223],
      [0.7401512861251831, 0.5701592564582825, 0.02145160548388958],
      [0.6763099431991577, 0.5049610733985901, -0.010239461436867714],
      [0.6450040936470032, 0.5526691675186157, -0.0308366846293211],
      [0.6356809735298157, 0.6039861440658569, -0.039906300604343414],
      [0.7566419839859009, 0.5588751435279846, -0.0012733604526147246],
      [0.6791123747825623, 0.4835524260997772, -0.04119444638490677],
      [0.647448718547821, 0.5533744096755981, -0.0583609864115715],
      [0.6448704600334167, 0.6153603792190552, -0.06093728169798851],
      [0.7765522003173828, 0.5597710013389587, -0.0275505930185318],
      [0.7036756873130798, 0.4915957748889923, -0.05673108249902725],
      [0.6700546145439148, 0.5674147605895996, -0.05489087104797363],
      [0.6614722013473511, 0.6282244324684143, -0.045610956847667694],
      [0.7943854331970215, 0.575321614742279, -0.05452283099293709],
      [0.7633493542671204, 0.48799848556518555, -0.07229401916265488],
      [0.7359614968299866, 0.43606477975845337, -0.07728888094425201],
      [0.7131798267364502, 0.3834681510925293, -0.07749918103218079]
    ];
    this.specialCharacterArray = { ጰ, ፈ, ጠ, ጨ, ፐ };
    // Missing z,p,q,j,h
    this.alphabetArray = [ሀ, ለ, ሐ, መ, ረ, ሰ, ቀ, ዘ, ገ, ነ, ዠ, አ, ኘ, የ];
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
