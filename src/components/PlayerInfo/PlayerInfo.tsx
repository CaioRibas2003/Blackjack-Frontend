import "./PlayerInfo.css";

function PlayerInfo(props: {
  player: { name: string; amount: number };
  bet: number;
}) {
  return (
    <div className="playerInfo">
      <h3>Nome : {props.player.name}</h3>
      <h3>💰: ${props.player.amount}</h3>
      <h3>Aposta Atual: ${props.bet}</h3>
    </div>
  );
}
export default PlayerInfo;
