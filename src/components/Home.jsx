import "./Home.css";

const Home = ({ leaderboard }) => {
  console.log(leaderboard.leaders);
  return (
    <div className="leaderboard">
      <div className="leaderboard-title">Leaderboard</div>
      <div className="leaderboard-list">
        {leaderboard.leaders.map((player) => (
          <div className="leaderboard-user">
            <div className="leaderboard-user-name">{player.name}</div>
            <div className="leaderboard-user-time">{player.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
