import "./PlayerInfo.css";

function PlayerInfo(props: { player: { name: string; amount: number } }) {
  return (
    <div className="playerInfo">
      <h3>Nome : {props.player.name}</h3>
      <h3>💰: {props.player.amount}</h3>
    </div>
  );
}
export default PlayerInfo;
