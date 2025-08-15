import Link from "next/link";
import "./globals.css";

const page = () => {
  return (
    <section className="first-page ">
      <h1> Basketball Competitions</h1>
      <p>Welcome to FUPRE Basketball Competitions page!</p>
      <p>
        Here you can find information about various basketball competitions at
        FUPRE.
      </p>
      <p id="view-competition-text"> view competitions here</p>

      <div className="competitions-view">
        <div className="all-competitions">
          <p>School Competitions</p>
          <Link href="/school">
            <button className="competition-button">
              view school competitions
            </button>
          </Link>
        </div>
        <div className="all-competitions">
          <p>League Competitions</p>
          <Link href="/league">
            <button className="competition-button">
              view league competitions
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
