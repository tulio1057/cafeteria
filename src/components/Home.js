import "../styles/home.css";
import Cafe from "./Cafe";
import Dicas from "./Dicas";

function Home() {
  return (
    <main>
      <div>
        <Cafe />
        <Dicas />
      </div>
    </main>
  );
}

export default Home;
