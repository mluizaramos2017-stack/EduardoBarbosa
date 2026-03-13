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
    const btn = document.getElementById('contratarBtn');
    const originalText = btn.innerHTML;
    
    // Feedback visual de carregamento
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> CARREGANDO...';
    btn.disabled = true;
    
    setTimeout(() => {
        // Escolhe mensagem aleatória
        const mensagem = contatoInfo.mensagens[Math.floor(Math.random() * contatoInfo.mensagens.length)];
        
        // Cria alert personalizado
        const mensagemCompleta = `📞 ${contatoInfo.telefone}\n📧 ${contatoInfo.email}\n\n${mensagem}`;
        
        // Tenta usar alert nativo
        alert(mensagemCompleta);
        
        // Restaura o botão
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 500);
}

/**
 * Função para copiar telefone para área de transferência
 */
function copiarTelefone() {
    navigator.clipboard.writeText(contatoInfo.telefone).then(() => {
        mostrarNotificacao('Telefone copiado! 📞');
    });
}

/**
 * Função para copiar email para área de transferência
 */
function copiarEmail() {
    navigator.clipboard.writeText(contatoInfo.email).then(() => {
        mostrarNotificacao('Email copiado! 📧');
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
        padding: 1rem 2rem;
        border-radius: 50px;
        font-size: 1.2rem;
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
    // Botão principal
    const btnContratar = document.getElementById('contratarBtn');
    if (btnContratar) {
        btnContratar.addEventListener('click', mostrarContato);
    }
    
    // Adiciona evento de clique nos contatos
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const texto = item.textContent.trim();
            if (texto.includes('(71)')) {
                copiarTelefone();
            } else if (texto.includes('@')) {
                copiarEmail();
            }
        });
        item.style.cursor = 'pointer';
        item.title = 'Clique para copiar';
    });
    
    // Animação de entrada
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

// Estilo para fadeOut
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
