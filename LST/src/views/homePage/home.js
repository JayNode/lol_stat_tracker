import React from "react";
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  winData, 
  charData, 
  roleData, 
  tierData, 
  pickData, 
  banData, 
  matchesData
} from "../../../webScraper/webScraper";
const champions = [
  { name: "Aatrox", winRate: "49.8%" },
];


function Home() {
  return (
    <div className="Home">
      <h1>Champion Win Rates</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Champion</th>
              <th>Win Rate</th>
            </tr>
          </thead>
          <tbody>
            {champions.map((champion, index) => (
              <tr key={index}>
                <td>{champion.name}</td>
                <td>{champion.winRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;