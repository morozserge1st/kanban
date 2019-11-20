import { CardModel } from "./card-model";

export type ListState = {
  items: CardModel[],
  fetching: boolean
}