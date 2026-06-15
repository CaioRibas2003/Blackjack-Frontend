function ScoreDisplay(props: { score: number }) {
  return (
    <div className="scoreDisplay">
      <p>{props.score}</p>
    </div>
  );
}

export default ScoreDisplay;
