import "../styles/home.css";
import Cafe from "./Cafe";
import Dicas from "./Dicas";

function Home() {
  // Array para gerar 10 patinhas (você pode ajustar o número)
  const patinhas = Array.from({ length: 10 });

  return (
    <main className="home-container">
      <div className="patinhas-fundo">
        {patinhas.map((_, index) => (
          <div
            key={index}
            className="patinha-animada"
            style={{
              // Posição vertical aleatória (entre 20% e 90% da tela)
              top: `${20 + Math.random() * 70}vh`,
              // Duração da animação (entre 10s e 20s)
              animationDuration: `${10 + Math.random() * 10}s`,
              // Atraso para que não comecem todas juntas (usa valores negativos)
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
