import type { card as CardType } from "../../types/Card";
import "./Card.css";

type CardProps = CardType & {
  hidden?: boolean;
};

function Card(props: CardProps) {
  const valueMap = {
    ACE: "A",
    KING: "K",
    QUEEN: "Q",
    JACK: "J",
    TEN: "10",
    NINE: "9",
    EIGHT: "8",
    SEVEN: "7",
    SIX: "6",
    FIVE: "5",
    FOUR: "4",
    THREE: "3",
    TWO: "2",
  };

  const suitMap = {
    SPADES: "♠",
    HEARTS: "♥",
    DIAMONDS: "♦",
    CLUBS: "♣",
  };

  const isRed = props.suit === "HEARTS" || props.suit === "DIAMONDS";

  if (props.hidden) {
    return <div className="cardBack"></div>;
  }

  return (
    <div className={`card ${isRed ? "red" : "black"}`}>
      <p>{suitMap[props.suit]}</p>
      <p>{valueMap[props.value]}</p>
      <p>{suitMap[props.suit]}</p>
    </div>
  );
}

export default Card;
