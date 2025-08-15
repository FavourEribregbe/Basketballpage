"use client";
import "./sc.css";
import { useEffect, useState } from "react";

const Scoreboard = () => {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchScoreboardImage() {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_SCOREBOARD_API as string
        );
        const data = await res.json();
        setImageUrl(data.image);
      } catch (error) {
        console.error("Error fetching scoreboard :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchScoreboardImage();
  }, []);

  if (loading) {
    return <p className="text">Loading scores...</p>;
  }

  if (!imageUrl) {
    return <p className="text">No scores available.</p>;
  }

  return (
    <div className="score-img">
      <img src={imageUrl} alt="Score Board" />
    </div>
  );
};

export default Scoreboard;
