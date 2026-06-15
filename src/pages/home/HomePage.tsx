import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { createPlayer } from "../../services/playerService";

function HomePage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validate() {
    if (!name.trim()) {
      setError("O nome é obrigatório.");
      return false;
    }
    if (amount <= 0) {
      setError("O valor deve ser positivo e maior que zero.");
      return false;
    }
    setError("");
    return true;
  }

  async function handlePlay() {
    try {
      const isValid = validate();

      if (!isValid) {
        return;
      }

      setIsLoading(true);
      const player = await createPlayer({ name, amount });
      console.log(player);
      navigate("/game", { state: { player } });
    } catch {
      setError("*Erro ao criar jogador!*");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="home">
      <h1>Blackjack</h1>

      <div className="login">
        <div className="field">
          <label>Nome: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Digite seu nome:"
          />
        </div>
        <div className="field">
          <label>Saldo inicial: </label>
          <input
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            type="number"
            placeholder="Digite seu saldo:"
          />
        </div>
        <button disabled={isLoading} onClick={handlePlay}>
          {isLoading ? "Entrando..." : "Jogar"}
        </button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default HomePage;
