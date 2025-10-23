import React from 'react';
import '../styles/home.css'; 

// Dados de exemplo dos 4 blocos (use emojis ou importe ícones se preferir)
const comoTrabalhamosData = [
    { 
        icone: "☕", 
        titulo: "Café de Qualidade", 
        descricao: "Grãos artesanais e um menu de lanches feitos na hora, para o seu máximo conforto." 
    },
    { 
        icone: "🐾", 
        titulo: "Nossos Residentes", 
        descricao: "Gatos resgatados e socializados em um ambiente seguro, prontos para receber seu carinho." 
    },
    { 
        icone: "❤️", 
        titulo: "Regras Simples", 
        descricao: "Priorizamos o bem-estar felino. Mantenha a voz baixa e deixe os gatos dormirem em paz." 
    },
    { 
        icone: "🏠", 
        titulo: "Adote um Amigo", 
        descricao: "Sua visita apoia a causa! Conheça os gatos disponíveis para adoção e mude uma vida." 
    },
];

// Componente para um bloco de informação
const BlocoInfo = ({ icone, titulo, descricao }) => (
    <div className="bloco-info">
        <span className="info-icone">{icone}</span>
        <h3 className="info-titulo">{titulo}</h3>
        <p className="info-descricao">{descricao}</p>
    </div>
);

function Home() {
    return (
        <main className="home-container">
            
            {/* Título Principal */}
            <header className="home-header">
                <h1>Entenda como trabalhamos!</h1>
            </header>

            {/* Seção de Conteúdo - "Como Trabalhamos" */}
            <section className="como-trabalhamos">
                <div className="info-grid">
                    {comoTrabalhamosData.map((item, index) => (
                        <BlocoInfo 
                            key={index}
                            icone={item.icone}
                            titulo={item.titulo}
                            descricao={item.descricao}
                        />
                    ))}
                </div>
            </section>
            
        </main>
    );
}

export default Home;