// src/app.js

import { appConfig } from '../config/config.js';
import { applyTheme } from '../config/theme.js';
// Importaremos o renderer no próximo passo.
// Por enquanto, deixei comentado para não dar erro antes de criar o ficheiro.
// import { loadLayout } from './modules/renderer.js'; 

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    console.log(`🚀 A iniciar ${appConfig.client.name} System - v${appConfig.system.version}`);

    // 1. Aplica a Identidade Visual (Injeta as variáveis CSS do Dourado/Preto)
    applyTheme();

    // 2. Define o Título da Página dinamicamente
    // Ex: "Porto Sul Imóveis | O ERP Definitivo..."
    document.title = `${appConfig.client.name} | ${appConfig.client.slogan}`;

    // 3. Carrega Header e Footer (Layout Global)
    // A função loadLayout vai ler os HTMLs da pasta components e injetar na página
    // loadLayout(); 

    // 4. Roteamento Simples (Router)
    // Verifica a URL para saber qual lógica de negócio carregar
    routeController();
}

function routeController() {
    const path = window.location.pathname;

    // Lógica para carregar módulos específicos sob demanda
    if (path.includes('dashboard.html')) {
        console.log("📊 Modo Admin: A carregar CRM e Financeiro...");
        // Aqui importaremos dinamicamente: import('./modules/crm.js')...
        
        // Exemplo de verificação de segurança (fictício para o MVP)
        checkAuth();

    } else if (path.includes('property-detail.html')) {
        console.log("🏠 Modo Detalhes: A carregar galeria e simulador...");
        
    } else if (path.includes('login.html')) {
        console.log("🔐 Modo Acesso: A carregar formulário de login...");

    } else {
        // Se for a Home (index.html) ou raiz
        console.log("🔍 Modo Vitrine: A carregar busca e destaques...");
    }
}

function checkAuth() {
    const user = localStorage.getItem('user');
    if (!user) {
        console.warn("⚠️ Utilizador não logado. A redirecionar para Login...");
        // window.location.href = '/pages/login.html'; // Descomentar quando a página existir
    }
}
