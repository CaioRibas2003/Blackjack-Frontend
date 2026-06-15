import { useState } from "react";
import { useLocation } from "react-router-dom";

import PlayerInfo from "../../components/PlayerInfo/PlayerInfo";
import Card from "../../components/Card/Card";
import GameButton from "../../components/Buttons/Button";
import Chip from "../../components/Chip/Chip";
import ScoreDisplay from "../../components/ScoreDisplay/ScoreDisplay";

import type { GameResponse } from "../../types/Game";
import {
  startGame,
  hit,
  stand,
  dealerNext,
} from "../../services/blackjackService";

import "./BlackjackPage.css";

function BlackJackPage() {
  const location = useLocation();

  const [currentPlayer, setCurrentPlayer] = useState(location.state.player);
  const [bet, setBet] = useState(0);
  const [error, setError] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [game, setGame] = useState<GameResponse | null>(null);
  const [isDealerTurn, setIsDealerTurn] = useState(false);
  const [showResult, setShowResult] = useState(false);

  function updatePlayerAmount(playerAmount: number) {
    setCurrentPlayer((previousPlayer) => ({
      ...previousPlayer,
      amount: playerAmount,
    }));
  }

  function handleChipClick(value: number) {
    if (bet + value > currentPlayer.amount) {
      setError("*A aposta não pode ser maior que o valor disponível!*");
      return;
    }

    setError("");
    setBet((currentBet) => currentBet + value);
  }

  async function handleHit() {
    try {
      const response = await hit({
        playerId: currentPlayer.id,
      });

      setGame(response);
      updatePlayerAmount(response.playerAmount);

      if (isFinalStatus(response.status)) {
        setIsGameStarted(false);
        setIsDealerTurn(false);
        setShowResult(true);
      }
    } catch {
      setError("*Erro ao pedir carta!*");
    }
  }

  async function handleStand() {
    try {
      const response = await stand({
        playerId: currentPlayer.id,
      });

      setGame(response);
      updatePlayerAmount(response.playerAmount);
      console.log("Updating amount to:", response.playerAmount);

      setIsGameStarted(false);
      setIsDealerTurn(true);

      setError("");
    } catch {
      setError("*Erro ao parar jogada!*");
    }
  }

  async function handleDeal() {
    try {
      const response = await startGame({
        playerId: currentPlayer.id,
        bet,
      });

      setGame(response);
      updatePlayerAmount(response.playerAmount);
      setIsGameStarted(true);
      setError("");
    } catch {
      setError("*Erro ao iniciar o jogo!*");
    }
  }

  function handleClearBet() {
    setBet(0);
    setError("");
  }

  async function handleDealerNext() {
    try {
      const response = await dealerNext({
        playerId: currentPlayer.id,
      });

      console.log("Dealer Next response:", response);

      setGame(response);
      updatePlayerAmount(response.playerAmount);

      if (isFinalStatus(response.status)) {
        setIsGameStarted(false);
        setIsDealerTurn(false);
        setShowResult(true);
      }

      setError("");
    } catch {
      setError("*Erro na jogada do dealer!*");
    }
  }

  function handlePlayAgain() {
    setGame(null);
    setBet(0);
    setError("");
    setIsGameStarted(false);
    setIsDealerTurn(false);
    setShowResult(false);
  }

  function isFinalStatus(status: string) {
    return (
      status === "PLAYER_WIN" ||
      status === "DEALER_WIN" ||
      status === "DRAW" ||
      status === "PLAYER_BUST"
    );
  }

  return (
    <div className="blackjack">
      <PlayerInfo player={currentPlayer} bet={bet} />

      <div className="casinoTable">
        <div className="dealerArea">
          {game?.dealerCards.map((card, index) => (
            <Card key={index} value={card.value} suit={card.suit} />
          ))}

          {game && !showResult && <Card value="ACE" suit="SPADES" hidden />}

          <ScoreDisplay score={game?.dealerScore ?? 0} />
        </div>

        <div className="deck">
          <div className="cardBack backCard1"></div>
          <div className="cardBack backCard2"></div>
          <div className="cardBack backCard3"></div>
        </div>

        {!game ? (
          <div className="chipsArea">
            <Chip value={10} onClick={() => handleChipClick(10)} />
            <Chip value={25} onClick={() => handleChipClick(25)} />
            <Chip value={50} onClick={() => handleChipClick(50)} />
            <Chip value={100} onClick={() => handleChipClick(100)} />

            {error && <p className="error">{error}</p>}
          </div>
        ) : (
          <div className="playerCards">
            {game?.playerCards.map((card, index) => (
              <Card key={index} value={card.value} suit={card.suit} />
            ))}

            <ScoreDisplay score={game?.playerScore ?? 0} />
          </div>
        )}

        <div className="playerArea">
          <GameButton
            type="Hit"
            onClick={handleHit}
            disabled={!isGameStarted}
          />
          <GameButton
            type="Stand"
            onClick={handleStand}
            disabled={!isGameStarted}
          />
          <GameButton
            type="Dealer Next"
            onClick={handleDealerNext}
            disabled={!isDealerTurn}
          />
          <GameButton
            type="Deal"
            onClick={handleDeal}
            disabled={isGameStarted || bet === 0}
          />
          <GameButton
            type="Clear"
            onClick={handleClearBet}
            disabled={isGameStarted}
          />
        </div>
      </div>
      {showResult && game && (
        <div className="resultOverlay">
          <div className="resultCard">
            <h2>Resultado</h2>
            <p>{game.message}</p>
            <p>Player Score: {game.playerScore}</p>
            <p>Dealer Score: {game.dealerScore}</p>

            <button onClick={handlePlayAgain}>Jogar novamente</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlackJackPage;
