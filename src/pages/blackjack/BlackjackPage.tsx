import PlayerInfo from "../../components/PlayerInfo/PlayerInfo";
import "./BlackjackPage.css";
import { useLocation } from "react-router-dom";

function BlackJackPage() {
  const location = useLocation();

  const player = location.state.player;

  return (
    <div className="blackjack">
      <PlayerInfo player={player} />
      <div className="casinoTable"></div>
    </div>
  );
}

export default BlackJackPage;
