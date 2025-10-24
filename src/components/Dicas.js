import DicasTitulo from "../assets/dicas-gerais.png";
import "../styles/DicasGerais.css";

function DicasGerais() {
  return (
    <section className="dicas-section">
      <img src={DicasTitulo} alt="Dicas Gerais" className="dicas-title" />

      <div className="dicas-container">
        <div className="dica-box">
          <div className="dica-title">Acesso à Cafeteria e ao Gatil</div>
          <p>
            A entrada em nosso café é livre e você paga apenas o que consumir do
            nosso cardápio. A única taxa cobrada é para o acesso à área de
            interação com os gatinhos (o gatil).
          </p>
        </div>

        <div className="dica-box">
          <div className="dica-title">Reservas de Horário</div>
          <p>
            Quer garantir seu momento com os gatinhos? As reservas de horário
            são confirmadas mediante pagamento antecipado. Recomendamos a
            reserva para evitar filas!
          </p>
        </div>

        <div className="dica-box">
          <div className="dica-title">Nossa Política sobre Resgates</div>
          <p>
            Admiramos o amor que todos têm pelos animais, mas é importante
            esclarecer que não somos uma ONG e não realizamos resgates. Nosso
            foco é cuidar dos gatinhos residentes e encontrar lares para os que
            estão para adoção.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DicasGerais;
