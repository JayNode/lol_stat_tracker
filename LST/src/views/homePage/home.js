import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [champions, setChampions] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/champions");
        setChampions(response.data); // Assuming the backend sends an array of champions
      } catch (error) {
        console.error("Error fetching champions:", error);
      }
    };

    fetchChampions();
  }, []);

  return (
    <div className="Home">
      <h1>Champion Win Rates</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Champion</th>
              <th>Win Rate</th>
              <th>Role</th>
              <th>Tier</th>
              <th>Pick Rate</th>
              <th>Ban Rate</th>
              <th>Matches</th>
            </tr>
          </thead>
          <tbody>
            {champions.map((champion, index) => (
              <tr key={index}>
                <td>{champion.name}</td>
                <td>{champion.winRate}</td>
                <td>{champion.role}</td>
                <td>{champion.tier}</td>
                <td>{champion.pickRate}</td>
                <td>{champion.banRate}</td>
                <td>{champion.matches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
