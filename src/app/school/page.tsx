import "./school.css";
import Link from "next/link";


const SchoolPage = () => {
  return (
    <section className="school-page">
      <h1>School Competitions</h1>
     <p>view school competitions here</p>
      <div className="competition-list">
        <div className="games">
          <p>VC-Cup</p>
          <Link href="/school/vccup">
           <button className="games-btn">
            view competitions
           </button>
           </Link>
        </div>
        <div className="games">
          <p>Inter-Faculty Cup</p>
          <Link href="/school/interfacultycup">
           <button className="games-btn">
            view competitions
           </button>
           </Link>
        </div>
        <div className="games">
          <p>Inter-Dept Cup</p>
          <Link href="/school/interdeptcup">
           <button className="games-btn">
            view competitions
           </button>
           </Link>
        </div>
        <div className="games">
          <p>Inter-Level Cup</p>
          <Link href="/school/interlevelcup">
           <button className="games-btn">
            view competitions
           </button>
           </Link>
        </div>
      </div>
    </section>
  );
};

export default SchoolPage;
