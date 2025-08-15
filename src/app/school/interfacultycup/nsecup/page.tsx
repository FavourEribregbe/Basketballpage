import "./nse.css"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Nsecup from "./nse";

const Nse = () => {
  return (
    <section className="nsepage">
      <h1>NSE-CUP</h1>
      <p className="text"> View competitions</p>
      <div> <Nsecup/> </div>
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

export default Nse