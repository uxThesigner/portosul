// database/properties.js

export const properties = [
    {
        id: 1,
        title: "Mansão Contemporânea Jardins",
        description: "Projeto arquitetônico premiado com automação total.",
        type: "Casa",
        status: "Venda", // Venda, Aluguel, Lançamento
        price: 3500000,
        area: 450,
        bedrooms: 4,
        bathrooms: 5,
        garage: 4,
        location: "Bairro Jardins",
        image: "https://images.unsplash.com/photo-1600596542815-6ad4c727dd2d?q=80&w=2075&auto=format&fit=crop",
        featured: true // Se aparece na home ou não
    },
    {
        id: 2,
        title: "Penthouse Infinity View",
        description: "Vista 360º da cidade com piscina privativa.",
        type: "Apartamento",
        status: "Aluguel",
        price: 12500, // Valor mensal
        area: 280,
        bedrooms: 3,
        bathrooms: 4,
        garage: 3,
        location: "Centro",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        featured: true
    },
    {
        id: 3,
        title: "Residencial Gold Ville",
        description: "Lançamento exclusivo com lazer de resort.",
        type: "Lançamento",
        status: "Lançamento",
        price: 0, // Sob Consulta
        area: 120,
        bedrooms: 3,
        bathrooms: 2,
        garage: 2,
        location: "Zona Sul",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        featured: true
    },
    {
        id: 4,
        title: "Studio Smart Life",
        description: "Investimento perfeito para Airbnb.",
        type: "Apartamento",
        status: "Venda",
        price: 450000,
        area: 45,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        location: "Universitário",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
        featured: true
    }
];
