/**
 * Portfólio de Eduardo Silveira - Jovem Aprendiz
 * Script de interatividade e funcionalidades
 */

// Dados de contato e mensagens
const contatoInfo = {
    telefone: '(71) 98481-6493',
    email: 'Eduardo.silveira899@gmail.com',
    mensagens: [
        "🎯 RECRUTADOR: você acaba de encontrar um jovem comprometido!",
        "📞 Telefone (71) 98481-6493 - envie uma mensagem agora!",
        "✅ Eduardo está pronto para contribuir com sua equipe!",
        "🚀 Habilidades em informática, marketing e atendimento!",
        "🌟 Responsabilidade, pontualidade e vontade de aprender!",
        "💼 Perfil ideal para programa Jovem Aprendiz",
        "⭐ 18 anos com muita disposição para crescer na empresa",
        "📧 Disponível para entrevista - entre em contato agora!"
    ]
};

/**
 * Mostra as informações de contato
 */
function mostrarContato() {
    const btn = document.querySelector('.btn-subliminar');
    const originalHtml = btn.innerHTML;
    
    // Feedback visual de carregamento
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> CARREGANDO...';
    btn.disabled = true;
    
    setTimeout(() => {
        // Escolhe mensagem aleatória
        const mensagem = contatoInfo.mensagens[Math.floor(Math.random() * contatoInfo.mensagens.length)];
        
        // Cria alert personalizado
        const mensagemCompleta = `📞 ${contatoInfo.telefone}\n📧 ${contatoInfo.email}\n\n${mensagem}`;
        
        alert(mensagemCompleta);
        
        // Restaura o botão
        btn.innerHTML = originalHtml;
        btn.disabled = false;
    }, 500);
}

/**
 * Função para copiar texto para área de transferência
 */
function copiarTexto(texto, mensagem) {
    navigator.clipboard.writeText(texto).then(() => {
        mostrarNotificacao(mensagem);
    }).catch(() => {
        // Fallback para navegadores antigos
        alert(`${mensagem}: ${texto}`);
    });
}

/**
 * Mostra uma notificação temporária
 */
function mostrarNotificacao(mensagem) {
    const notificacao = document.createElement('div');
    notificacao.textContent = mensagem;
    notificacao.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #1f4a7a;
        color: white;
        padding: 0.8rem 2rem;
        border-radius: 50px;
        font-size: 1rem;
        z-index: 9999;
        border: 2px solid #f5b342;
        animation: fadeOut 2s ease forwards;
    `;
    
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        notificacao.remove();
    }, 2000);
}

/**
 * Inicializa eventos quando a página carrega
 */
document.addEventListener('DOMContentLoaded', () => {
    // Animação de entrada nos cards
    const cards = document.querySelectorAll('.info-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// Estilo para fadeOut (adicionado dinamicamente)
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        10% { opacity: 1; transform: translateX(-50%) translateY(0); }
        90% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
`;
document.head.appendChild(style);
