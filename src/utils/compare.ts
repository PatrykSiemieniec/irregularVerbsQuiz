import { Verbs } from "../shared";

const compare_AZ_Infinitive = (a: Verbs, b: Verbs): number => {
  const baseA = a.infinitive.toLowerCase();
  const baseB = b.infinitive.toLowerCase();
  if (baseA < baseB) {
    return -1;
  } else if (baseA > baseB) {
    return 1;
  }
  return 0;
};
const compare_ZA_Infinitive = (a: Verbs, b: Verbs): number => {
  const baseA = a.infinitive.toLowerCase();
  const baseB = b.infinitive.toLowerCase();
  if (baseA > baseB) {
    return -1;
  } else if (baseA < baseB) {
    return 1;
  }
  return 0;
};
const compare_AZ_Translate = (a: Verbs, b: Verbs): number => {
  const baseA = a.translate.toLowerCase();
  const baseB = b.translate.toLowerCase();
  return baseA.localeCompare(baseB, "pl");
};
const compare_ZA_Translate = (a: Verbs, b: Verbs): number => {
  const baseA = a.translate.toLowerCase();
  const baseB = b.translate.toLowerCase();
  return baseB.localeCompare(baseA, "pl");
};

const shuffle = (Verbs: Verbs[]) => {
  let shuffled = Verbs.map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
};

export {
  compare_AZ_Infinitive,
  compare_ZA_Infinitive,
  compare_AZ_Translate,
  compare_ZA_Translate,
  shuffle,
};
