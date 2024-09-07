import React from "react";
import "./home.css";

const champions = [
  { name: "Aatrox", winRate: "49.8%" },
  { name: "Ahri", winRate: "52.1%" },
  { name: "Akali", winRate: "48.9%" },
  { name: "Alistar", winRate: "51.6%" },
  { name: "Amumu", winRate: "54.2%" },
  { name: "Anivia", winRate: "53.25%" },
  { name: "Annie", winRate: "52.4%" },
  { name: "Aphelios", winRate: "48.7%" },
  { name: "Ashe", winRate: "51.9%" },
  { name: "Aurelion Sol", winRate: "50.1%" },
  { name: "Azir", winRate: "47.2%" },
  { name: "Bard", winRate: "50.5%" },
  { name: "Blitzcrank", winRate: "52.8%" },
  { name: "Brand", winRate: "53.2%" },
  { name: "Braum", winRate: "50.7%" },
  { name: "Caitlyn", winRate: "48.6%" },
  { name: "Camille", winRate: "50.4%" },
  { name: "Cassiopeia", winRate: "51.1%" },
  { name: "Cho'Gath", winRate: "51.9%" },
  { name: "Corki", winRate: "49.4%" },
  { name: "Darius", winRate: "51.3%" },
  { name: "Diana", winRate: "52.5%" },
  { name: "Dr. Mundo", winRate: "50.8%" },
  { name: "Draven", winRate: "49.6%" },
  { name: "Ekko", winRate: "51.2%" },
  { name: "Elise", winRate: "50.3%" },
  { name: "Evelynn", winRate: "51.9%" },
  { name: "Ezreal", winRate: "48.7%" },
  { name: "Fiddlesticks", winRate: "54.3%" },
  { name: "Fiora", winRate: "50.9%" },
  { name: "Fizz", winRate: "51.8%" },
  { name: "Galio", winRate: "50.5%" },
  { name: "Gangplank", winRate: "48.4%" },
  { name: "Garen", winRate: "52.1%" },
  { name: "Gnar", winRate: "48.9%" },
  { name: "Gragas", winRate: "49.7%" },
  { name: "Graves", winRate: "49.1%" },
  { name: "Gwen", winRate: "49.3%" },
  { name: "Hecarim", winRate: "52.5%" },
  { name: "Heimerdinger", winRate: "52.4%" },
  { name: "Illaoi", winRate: "51.3%" },
  { name: "Irelia", winRate: "49.4%" },
  { name: "Ivern", winRate: "54.0%" },
  { name: "Janna", winRate: "52.8%" },
  { name: "Jarvan IV", winRate: "50.7%" },
  { name: "Jax", winRate: "51.9%" },
  { name: "Jayce", winRate: "48.8%" },
  { name: "Jhin", winRate: "51.4%" },
  { name: "Jinx", winRate: "51.3%" },
  { name: "Kai'Sa", winRate: "49.6%" },
  { name: "Kalista", winRate: "47.8%" },
  { name: "Karma", winRate: "50.9%" },
  { name: "Karthus", winRate: "52.1%" },
  { name: "Kassadin", winRate: "51.5%" },
  { name: "Katarina", winRate: "50.2%" },
  { name: "Kayle", winRate: "50.6%" },
  { name: "Kayn", winRate: "50.7%" },
  { name: "Kennen", winRate: "49.2%" },
  { name: "Kha'Zix", winRate: "51.4%" },
  { name: "Kindred", winRate: "50.4%" },
  { name: "Kled", winRate: "51.7%" },
  { name: "Kog'Maw", winRate: "52.9%" },
  { name: "LeBlanc", winRate: "48.9%" },
  { name: "Lee Sin", winRate: "47.5%" },
  { name: "Leona", winRate: "52.7%" },
  { name: "Lillia", winRate: "50.5%" },
  { name: "Lissandra", winRate: "51.0%" },
  { name: "Lucian", winRate: "48.6%" },
  { name: "Lulu", winRate: "52.1%" },
  { name: "Lux", winRate: "51.6%" },
  { name: "Malphite", winRate: "52.3%" },
  { name: "Malzahar", winRate: "52.9%" },
  { name: "Maokai", winRate: "52.8%" },
  { name: "Master Yi", winRate: "51.1%" },
  { name: "Miss Fortune", winRate: "51.2%" },
  { name: "Mordekaiser", winRate: "50.3%" },
  { name: "Morgana", winRate: "52.0%" },
  { name: "Nami", winRate: "52.6%" },
  { name: "Nasus", winRate: "51.7%" },
  { name: "Nautilus", winRate: "49.8%" },
  { name: "Neeko", winRate: "53.6%" },
  { name: "Nidalee", winRate: "48.7%" },
  { name: "Nilah", winRate: "50.8%" },
  { name: "Nocturne", winRate: "52.4%" },
  { name: "Nunu & Willump", winRate: "53.1%" },
  { name: "Olaf", winRate: "51.5%" },
  { name: "Orianna", winRate: "50.0%" },
  { name: "Ornn", winRate: "51.4%" },
  { name: "Pantheon", winRate: "51.6%" },
  { name: "Poppy", winRate: "52.7%" },
  { name: "Pyke", winRate: "50.9%" },
  { name: "Qiyana", winRate: "48.9%" },
  { name: "Quinn", winRate: "51.8%" },
  { name: "Rakan", winRate: "50.3%" },
  { name: "Rammus", winRate: "53.5%" },
  { name: "Rek'Sai", winRate: "50.9%" },
  { name: "Rell", winRate: "50.2%" },
  { name: "Renekton", winRate: "49.1%" },
  { name: "Rengar", winRate: "50.8%" },
  { name: "Riven", winRate: "50.0%" },
  { name: "Rumble", winRate: "49.7%" },
  { name: "Ryze", winRate: "48.5%" },
  { name: "Samira", winRate: "50.6%" },
  { name: "Sejuani", winRate: "51.2%" },
  { name: "Senna", winRate: "50.9%" },
  { name: "Seraphine", winRate: "54.1%" },
  { name: "Sett", winRate: "51.1%" },
  { name: "Shaco", winRate: "53.0%" },
  { name: "Shen", winRate: "52.8%" },
  { name: "Shyvana", winRate: "51.0%" },
  { name: "Singed", winRate: "52.2%" },
  { name: "Sion", winRate: "51.9%" },
  { name: "Sivir", winRate: "51.5%" },
  { name: "Skarner", winRate: "52.1%" },
  { name: "Sona", winRate: "53.2%" },
  { name: "Soraka", winRate: "54.0%" },
  { name: "Swain", winRate: "52.3%" },
  { name: "Sylas", winRate: "50.1%" },
  { name: "Syndra", winRate: "50.6%" },
  { name: "Tahm Kench", winRate: "52.7%" },
  { name: "Taliyah", winRate: "52.4%" },
  { name: "Talon", winRate: "50.4%" },
  { name: "Taric", winRate: "52.9%" },
  { name: "Teemo", winRate: "51.6%" },
  { name: "Thresh", winRate: "49.9%" },
  { name: "Tristana", winRate: "51.2%" },
  { name: "Trundle", winRate: "51.8%" },
  { name: "Tryndamere", winRate: "50.7%" },
  { name: "Twisted Fate", winRate: "49.8%" },
  { name: "Twitch", winRate: "52.3%" },
  { name: "Udyr", winRate: "51.6%" },
  { name: "Urgot", winRate: "52.5%" },
  { name: "Varus", winRate: "50.3%" },
  { name: "Vayne", winRate: "51.0%" },
  { name: "Veigar", winRate: "53.0%" },
  { name: "Vel'Koz", winRate: "51.6%" },
  { name: "Vex", winRate: "52.4%" },
  { name: "Vi", winRate: "51.5%" },
  { name: "Viego", winRate: "48.8%" },
  { name: "Viktor", winRate: "50.1%" },
  { name: "Vladimir", winRate: "50.2%" },
  { name: "Volibear", winRate: "50.4%" },
  { name: "Warwick", winRate: "52.3%" },
  { name: "Wukong", winRate: "51.9%" },
  { name: "Xayah", winRate: "51.0%" },
  { name: "Xerath", winRate: "52.7%" },
  { name: "Xin Zhao", winRate: "51.1%" },
  { name: "Yasuo", winRate: "48.9%" },
  { name: "Yone", winRate: "49.3%" },
  { name: "Yorick", winRate: "50.5%" },
  { name: "Yuumi", winRate: "49.0%" },
  { name: "Zac", winRate: "53.1%" },
  { name: "Zed", winRate: "49.8%" },
  { name: "Zeri", winRate: "48.5%" },
  { name: "Ziggs", winRate: "51.2%" },
  { name: "Zilean", winRate: "53.0%" },
  { name: "Zoe", winRate: "50.3%" },
  { name: "Zyra", winRate: "51.6%" }
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