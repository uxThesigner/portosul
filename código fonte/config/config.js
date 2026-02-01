// config/config.js
export const appConfig = {
    client: {
        name: "Porto Sul Imóveis",
        slogan: "O ERP Definitivo para Imobiliárias e Construtoras",
        cnpj: "00.000.000/0001-00", // Preencher depois
        address: {
            street: "Av. Rio Madeira, 1234",
            neighborhood: "Bairro Nobre",
            city: "Porto Velho",
            state: "RO",
            zip: "76800-000"
        },
        contact: {
            phone: "(69) 3333-4444",
            whatsapp: "5569999999999",
            email: "contato@portosul.com.br",
            website: "www.portosul.com.br"
        },
        social: {
            instagram: "@portosulimoveis",
            facebook: "/portosul",
            linkedin: "/company/portosul"
        }
    },
    system: {
        version: "1.0.0-MVP",
        currency: "BRL",
        locale: "pt-BR"
    }
};
