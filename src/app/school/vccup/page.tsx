import "./vccup.css"
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import Vc from "./vc"

const vccuppage = () => {
  return (
    <section className="vccuppage">
      <h1>VC-CUP</h1>
      <p className="text"> View competitions</p>
      <div> <Vc/> </div>
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

export default vccuppage