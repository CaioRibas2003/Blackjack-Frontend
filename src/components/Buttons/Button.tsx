import type { ButtonType } from "../../types/Button";
import "./Button.css";

type GameButtonProps = {
  type: ButtonType;
  onClick: () => void;
  disabled?: boolean;
};

function GameButton(props: GameButtonProps) {
  return (
    <button
      className={`GameButton ${props.type.toLowerCase()}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.type}
    </button>
  );
}

export default GameButton;
