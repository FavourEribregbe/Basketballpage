import "./interfaculty.css";
import Link from "next/link";

const Interfaculty = () => {
  return (
   <section className="inter-faculty-cup">
      <h1>Inter-Faculty Cup</h1>
    <div className="inter-faculty">
      <div className="faculty">
        <p>NASS CUP</p>
        <Link href="/school/interfacultycup/nasscup">
          <button className="faculty-btn">view competitions</button>
        </Link>
      </div>
      <div className="faculty">
        <p>NSE CUP</p>
         <Link href="/school/interfacultycup/nsecup">
          <button className="faculty-btn">view competitions</button>
        </Link>
      </div>
    </div>
    </section>
  );
};

export default Interfaculty;
