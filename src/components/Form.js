import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "../styles/Forms.css"; // Estilos de Cafeteria Cozy
import ImagemTitulo from "../assets/imagem-de-titulo.png"; // Imagem de título

const FormularioSimples = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Dados Validados (Simulação):", data);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        `Obrigado(a), ${data.nome}! Sua mensagem foi enviada (Simulado).`
      );
      reset();
    } catch (error) {
      toast.error("Ocorreu um erro no processamento do formulário.");
    }
  };

  return (
    <div className="form-page-container">
      <img
        src={ImagemTitulo}
        alt="Entre em Contato"
        className="form-title-image"
      />
     {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="formulario-simples">
        {/* CAMPO 1: Nome */} {" "}
        <div className="form-group">
          <label htmlFor="nome">Nome Completo</label> {" "}
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            {...register("nome", {
              required: "O nome é obrigatório.",
              minLength: { value: 3, message: "Mínimo de 3 caracteres." },
            })}
          />
         {" "}
          {errors.nome && (
            <span className="error-message">{errors.nome.message}</span>
          )}
         {" "}
        </div>
        {/* CAMPO 2: Email */} {" "}
        <div className="form-group">
          <label htmlFor="email">Email</label> {" "}
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            {...register("email", {
              required: "O email é obrigatório.",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Por favor, insira um email válido.",
              },
            })}
          />
         {" "}
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
         {" "}
        </div>
        {/* NOVO: CAMPO 3: Mensagem (TEXTAREA) */} {" "}
        <div className="form-group">
          <label htmlFor="mensagem">Sua Mensagem</label> {" "}
          <textarea
            id="mensagem"
            placeholder="Escreva sua mensagem aqui..."
            {...register("mensagem", {
              required: "A mensagem é obrigatória.",
              minLength: { value: 10, message: "Mínimo de 10 caracteres." },
            })}
          ></textarea>
         {" "}
          {errors.mensagem && (
            <span className="error-message">{errors.mensagem.message}</span>
          )}
         {" "}
        </div>
        {/* BOTÃO DE SUBMISSÃO */} {" "}
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Simulando Envio..." : "Enviar Mensagem"} 
         {" "}
        </button>
       {" "}
      </form>
     {" "}
    </div>
  );
};

export default FormularioSimples;
