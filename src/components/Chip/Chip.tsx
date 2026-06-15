import "./Chip.css";

type ChipProps = {
  value: number;
  onClick: () => void;
};

function Chip(props: ChipProps) {
  return (
    <div className={`chip chip-${props.value}`} onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Chip;
