"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./nsecup.css";

interface Competition {
  id: number;
  teamA: string;
  teamB: string;
  status: string;
}

const Nsecup = () => {
  
    const [competitions, setCompetitions] = useState<Competition[]>([]);
        const [Loading, setLoading] = useState<boolean>(true);
      
        const apiUrl = process.env.NEXT_PUBLIC_BASKETBALL_API_URL;
      
        useEffect(() => {
          async function fetchCompetitions() {
            if (!apiUrl) {
              setLoading(false);
              return;
            }
      
            try {
              const res = await fetch(apiUrl);
              if (!res.ok) throw new Error("Failed to fetch competitions");
      
              const data: Competition[] = await res.json();
              setCompetitions(data);
            } catch (error) {
              console.error(error);
              setCompetitions([]);
            } finally {
              setLoading(false);
            }
          }
      
          fetchCompetitions();
        }, [apiUrl]);
      
        if (Loading) return <p className="loading-p">Loading competitions...</p>;
      
        return (
          <section className="ongoing">
            <h2>On-going Competitions</h2>
            {competitions.length > 0 ? (
              competitions.map((match) => (
                <div key={match.id}>
                  {match.teamA} vs {match.teamB} — {match.status}
                </div>
              ))
            ) : (
              <p>No on-going competitions.</p>
            )}
          </section>
        );
}

export default Nsecup