// src/modules/renderer.js
import { appConfig } from '../../config/config.js';

/**
 * Função principal que carrega o layout global
 */
export async function loadLayout() {
    // 1. Injeta o Header
    const headerElement = document.getElementById('app-header');
    if (headerElement) {
        await loadComponent(headerElement, '/src/components/layout/header.html');
    }

    // 2. Injeta o Footer
    const footerElement = document.getElementById('app-footer');
    if (footerElement) {
        await loadComponent(footerElement, '/src/components/layout/footer.html');
    }

    // 3. Hidrata os dados (Substitui placeholders pelos dados do config.js)
    populateData();
    
    // 4. Ativa funcionalidades do menu (Mobile toggle, etc)
    initUIEvents();
}

/**
 * Busca o arquivo HTML e injeta na div alvo
 */
async function loadComponent(targetElement, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        targetElement.innerHTML = html;
    } catch (error) {
        console.error(`❌ Erro ao carregar o componente ${filePath}:`, error);
        targetElement.innerHTML = `<div class="error">Erro ao carregar layout.</div>`;
    }
}

/**
 * A Mágica do Data-Bind:
 * Procura qualquer elemento HTML que tenha o atributo 'data-bind="caminho.do.dado"'
 * e substitui o conteúdo pelo valor que está no config.js.
 * * Exemplo no HTML: <span data-bind="contact.phone"></span>
 * Resultado na Tela: (69) 3333-4444
 */
function populateData() {
    const elements = document.querySelectorAll('[data-bind]');
    
    elements.forEach(element => {
        const path = element.dataset.bind; // Ex: "contact.phone"
        const value = getNestedValue(appConfig, path);
        
        if (value) {
            // Se for um link (href), atualiza o atributo
            if (element.tagName === 'A' && path.includes('email')) {
                element.href = `mailto:${value}`;
            } else if (element.tagName === 'A' && path.includes('phone')) {
                element.href = `tel:${value.replace(/\D/g,'')}`;
            } else if (element.tagName === 'IMG') {
                 element.src = value;
            } else {
                // Se for texto normal
                element.innerText = value;
            }
        }
    });
}

// Auxiliar para ler objetos aninhados (ex: pega config.client.contact.phone)
function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function initUIEvents() {
    // Aqui colocaremos a lógica do Menu Hamburguer Mobile futuramente
    console.log("🎨 UI Events inicializados");
}
