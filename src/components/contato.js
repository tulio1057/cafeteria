import React from "react";
import Formulario from "./Form.js"; // Assumindo que Form.js exporta o componente
import "../styles/Forms.css";
import "../styles/contato.css"; // Importa o CSS da página de Contato

const ContactPage = () => {
  // Lógica de submissão (mantida do seu original)
  const handleSubmit = async (data) => {
    try {
      // Aqui você adicionará a lógica para enviar os dados para o banco
      console.log("Dados do formulário:", data);
      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem!");
    }
  };

  return (
    // Aplicando a classe 'contato-container'
    <div className="contato-container">
      <h1>Entre em Contato</h1>
      <p>Preencha o formulário abaixo para nos enviar uma mensagem.</p>

      {/* Passando a função de submissão como propriedade (onSubmit) para o Formulario */}
      <Formulario onSubmitForm={handleSubmit} />
    </div>
  );
};

export default ContactPage;
