interface meaning {
  translate: string;
  example?: string;
}

class phrasalVerb {
  constructor(
    public id: number,
    public phrasalVerb: string,
    public meaning: meaning[]
  ) {}
}

const phrasalVerbs = [
  new phrasalVerb(1, "act out", [
    { translate: "odgrywać (np. scenariusz)" },
    { translate: "okazywać (np.uczucia)" },
    { translate: "otwarzać (np. jakieś wydarzenia)" },
    { translate: "źle sie zachowywać w wynoku stresu lub zdenerwowania" },
  ]),
];
