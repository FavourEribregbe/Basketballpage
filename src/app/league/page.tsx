import "./league.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Ongoing from "./ongoing";

const leaguepage = () => {
  return (
    <section className="league-page">
      <h1>Welcome to League competitions</h1>
      <p>
        Fupre Basketball league Championship, brings together the finest teams
        in a thrilling battle for glory. Featuring intense matchups, passionate
        crowds, and world-class talent, the tournament features unforgettable
        moments both on and off the court. From fast breaks to buzzer-beaters,
        every game is a showcase of skill, teamwork, and determination. Who will
        rise to the challenge and claim the ultimate crown? Join us and witness
        the action unfold, where legends are made and history is written.
      </p>
      <div className="league-games">
        <div>
          <Ongoing />
        </div>
        <div className="btns">
          <Link href="">
            <button id="league-team-btn">
              League Teams <FaArrowRight className="arrowbtn" />
            </button>
          </Link>
          <Link href="">
            <button id="league-team-btn">
              Game Fixtures <FaArrowRight className="arrowbtn" />
            </button>
          </Link>
                    <Link href="">
            <button id="league-team-btn">
              Player Stats <FaArrowRight className="arrowbtn" />
            </button>
          </Link>
                    <Link href="/scoreboard">
            <button id="league-team-btn">
              Score Board <FaArrowRight className="arrowbtn" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default leaguepage;
