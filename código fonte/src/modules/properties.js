// src/modules/properties.js
import { properties } from '../../database/properties.js';
import { formatCurrency } from './utils.js';

export function loadFeaturedProperties() {
    // Procura o container na Home Page
    const container = document.getElementById('featured-container');
    
    // Se não estiver na home, para a execução
    if (!container) return;

    // Filtra apenas os marcados como "featured: true"
    const featuredList = properties.filter(prop => prop.featured);

    // Gera o HTML de cada card
    container.innerHTML = featuredList.map(prop => createCardHTML(prop)).join('');
}

function createCardHTML(prop) {
    // Define a cor da etiqueta (Badge) baseado no status
    let badgeColor = 'var(--color-accent)'; // Padrão Dourado (Venda)
    if (prop.status === 'Aluguel') badgeColor = 'var(--color-success)'; // Verde
    if (prop.status === 'Lançamento') badgeColor = '#000'; // Preto

    return `
    <article class="prop-card">
        <div class="prop-img" style="background-image: url('${prop.image}');">
            <span class="prop-badge" style="background: ${badgeColor}; color: #fff;">${prop.status}</span>
        </div>
        <div class="prop-info">
            <span class="text-muted" style="font-size: 0.85rem;">
                <i class="fas fa-map-marker-alt text-gold"></i> ${prop.location}
            </span>
            <h4>${prop.title}</h4>
            <div class="prop-price">${formatCurrency(prop.price)}</div>
            
            <div style="display: flex; gap: 15px; margin-top: 15px; color: #666; font-size: 0.9rem; border-top: 1px solid #eee; padding-top: 10px;">
                <span><i class="fas fa-bed text-gold"></i> ${prop.bedrooms}</span>
                <span><i class="fas fa-shower text-gold"></i> ${prop.bathrooms}</span>
                <span><i class="fas fa-ruler-combined text-gold"></i> ${prop.area}m²</span>
            </div>
            
            <a href="/pages/property-detail.html?id=${prop.id}" class="btn btn-outline" style="width: 100%; margin-top: 15px; text-align: center; display: block;">
                Ver Detalhes
            </a>
        </div>
    </article>
    `;
}
