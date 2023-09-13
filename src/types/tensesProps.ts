import { Verbs } from "../shared";

export default interface tensesPropsTypes {
  index: number;
  item: Verbs;
  closeModal?: () => void;
  infinitiveRef?: React.MutableRefObject<HTMLInputElement[]>;
  pastSimpleRef?: React.MutableRefObject<HTMLInputElement[]>;
  pastParticipleRef?: React.MutableRefObject<HTMLInputElement[]>;
}
