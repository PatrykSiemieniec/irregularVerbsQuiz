export default class Verbs {
  constructor(
    public id: number,
    public infinitive: string,
    public pastSimple: { id: number; form: string }[],
    public pastParticiple: { id: number; form: string }[],
    public translate: string
  ) {}
}

export const IrregularVerbs: Verbs[] = [
  new Verbs(
    1,
    "arise",
    [{ id: 1, form: "arose" }],
    [{ id: 1, form: "arisen" }],
    "wstać, powstać"
  ),

  new Verbs(
    2,
    "be",
    [
      { id: 2, form: "was" },
      { id: 3, form: "were" },
    ],
    [{ id: 2, form: "been" }],
    "być"
  ),

  new Verbs(
    3,
    "bear",
    [{ id: 4, form: "bore" }],
    [
      { id: 3, form: "borne" },
      { id: 4, form: "born" },
    ],
    "rodzić"
  ),

  new Verbs(
    4,
    "beat",
    [{ id: 5, form: "beat" }],
    [{ id: 5, form: "beaten" }],
    "bić, uderzać"
  ),

  new Verbs(
    5,
    "become",
    [{ id: 6, form: "became" }],
    [{ id: 6, form: "become" }],
    "stać się"
  ),
  new Verbs(
    6,
    "begin",
    [{ id: 7, form: "began" }],
    [{ id: 7, form: "begun" }],
    "zacząć"
  ),
  new Verbs(
    7,
    "bend",
    [{ id: 8, form: "bent" }],
    [{ id: 8, form: "bent" }],
    "zginąć"
  ),
  new Verbs(
    8,
    "bite",
    [{ id: 9, form: "bit" }],
    [{ id: 9, form: "bitten" }],
    "gryźć"
  ),
  new Verbs(
    9,
    "blow",
    [{ id: 10, form: "blew" }],
    [{ id: 10, form: "blown" }],
    "wiać, dmuchać"
  ),
  new Verbs(
    10,
    "break",
    [{ id: 11, form: "broke" }],
    [{ id: 11, form: "broken" }],
    "łamać"
  ),
  new Verbs(
    11,
    "bring",
    [{ id: 12, form: "brought" }],
    [{ id: 12, form: "brought" }],
    "przynieść"
  ),
  new Verbs(
    12,
    "build",
    [{ id: 13, form: "build" }],
    [{ id: 13, form: "built" }],
    "budować"
  ),
  new Verbs(
    13,
    "burn",
    [
      { id: 14, form: "burnt" },
      { id: 15, form: "burned" },
    ],
    [
      { id: 14, form: "burnt" },
      { id: 15, form: "burned" },
    ],
    "płonąć, palić"
  ),
  new Verbs(
    14,
    "burst",
    [{ id: 16, form: "burst" }],
    [{ id: 16, form: "burst" }],
    "wybuchnąć"
  ),
  new Verbs(
    15,
    "buy",
    [{ id: 17, form: "bought" }],
    [{ id: 17, form: "bought" }],
    "kupić"
  ),
  new Verbs(
    16,
    "catch",
    [{ id: 18, form: "caught" }],
    [{ id: 18, form: "caught" }],
    "łapać"
  ),
  new Verbs(
    17,
    "choose",
    [{ id: 19, form: "chose" }],
    [{ id: 19, form: "chosen" }],
    "wybierać"
  ),
  new Verbs(
    18,
    "come",
    [{ id: 20, form: "came" }],
    [{ id: 20, form: "come" }],
    "przyjść"
  ),
  new Verbs(
    19,
    "cost",
    [{ id: 21, form: "cost" }],
    [{ id: 21, form: "cost" }],
    "kosztować"
  ),
  new Verbs(
    20,
    "cut",
    [{ id: 22, form: "cut" }],
    [{ id: 22, form: "cut" }],
    "ciąć, kroić"
  ),
  new Verbs(
    21,
    "do",
    [{ id: 23, form: "did" }],
    [{ id: 23, form: "done" }],
    "robić, czynić"
  ),
  new Verbs(
    22,
    "draw",
    [{ id: 24, form: "drew" }],
    [{ id: 24, form: "drawn" }],
    "rysować, ciągnąć"
  ),
  new Verbs(
    23,
    "dream",
    [
      { id: 25, form: "dreamed" },
      { id: 26, form: "dreamt" },
    ],
    [
      { id: 25, form: "dreamed" },
      { id: 26, form: "dreamt" },
    ],
    "śnić, marzyć"
  ),
  new Verbs(
    24,
    "drink",
    [{ id: 27, form: "drank" }],
    [{ id: 27, form: "drunk" }],
    "pić"
  ),
  new Verbs(
    25,
    "drive",
    [{ id: 28, form: "drove" }],
    [{ id: 28, form: "driven" }],
    "jechać(prowadzić pojazd)"
  ),
  new Verbs(
    26,
    "eat",
    [{ id: 29, form: "ate" }],
    [{ id: 29, form: "eaten" }],
    "jeść"
  ),
  new Verbs(
    27,
    "fall",
    [{ id: 30, form: "fell" }],
    [{ id: 30, form: "fallen" }],
    "spaść, upaść"
  ),
  /////////////////////pojebane id wgl
  new Verbs(
    28,
    "fell",
    [{ id: 31, form: "felt" }],
    [{ id: 31, form: "felt" }],
    "czuć"
  ),
  new Verbs(
    29,
    "fight",
    [{ id: 32, form: "fought" }],
    [{ id: 32, form: "fought" }],
    "walczyć"
  ),
  new Verbs(
    30,
    "find",
    [{ id: 33, form: "found" }],
    [{ id: 33, form: "found" }],
    "znaleźć"
  ),
  new Verbs(
    31,
    "fly",
    [{ id: 34, form: "flew" }],
    [{ id: 34, form: "flown" }],
    "lecieć"
  ),
  new Verbs(
    32,
    "forget",
    [{ id: 35, form: "forgot" }],
    [{ id: 35, form: "forgotten" }],
    "zapomnieć"
  ),
  new Verbs(
    33,
    "forgive",
    [{ id: 36, form: "forgave" }],
    [{ id: 36, form: "forgiven" }],
    "wybaczyć"
  ),
  new Verbs(
    34,
    "freeze",
    [{ id: 37, form: "froze" }],
    [{ id: 37, form: "frozen" }],
    "zamarzać"
  ),
  new Verbs(
    35,
    "get",
    [{ id: 38, form: "got" }],
    [{ id: 38, form: "got" }],
    "dostać"
  ),
  new Verbs(
    36,
    "give",
    [{ id: 39, form: "gave" }],
    [{ id: 39, form: "given" }],
    "dać"
  ),
  new Verbs(
    37,
    "go",
    [{ id: 40, form: "went" }],
    [{ id: 40, form: "gone" }],
    "iść, jechać"
  ),
  new Verbs(
    38,
    "grow",
    [{ id: 41, form: "grew" }],
    [{ id: 41, form: "grown" }],
    "rosnąć"
  ),
  new Verbs(
    39,
    "hang",
    [{ id: 42, form: "hung" }],
    [{ id: 42, form: "hung" }],
    "wisieć"
  ),
  new Verbs(
    40,
    "have",
    [{ id: 43, form: "had" }],
    [{ id: 43, form: "had" }],
    "mieć"
  ),
  new Verbs(
    41,
    "hear",
    [{ id: 44, form: "heard" }],
    [{ id: 44, form: "heard" }],
    "słyszeć"
  ),
  new Verbs(
    42,
    "hide",
    [{ id: 45, form: "hid" }],
    [{ id: 45, form: "hidden" }],
    "chować, ukrywać"
  ),
  new Verbs(
    43,
    "hit",
    [{ id: 46, form: "hit" }],
    [{ id: 46, form: "hit" }],
    "uderzyć"
  ),
  new Verbs(
    44,
    "hold",
    [{ id: 47, form: "held" }],
    [{ id: 47, form: "held" }],
    "trzymać, przytulać"
  ),
  new Verbs(
    45,
    "hurt",
    [{ id: 48, form: "hurt" }],
    [{ id: 48, form: "hurt" }],
    "kaleczyć, ranić"
  ),
  new Verbs(
    46,
    "keep",
    [{ id: 49, form: "kept" }],
    [{ id: 49, form: "kept" }],
    "trzymać, zachować"
  ),
  new Verbs(
    47,
    "know",
    [{ id: 50, form: "knew" }],
    [{ id: 50, form: "known" }],
    "wiedzieć, znać"
  ),
  new Verbs(
    48,
    "lay",
    [{ id: 51, form: "laid" }],
    [{ id: 51, form: "laid" }],
    "kłaść"
  ),
  new Verbs(
    49,
    "lead",
    [{ id: 52, form: "led" }],
    [{ id: 52, form: "led" }],
    "prowadzić"
  ),
  new Verbs(
    50,
    "leap",
    [
      { id: 53, form: "leapt" },
      { id: 54, form: "leaped" },
    ],
    [
      { id: 53, form: "leapt" },
      { id: 54, form: "leaped" },
    ],
    "skoczyć"
  ),
  new Verbs(
    51,
    "learn",
    [
      { id: 55, form: "learnt" },
      { id: 56, form: "learned" },
    ],
    [
      { id: 55, form: "learnt" },
      { id: 56, form: "learned" },
    ],
    "uczyć się"
  ),
  new Verbs(
    52,
    "lend",
    [{ id: 57, form: "lent" }],
    [{ id: 57, form: "lent" }],
    "pożyczać (komuś)"
  ),
  new Verbs(
    53,
    "let",
    [{ id: 58, form: "let" }],
    [{ id: 58, form: "let" }],
    "pozwalać"
  ),
  new Verbs(
    54,
    "lie",
    [{ id: 59, form: "lay" }],
    [{ id: 59, form: "lain" }],
    "leżeć"
  ),
  new Verbs(
    55,
    "lose",
    [{ id: 60, form: "lost" }],
    [{ id: 60, form: "lost" }],
    "tracić, gubić"
  ),
  new Verbs(
    56,
    "make",
    [{ id: 61, form: "made" }],
    [{ id: 61, form: "made" }],
    "robić, wykonywać"
  ),
  new Verbs(
    57,
    "mean",
    [{ id: 62, form: "meant" }],
    [{ id: 62, form: "meant" }],
    "znaczyć, mieć na myśli"
  ),
  new Verbs(
    58,
    "meet",
    [{ id: 63, form: "met" }],
    [{ id: 63, form: "met" }],
    "spotykać"
  ),
  new Verbs(
    59,
    "pay",
    [{ id: 64, form: "paid" }],
    [{ id: 64, form: "paid" }],
    "płacić"
  ),
  new Verbs(
    60,
    "put",
    [{ id: 65, form: "put" }],
    [{ id: 65, form: "put" }],
    "kłaść"
  ),
  new Verbs(
    61,
    "read",
    [{ id: 66, form: "read" }],
    [{ id: 66, form: "read" }],
    "czytać"
  ),
  new Verbs(
    62,
    "ride",
    [{ id: 67, form: "rode" }],
    [{ id: 67, form: "ridden" }],
    "jeździć(konno, na rowerze)"
  ),
  new Verbs(
    63,
    "ring",
    [{ id: 68, form: "rang" }],
    [{ id: 68, form: "rung" }],
    "dzwonić"
  ),
  new Verbs(
    64,
    "rise",
    [{ id: 69, form: "rose" }],
    [{ id: 69, form: "risen" }],
    "wstać"
  ),
  new Verbs(
    65,
    "run",
    [{ id: 70, form: "ran" }],
    [{ id: 70, form: "run" }],
    "biec"
  ),
  new Verbs(
    66,
    "say",
    [{ id: 71, form: "said" }],
    [{ id: 71, form: "said" }],
    "powiedzieć"
  ),
  new Verbs(
    67,
    "see",
    [{ id: 72, form: "saw" }],
    [{ id: 72, form: "seen" }],
    "widzieć"
  ),
  new Verbs(
    68,
    "sell",
    [{ id: 73, form: "sold" }],
    [{ id: 73, form: "sold" }],
    "srzedać"
  ),
  new Verbs(
    69,
    "send",
    [{ id: 74, form: "sent" }],
    [{ id: 74, form: "sent" }],
    "posłać, wysłać"
  ),
  new Verbs(
    70,
    "set",
    [{ id: 75, form: "set" }],
    [{ id: 75, form: "set" }],
    "ustawić, umieścić"
  ),
  new Verbs(
    71,
    "shake",
    [{ id: 76, form: "shook" }],
    [{ id: 76, form: "shaken" }],
    "trząść"
  ),
  new Verbs(
    72,
    "shine",
    [{ id: 77, form: "shone" }],
    [{ id: 77, form: "shone" }],
    "świecić, lśnić"
  ),
  new Verbs(
    73,
    "shoot",
    [{ id: 78, form: "shot" }],
    [{ id: 78, form: "shot" }],
    "strzelać"
  ),
  new Verbs(
    74,
    "show",
    [{ id: 79, form: "showed" }],
    [{ id: 79, form: "shown" }],
    "pokazywać"
  ),
  new Verbs(
    75,
    "shrink",
    [{ id: 80, form: "shrank" }],
    [{ id: 80, form: "shrunk" }],
    "kurczyć się, maleć"
  ),
  new Verbs(
    76,
    "shut",
    [{ id: 81, form: "shut" }],
    [{ id: 81, form: "shut" }],
    "zamykać"
  ),
  new Verbs(
    77,
    "sing",
    [{ id: 82, form: "sang" }],
    [{ id: 82, form: "sung" }],
    "śpiewać"
  ),
  new Verbs(
    78,
    "sit",
    [{ id: 83, form: "sat" }],
    [{ id: 83, form: "sat" }],
    "siadać, siedzieć"
  ),

  new Verbs(
    79,
    "smell",
    [
      { id: 84, form: "smelt" },
      { id: 85, form: "smelled" },
    ],
    [
      { id: 84, form: "smelt" },
      { id: 85, form: "smelled" },
    ],
    "pachnieć, wąchać"
  ),
  new Verbs(
    80,
    "speak",
    [{ id: 86, form: "spoke" }],
    [{ id: 86, form: "spoken" }],
    "mówić"
  ),
  new Verbs(
    81,
    "spell",
    [
      { id: 87, form: "spelt" },
      { id: 98, form: "spelled" },
    ],
    [
      { id: 87, form: "spelt" },
      { id: 88, form: "spelled" },
    ],
    "literować"
  ),
  new Verbs(
    82,
    "spend",
    [{ id: 89, form: "spent" }],
    [{ id: 89, form: "spent" }],
    "spędzać (czas), wydawać (pieniądze)"
  ),
  new Verbs(
    83,
    "spill",
    [
      { id: 90, form: "spilt" },
      { id: 91, form: "spilled" },
    ],
    [
      { id: 90, form: "spilt" },
      { id: 91, form: "spilled" },
    ],
    "rozlewać"
  ),
  new Verbs(
    84,
    "spin",
    [{ id: 92, form: "spun" }],
    [{ id: 92, form: "spun" }],
    "kręcić, prząść"
  ),
  new Verbs(
    85,
    "spread",
    [{ id: 93, form: "spread" }],
    [{ id: 93, form: "spread" }],
    "rozprzestrzeniać, rozkładać"
  ),
  new Verbs(
    86,
    "stand",
    [{ id: 94, form: "stood" }],
    [{ id: 94, form: "stood" }],
    "stać"
  ),
  new Verbs(
    87,
    "steal",
    [{ id: 95, form: "stole" }],
    [{ id: 95, form: "stolen" }],
    "kraść"
  ),
  new Verbs(
    88,
    "stick",
    [{ id: 96, form: "stuck" }],
    [{ id: 16, form: "stuck" }],
    "wkładać, wtykać, kleić"
  ),
  new Verbs(
    89,
    "strike",
    [{ id: 97, form: "struck" }],
    [{ id: 97, form: "struck" }],
    "uderzyć"
  ),
  new Verbs(
    90,
    "swear",
    [{ id: 98, form: "swore" }],
    [{ id: 98, form: "sworn" }],
    "przysięgać, przeklinać"
  ),
  new Verbs(
    91,
    "swim",
    [{ id: 99, form: "swam" }],
    [{ id: 99, form: "swum" }],
    "pływać"
  ),
  new Verbs(
    92,
    "take",
    [{ id: 100, form: "took" }],
    [{ id: 100, form: "taken" }],
    "brać"
  ),
  new Verbs(
    93,
    "teach",
    [{ id: 101, form: "taught" }],
    [{ id: 101, form: "taught" }],
    "nauczać"
  ),
  new Verbs(
    94,
    "tear",
    [{ id: 102, form: "tore" }],
    [{ id: 102, form: "torn" }],
    "drzeć"
  ),
  new Verbs(
    95,
    "tell",
    [{ id: 103, form: "told" }],
    [{ id: 103, form: "told" }],
    "mówić, powiedzieć"
  ),
  new Verbs(
    96,
    "think",
    [{ id: 104, form: "thought" }],
    [{ id: 104, form: "thought" }],
    "myśleć"
  ),
  new Verbs(
    97,
    "throw",
    [{ id: 105, form: "threw" }],
    [{ id: 105, form: "thrown" }],
    "rzucać"
  ),
  new Verbs(
    98,
    "understand",
    [{ id: 106, form: "understood" }],
    [{ id: 106, form: "understood" }],
    "rozumieć"
  ),
  new Verbs(
    99,
    "wake",
    [{ id: 107, form: "woke" }],
    [{ id: 107, form: "woken" }],
    "budzić się"
  ),
  new Verbs(
    100,
    "wear",
    [{ id: 108, form: "wore" }],
    [{ id: 108, form: "worn" }],
    "nosić (ubranie)"
  ),
  new Verbs(
    101,
    "weep",
    [{ id: 109, form: "wept" }],
    [{ id: 109, form: "wept" }],
    "płakać"
  ),
  new Verbs(
    102,
    "win",
    [{ id: 110, form: "won" }],
    [{ id: 110, form: "won" }],
    "wygrać"
  ),
  new Verbs(
    103,
    "write",
    [{ id: 111, form: "wrote" }],
    [{ id: 111, form: "written" }],
    "pisać"
  ),
];
