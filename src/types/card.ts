export type CardValue =
  | "ACE"
  | "TWO"
  | "THREE"
  | "FOUR"
  | "FIVE"
  | "SIX"
  | "SEVEN"
  | "EIGHT"
  | "NINE"
  | "TEN"
  | "JACK"
  | "QUEEN"
  | "KING";

export type Suit = "HEARTS" | "DIAMONDS" | "SPADES" | "CLUBS";

export interface Card {
  value: CardValue;
  suit: Suit;
}
