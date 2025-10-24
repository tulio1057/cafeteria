import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Forms.css";

// Recebe 'onSubmitForm' como uma prop
const Formulario = ({ onSubmitForm }) => {
  // Inicialização do useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Função que será chamada após a validação do formulário
  const onSubmit = async (data) => {
    // Chama a função de submissão (handleSubmit) que veio do componente pai (contato.js)
    // E espera um resultado booleano (true para sucesso, false para falha)
    const success = await onSubmitForm(data);

    if (success) {
      reset(); // Limpa o formulário APENAS se o envio for bem-sucedido
    }
  };

  return (
    // Aplicando a classe 'form-wrapper'
    <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
      {/* 1. Campo Nome Completo */}
      <div className="form-group">
        <input
          type="text"
          placeholder="Nome completo"
          className="form-input"
          {...register("nome", {
            required: "Nome é obrigatório",
          })}
        />
        {errors.nome && (
          <span className="error-message">{errors.nome.message}</span>
        )}
      </div>

      {/* 2. Campo Email */}
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^\S+@\S+\.\S+$/, // Regex para validação de email
              message: "Email inválido",
            },
          })}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>

      {/* 3. Campo Mensagem */}
      <div className="form-group">
        <textarea
          placeholder="Sua mensagem"
          className="form-textarea"
          {...register("mensagem", {
            required: "Mensagem é obrigatória",
          })}
        />
        {errors.mensagem && (
          <span className="error-message">{errors.mensagem.message}</span>
        )}
      </div>

      {/* Botão de Submissão */}
      <button type="submit" className="submit-button">
        Enviar Mensagem
      </button>
    </form>
  );
};

export default Formulario;
