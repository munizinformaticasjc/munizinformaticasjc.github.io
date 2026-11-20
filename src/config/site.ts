// Dados comerciais centralizados. Altere aqui e o site inteiro acompanha.
// Só inclua informações confirmadas pelo responsável da empresa.
export const site = {
  name: 'Muniz Informática',
  legalName: 'Muniz Informática e Tecnologia', // igual ao Perfil da Empresa no Google
  url: 'https://munizinformatica.com.br',
  email: 'muniztecnologia.sjc@gmail.com',
  whatsapp: '5512991069682',
  phoneDisplay: '(12) 99106-9682',
  city: 'São José dos Campos',
  state: 'SP',
  gaId: 'G-GGM5N78WS7',
  // Perfis oficiais, conferidos em 20/11/2026. Entram no Schema.org como sameAs.
  profiles: {
    google: 'https://www.google.com/maps?cid=3855939904909531632',
    instagram: 'https://www.instagram.com/munizinformaticasjc/',
    facebook: 'https://www.facebook.com/p/Muniz-Inform%C3%A1tica-61593355943595/',
  },
  // Modelo de atendimento confirmado em 31/10/2026.
  service: {
    remote: 'Suporte remoto para todo o Brasil, conforme o tipo de problema',
    dropoff: 'Quando é preciso mexer no equipamento, a entrega é combinada em São José dos Campos',
    business: 'Empresas em São José dos Campos também podem receber atendimento no local, com agendamento',
    schedule:
      'Atendimentos mediante agendamento, com possibilidade de horários entre 9h e 22h, todos os dias da semana, inclusive finais de semana e feriados, conforme disponibilidade e confirmação prévia.',
    scheduleShort:
      'Agendamentos das 9h às 22h, todos os dias, inclusive fins de semana e feriados, conforme disponibilidade.',
    payment: 'As condições de pagamento são informadas durante o orçamento.',
    remoteTool: 'ferramenta segura de acesso remoto',
  },
} as const;

export const DEFAULT_WA_MESSAGE =
  'Olá! Vim pelo site da Muniz Informática e gostaria de agendar um atendimento.\nMelhor dia e horário para mim:';

// Pedido de orçamento de manutenção/upgrade: o modelo do equipamento já ajuda a orçar.
export const UPGRADE_WA_MESSAGE =
  'Olá! Vim pelo site da Muniz Informática e gostaria de um orçamento de manutenção ou upgrade.\nModelo do computador/notebook:\nO que está acontecendo:';
