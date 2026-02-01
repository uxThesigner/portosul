// config/theme.js

export const theme = {
    colors: {
        primary: "#111111",      // Preto Profundo (Backgrounds nobres)
        secondary: "#2c2c2c",    // Cinza Chumbo (Cards, Sidebar)
        accent: "#D4AF37",       // DOURADO CLÁSSICO (Botões, Destaques)
        accentHover: "#B5952F",  // Dourado mais escuro (Hover)
        
        background: "#F5F5F7",   // Branco Gelo (Fundo do site para leitura fácil)
        surface: "#FFFFFF",      // Branco Puro (Cards em fundo claro)
        
        textPrimary: "#111111",  // Texto padrão (Escuro)
        textSecondary: "#666666",// Texto de apoio (Cinza)
        textInverse: "#FFFFFF",  // Texto sobre fundo preto
        
        success: "#28a745",      // Verde (Venda Concluída)
        warning: "#ffc107",      // Amarelo (Pendente)
        danger: "#dc3545",       // Vermelho (Inadimplente)
    },
    fonts: {
        main: "'Inter', sans-serif",         // Texto corrido (Moderno e Limpo)
        display: "'Playfair Display', serif" // Títulos (Sofisticação/Premium)
    },
    borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px"
    }
};

// Função que aplica o tema na raiz do CSS (root)
export function applyTheme() {
    const root = document.documentElement;
    
    // Mapeia as cores para variáveis CSS (--color-primary, etc)
    Object.entries(theme.colors).forEach(([key, value]) => {
        // Converte camelCase para kebab-case (ex: textPrimary -> --color-text-primary)
        const cssVarName = `--color-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
        root.style.setProperty(cssVarName, value);
    });

    // Mapeia as fontes
    root.style.setProperty('--font-main', theme.fonts.main);
    root.style.setProperty('--font-display', theme.fonts.display);
}
