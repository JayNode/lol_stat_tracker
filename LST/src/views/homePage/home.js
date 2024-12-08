import React, { useState, useEffect } from 'react';
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const champions = [
  { name: "Aatrox", winRate: "49.8%" },
];


function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('./webScraper.js') // The proxy will forward this to http://localhost:5000/api/data
      .then(res => res.json())
      .then(data => setData(data));
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