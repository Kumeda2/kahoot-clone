import Button from "../UI/Button/Button";
import banner from "../assets/images/banner2.jpg";
import user from "../assets/images/user.webp";
import Gallery from "../components/Gallery/Gallery";

export default function Main() {
  return (
    <div className="main">
      <div className="sidebar">
        <div className="container">
          <div className="user-info">
            <div className="avatar">
              <img src={user} alt="avatar" />
            </div>
            <div className="user-name">
              <p>Username</p>
            </div>
          </div>
          <div className="menu">
            <Button variant={"classic2"}>My games</Button>
            <Button variant={"classic2"}>Something</Button>
            <Button variant={"classic2"}>Something</Button>
          </div>
        </div>

        <div className="logout-btn">
          <Button variant={"classic2"} size={"70%"}>
            Log out
          </Button>
        </div>
      </div>
      <div className="wrapper">
        <div className="main-section">
          <img src={banner} alt="banner" />
        </div>
        <div className="games-section">
          <h2>Popular games</h2>
          <Gallery />
        </div>
      </div>
    </div>
  );
}
