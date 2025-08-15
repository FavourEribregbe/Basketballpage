import "./interdept.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Interdeptcup from "./interdeptcup";

const interdept = () => {
  return (
    <section className="interdeptpage">
      <h1>Inter-Departmental-Cup</h1>
      <p className="text"> View competitions</p>
      <div> <Interdeptcup/> </div>
       <div className="btns">
          <Link href="">
            <button id="school-team-btn">
              School Teams <FaArrowRight className="arrowbtn" />
            </button>
          </Link>
          <Link href="">
            <button id="school-team-btn">
              Game Fixtures <FaArrowRight className="arrowbtn" />
            </button>
          </Link>
                    <Link href="">
            <button id="school-team-btn">
              Player Stats <FaArrowRight className="arrowbtn" />
            </button>
          </Link>
                    <Link href="/scoreboard">
            <button id="school-team-btn">
              Score Board <FaArrowRight className="arrowbtn" />
            </button>
          </Link>
        </div>
    </section>
  )
}

export default interdept