import React from "react";
import Formulario from "./Form.js";
import "../styles/Forms.css";
import "../styles/contato.css";
import axios from "axios";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrgwlllo";

const Contato = () => {
  const handleSubmit = async (data) => {
    try {
      const response = await axios.post(FORMSPREE_ENDPOINT, data);

      if (response.status === 200) {
        console.log("Dados do formulário enviados:", data);
        alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
        return true;
      } else {
        throw new Error("Falha no envio da mensagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar mensagem! Por favor, tente novamente mais tarde.");
      return false;
    }
  };

  return (
    <div className="contato-container">
      <h1>Entre em Contato</h1>
      <p>
        Preencha o formulário abaixo para nos enviar uma mensagem.
        <br />
        Responderemos o mais breve possível!
      </p>

      <Formulario onSubmitForm={handleSubmit} />
    </div>
  );
};

export default Contato;
