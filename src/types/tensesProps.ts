import { Verbs } from "../shared";

export default interface tensesPropsTypes {
  index: number;
  item: Verbs;
  closeModal?: () => void;
  ref?: React.Ref<HTMLDivElement> | React.Ref<HTMLInputElement>;
}
