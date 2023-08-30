import { Verbs } from "../shared";

export default interface tensesPropsTypes {
  index: number;
  item: Verbs;
  closeModal?: () => void;
}
