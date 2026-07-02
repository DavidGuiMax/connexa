/* ============================================
   CONNEXA — DADOS (mock)
   Em produção isto viria de uma API. Aqui usamos
   dados estáticos para alimentar os componentes.
   ============================================ */

const CONNEXA_DATA = {
  vagas: [
    { id: 1, cargo: "Estágio em Marketing Digital", empresa: "Volt Comunicação", modalidade: "Presencial", local: "São Bernardo do Campo, SP", area: "marketing", nivel: "estagio", publicada: "Há 2 dias", cor: "#FF5A36" },
    { id: 2, cargo: "Auxiliar Administrativo", empresa: "Grupo Cedral", modalidade: "Híbrido", local: "São Bernardo do Campo, SP", area: "administrativo", nivel: "junior", publicada: "Há 3 dias", cor: "#2D6E8E" },
    { id: 3, cargo: "Desenvolvedor(a) Front-end", empresa: "Nimbus Tech", modalidade: "Remoto", local: "São Bernardo do Campo, SP", area: "tecnologia", nivel: "pleno", publicada: "Hoje", cor: "#1F7A5C" },
    { id: 4, cargo: "Estágio em Design Gráfico", empresa: "Estúdio Raiz", modalidade: "Presencial", local: "São Bernardo do Campo, SP", area: "design", nivel: "estagio", publicada: "Há 1 dia", cor: "#FFB627" },
    { id: 5, cargo: "Analista de Vendas Jr.", empresa: "Comercial Bandeirantes", modalidade: "Presencial", local: "São Bernardo do Campo, SP", area: "vendas", nivel: "junior", publicada: "Há 5 dias", cor: "#DD4220" },
    { id: 6, cargo: "Assistente Financeiro", empresa: "Conta Certa Contabilidade", modalidade: "Híbrido", local: "São Bernardo do Campo, SP", area: "financeiro", nivel: "junior", publicada: "Há 4 dias", cor: "#15233B" },
    { id: 7, cargo: "Recepcionista", empresa: "Hub Coworking ABC", modalidade: "Presencial", local: "São Bernardo do Campo, SP", area: "administrativo", nivel: "estagio", publicada: "Há 6 dias", cor: "#2D6E8E" },
    { id: 8, cargo: "Social Media", empresa: "Maré Criativa", modalidade: "Remoto", local: "São Bernardo do Campo, SP", area: "marketing", nivel: "junior", publicada: "Há 1 dia", cor: "#FF5A36" },
    { id: 9, cargo: "Técnico em Manutenção", empresa: "MetalForte Indústria", modalidade: "Presencial", local: "São Bernardo do Campo, SP", area: "tecnica", nivel: "pleno", publicada: "Há 2 dias", cor: "#1F7A5C" },
  ],

  cursos: [
    { id: 1, nome: "Excel do Zero ao Avançado", instituicao: "Connexa Hub", carga: "20h", area: "negocios", modalidade: "online", preco: "gratuito", cor: "#FFB627" },
    { id: 2, nome: "Introdução ao Front-end Web", instituicao: "Connexa Hub", carga: "40h", area: "tecnologia", modalidade: "online", preco: "gratuito", cor: "#2D6E8E" },
    { id: 3, nome: "Empreendedorismo na Prática", instituicao: "Connexa Hub", carga: "16h", area: "negocios", modalidade: "presencial", preco: "gratuito", cor: "#1F7A5C" },
    { id: 4, nome: "Design de Marcas para Pequenos Negócios", instituicao: "Connexa Hub", carga: "12h", area: "design", modalidade: "online", preco: "pago", cor: "#FF5A36" },
    { id: 5, nome: "Atendimento ao Cliente 4.0", instituicao: "Connexa Hub", carga: "24h", area: "negocios", modalidade: "hibrido", preco: "pago", cor: "#FFB627" },
    { id: 6, nome: "Marketing para Redes Sociais", instituicao: "Connexa Hub", carga: "18h", area: "marketing", modalidade: "online", preco: "gratuito", cor: "#FF5A36" },
    { id: 7, nome: "Lógica de Programação", instituicao: "Connexa Hub", carga: "30h", area: "tecnologia", modalidade: "online", preco: "gratuito", cor: "#2D6E8E" },
    { id: 8, nome: "Gestão Financeira Pessoal", instituicao: "Connexa Hub", carga: "10h", area: "negocios", modalidade: "online", preco: "gratuito", cor: "#1F7A5C" },
  ],

  eventos: [
    { id: 1, nome: "Feira de Empregos ABC 2026", data: "24 JUN", local: "Connexa Hub — São Bernardo do Campo", tipo: "feira", cor: "#2D6E8E" },
    { id: 2, nome: "Workshop: Primeiro Emprego sem Mistério", data: "29 JUN", local: "Connexa Hub — Auditório", tipo: "workshop", cor: "#FFB627" },
    { id: 3, nome: "Networking de Empreendedores Locais", data: "03 JUL", local: "Connexa Hub — Espaço Networking", tipo: "networking", cor: "#1F7A5C" },
    { id: 4, nome: "Feira de Negócios da Comunidade", data: "12 JUL", local: "Paço Municipal de São Bernardo", tipo: "feira", cor: "#2D6E8E" },
    { id: 5, nome: "Workshop de Currículo e LinkedIn", data: "18 JUL", local: "Connexa Hub — Sala de Treinamento", tipo: "workshop", cor: "#FFB627" },
    { id: 6, nome: "Roda de Conversa: Mulheres Empreendedoras", data: "25 JUL", local: "Connexa Hub — Coworking", tipo: "networking", cor: "#1F7A5C" },
  ],

  negocios: [
    { id: 1, nome: "Padaria Bom Grão", categoria: "Alimentação", desc: "Pães artesanais e cafés especiais feitos no bairro Baeta Neves.", cor: "#FF5A36" },
    { id: 2, nome: "Estúdio Raiz", categoria: "Design", desc: "Identidade visual e branding para pequenos negócios locais.", cor: "#FFB627" },
    { id: 3, nome: "Maré Criativa", categoria: "Marketing", desc: "Gestão de redes sociais para empreendedores da região.", cor: "#2D6E8E" },
    { id: 4, nome: "Oficina do Tio Joel", categoria: "Serviços", desc: "Manutenção de bicicletas e pequenos reparos urbanos.", cor: "#1F7A5C" },
    { id: 5, nome: "Conta Certa Contabilidade", categoria: "Serviços", desc: "Consultoria contábil para MEIs e pequenas empresas.", cor: "#15233B" },
    { id: 6, nome: "Costura & Cia", categoria: "Moda", desc: "Ajustes e confecção sob medida com atendimento de bairro.", cor: "#DD4220" },
  ]
};
