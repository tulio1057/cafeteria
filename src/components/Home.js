import "../styles/home.css";
import Cafe from "./Cafe";
import Dicas from "./Dicas";
import patinhaImg from "../assets/patinha.png";

function Home() {
  const patinhas = Array.from({ length: 10 });

  return (
    <main className="home-container">
      <div className="patinhas-fundo">
        {patinhas.map((_, index) => (
         <div
            key={index}
            className="patinha-animada"
            style={{
              backgroundImage: `url(${patinhaImg})`,
              top: `${20 + Math.random() * 70}vh`, 
              animationDuration: `${10 + Math.random() * 10}s`, 
              animationDelay: `-${Math.random() * 15}s`, 
            }}
          />
        ))}
      </div>

      <div className="home-content">
        <Cafe />
        <Dicas />
      </div>
    </main>
  );
}

export default Home;
