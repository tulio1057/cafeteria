import { useForm } from 'react-hook-form';
import '../styles/Forms.css';

const Formulario = ({ onSubmitForm }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await onSubmitForm(data);
      reset();
    } catch (error) {
      alert('Erro ao enviar mensagem.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
      <div>
        <input
          type="text"
          placeholder="Nome completo"
          {...register('nome', { required: 'Nome é obrigatório' })}
          className="form-input"
        />
        {errors.nome && <span className="error-message">{errors.nome.message}</span>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register('email', { 
            required: 'Email é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido'
            }
          })}
          className="form-input"
        />
        {errors.email && <span className="error-message">{errors.email.message}</span>}
      </div>

      <div>
        <textarea
          placeholder="Sua mensagem"
          {...register('mensagem', { required: 'Mensagem é obrigatória' })}
          className="form-textarea"
        />
        {errors.mensagem && <span className="error-message">{errors.mensagem.message}</span>}
      </div>

      <button type="submit" className="submit-button">
        Enviar Mensagem
      </button>
    </form>
  );
};

export default Formulario;