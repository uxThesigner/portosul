// src/app.js

import { appConfig } from '../config/config.js';
import { applyTheme } from '../config/theme.js';
import { loadLayout } from './modules/renderer.js';
// 👇 NOVA IMPORTAÇÃO: Traz a lógica que cria os cards de imóveis
import { loadFeaturedProperties } from './modules/properties.js'; 

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    console.log(`🚀 A iniciar ${appConfig.client.name} System - v${appConfig.system.version}`);

    // 1. Aplica a Identidade Visual
    applyTheme();

    // 2. Define o Título da Página dinamicamente
    document.title = `${appConfig.client.name} | ${appConfig.client.slogan}`;

    // 3. Carrega Header e Footer (Layout Global)
    loadLayout(); 

    // 4. Roteamento Simples (Router)
    routeController();
}

function routeController() {
    const path = window.location.pathname;

    if (path.includes('dashboard.html')) {
        console.log("📊 Modo Admin: A carregar CRM e Financeiro...");
        checkAuth();

    } else if (path.includes('property-detail.html')) {
        console.log("🏠 Modo Detalhes: A carregar galeria e simulador...");

    } else if (path.includes('login.html')) {
        console.log("🔐 Modo Acesso: A carregar formulário de login...");

    } else {
        // Se for a Home (index.html) ou raiz
        console.log("🔍 Modo Vitrine: A carregar busca e destaques...");
        
        // 👇 AQUI A MÁGICA: Carrega os imóveis do banco de dados na tela
        loadFeaturedProperties(); 
    }
}

function checkAuth() {
    const user = localStorage.getItem('user');
    if (!user) {
        console.warn("⚠️ Utilizador não logado. A redirecionar para Login...");
        // window.location.href = '/pages/login.html'; 
    }
}
