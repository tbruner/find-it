import "./Home.css";

const Home = ({ leaderboard }) => {
  let leaders = leaderboard.leaders;

  leaders.sort((a, b) => {
    if (a.time === b.time) return 0;
    else return a.time < b.time ? -1 : 1;
  });

  function generateKey(pre) {
    return `${pre}-${new Date().getTime()}`;
  }

  return (
    <div className="leaderboard">
      <div className="leaderboard-title">Leaderboard</div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((player) => (
            <tr
              key={player.key ? player.key : generateKey(player.name)}
              className="leaderboard-user"
            >
              <td className="leaderboard-user-name">{player.name}</td>
              <td className="leaderboard-user-time">{player.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
