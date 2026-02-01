// src/modules/utils.js

// Formata números para Moeda (R$ 1.000,00)
export function formatCurrency(value) {
    if (!value || value === 0) return "Sob Consulta";
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Formata números simples (1000 -> 1.000)
export function formatNumber(value) {
    return new Intl.NumberFormat('pt-BR').format(value);
}
