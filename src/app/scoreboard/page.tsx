import Scoreboard from "./scoreboard";
import "./scoreboard.css"

export default function Scoreboadpage() {
  return (
    <section className="scoreboad">
      <h1><span className="orange-text">Score </span>Board</h1>
      <p>Scores</p>
      <div>
        <Scoreboard />
      </div>
    </section>
  );
}