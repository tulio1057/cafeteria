import Formulario from './Form';
import '../styles/Forms.css';

function ContactPage() {
  const handleSubmit = async (data) => {
    try {
      // Aqui você irá adicionar a lógica para enviar os dados para o banco
      console.log(data);
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      throw new Error('Erro ao enviar mensagem');
    }
  };

  return (
    <div className="form-container">
      <h1>Entre em Contato</h1>
      <p>Preencha o formulário abaixo para nos enviar uma mensagem.</p>
      <Formulario onSubmitForm={handleSubmit} />
    </div>
  );
}

export default ContactPage;
