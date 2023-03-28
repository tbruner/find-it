import "./Home.css";

const Home = ({ leaderboard }) => {
  console.log(leaderboard.leaders);
  return (
    <div className="leaderboard">
      <div className="leaderboard-title">Leaderboard</div>
      <table className="leaderboard-table">
        <tr>
          <th>Name</th>
          <th>Time</th>
        </tr>
        {leaderboard.leaders.map((player) => (
          <tr className="leaderboard-user">
            <td className="leaderboard-user-name">{player.name}</td>
            <td className="leaderboard-user-time">{player.time}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;
