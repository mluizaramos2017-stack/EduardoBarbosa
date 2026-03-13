/**
 * Portfólio de Eduardo Silveira - Jovem Aprendiz
 * Script de interatividade e funcionalidades
 * Versão: 2.0 (Responsivo)
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
    if (!btn) return;
    
    const originalHtml = btn.innerHTML;
    const btnMainText = btn.querySelector('.btn-main-text')?.innerHTML || btn.innerHTML;
    
    // Feedback visual de carregamento
    btn.innerHTML = '<span class="btn-main-text"><i class="fas fa-spinner fa-spin"></i> CARREGANDO...</span>';
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
 * @param {string} texto - Texto a ser copiado
 * @param {string} mensagem - Mensagem de confirmação
 */
function copiarTexto(texto, mensagem) {
    // Verifica se a API de clipboard está disponível
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto).then(() => {
            mostrarNotificacao(mensagem);
        }).catch(() => {
            fallbackCopiarTexto(texto, mensagem);
        });
    } else {
        fallbackCopiarTexto(texto, mensagem);
    }
}

/**
 * Fallback para cópia de texto em navegadores antigos
 */
function fallbackCopiarTexto(texto, mensagem) {
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        mostrarNotificacao(mensagem);
    } catch (err) {
        alert(`${mensagem}: ${texto}`);
    }
    
    document.body.removeChild(textarea);
}

/**
 * Mostra uma notificação temporária
 * @param {string} mensagem - Mensagem a ser exibida
 */
function mostrarNotificacao(mensagem) {
    // Remove notificações anteriores
    const notificacoesAntigas = document.querySelectorAll('.custom-notification');
    notificacoesAntigas.forEach(n => n.remove());
    
    const notificacao = document.createElement('div');
    notificacao.className = 'custom-notification';
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
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        animation: fadeInOut 2s ease forwards;
        max-width: 90%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `;
    
    document.body.appendChild(notificacao);
    
    // Ajusta para telas pequenas
    if (window.innerWidth <= 480) {
        notificacao.style.whiteSpace = 'normal';
        notificacao.style.padding = '0.8rem 1rem';
    }
    
    setTimeout(() => {
        if (notificacao.parentNode) {
            notificacao.remove();
        }
    }, 2000);
}

/**
 * Verifica e ajusta responsividade em tempo real
 */
function checkResponsividade() {
    // Ajustes dinâmicos se necessário
    const width = window.innerWidth;
    const btnSubliminar = document.querySelector('.btn-subliminar');
    
    if (btnSubliminar) {
        if (width <= 480) {
            btnSubliminar.style.padding = '0.8rem 1.5rem';
        } else {
            btnSubliminar.style.padding = '';
        }
    }
}

/**
 * Inicializa eventos quando a página carrega
 */
document.addEventListener('DOMContentLoaded', () => {
    // Anima os cards sequencialmente
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
    
    // Verifica responsividade inicial
    checkResponsividade();
    
    // Adiciona listeners para eventos de toque em dispositivos móveis
    if ('ontouchstart' in window) {
        document.querySelectorAll('.contact-item, .btn-subliminar').forEach(el => {
            el.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            el.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
});

// Listener para redimensionamento da janela
window.addEventListener('resize', () => {
    checkResponsividade();
});

// Adiciona animação de fadeInOut
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        10% { opacity: 1; transform: translateX(-50%) translateY(0); }
        90% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
    
    @media (max-width: 480px) {
        .custom-notification {
            font-size: 0.9rem !important;
            padding: 0.6rem 1rem !important;
        }
    }
`;
document.head.appendChild(style);
