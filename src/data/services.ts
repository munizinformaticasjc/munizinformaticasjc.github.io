// Conteúdo das páginas de serviço.
// As URLs (slug) das páginas antigas foram preservadas para não perder o histórico no Google.
//
// modality:
//   'remoto'  → resolvido a distância, para todo o Brasil
//   'misto'   → começa pelo remoto quando possível; intervenção física só em SJC
//   'sjc'     → exige o equipamento em mãos, entrega combinada em São José dos Campos
//   'empresa' → empresas: remoto em todo o Brasil e no local apenas em SJC

export type Modality = 'remoto' | 'misto' | 'sjc' | 'empresa';
export type Group = 'resolver' | 'hardware' | 'local' | 'empresas';

export interface ServicePage {
  slug: string;
  group: Group;
  modality: Modality;
  icon: string;
  navLabel: string;
  cardText: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  includes: string[];
  signsTitle: string;
  signs: string[];
  approachTitle: string;
  approach: string[];
  faqs: [string, string][];
  related: string[];
  wa: string;
}

export const services: ServicePage[] = [
  // ───────────────────────── RESOLVER PROBLEMAS (remoto em todo o Brasil) ─────────────────────────
  {
    slug: 'suporte-remoto',
    group: 'resolver',
    modality: 'remoto',
    icon: 'MonitorSmartphone',
    navLabel: 'Suporte remoto',
    cardText: 'Ajuda técnica pela internet, de qualquer cidade do Brasil, em horário agendado.',
    seoTitle: 'Suporte Técnico Remoto para Computador | Todo o Brasil',
    description:
      'Suporte técnico remoto para computadores e notebooks com Windows, em qualquer cidade do Brasil. Você acompanha tudo na tela e autoriza cada acesso.',
    eyebrow: 'Atendimento a distância · Todo o Brasil',
    h1: 'Suporte técnico remoto para seu computador, de onde você estiver',
    intro:
      'Boa parte dos problemas de computador está no sistema, nos programas ou nas configurações, e pode ser resolvida pela internet. Você marca um horário, autoriza a conexão e acompanha tudo pela sua própria tela, sem precisar levar o equipamento a lugar nenhum.',
    includes: [
      'Correção de erros e lentidão do Windows',
      'Instalação e configuração de programas',
      'Remoção de vírus, propagandas e programas indesejados',
      'Configuração de e-mail, impressora e backup',
    ],
    signsTitle: 'O que normalmente dá para resolver a distância',
    signs: [
      'Windows lento, travando ou mostrando mensagens de erro.',
      'Propagandas, páginas estranhas ou programas que se instalaram sozinhos.',
      'Programa que não instala, não abre ou parou de funcionar depois de uma atualização.',
      'Impressora, e-mail, navegador ou conta da Microsoft que não configura.',
      'Dúvidas para organizar arquivos e configurar uma rotina de backup.',
      'Ajustes de desempenho e limpeza do que inicia junto com o Windows.',
    ],
    approachTitle: 'Quando o remoto não é suficiente',
    approach: [
      'Se a conversa inicial ou o próprio atendimento remoto mostrar que o problema é físico, como aquecimento, peça com defeito ou disco falhando, você recebe essa explicação com clareza antes de qualquer custo extra.',
      'Nesses casos, a intervenção física é feita com o equipamento entregue em um local combinado em São José dos Campos. Para quem está em outra cidade, a orientação é indicar o que precisa ser verificado por um técnico próximo.',
    ],
    faqs: [
      ['O suporte remoto é seguro?', 'A conexão só acontece com a sua autorização, em um horário combinado. Você vê tudo o que é feito na tela e pode encerrar o acesso a qualquer momento. Depois do atendimento, o acesso não fica liberado.'],
      ['Preciso entender de computador para receber suporte remoto?', 'Não. No horário marcado, você recebe orientação passo a passo para abrir a ferramenta segura de acesso remoto. Basta o computador ligar e ter acesso à internet.'],
      ['Atende em qualquer cidade?', 'Sim. O suporte remoto atende pessoas e empresas de qualquer cidade do Brasil, mediante agendamento, com possibilidade de horários entre 9h e 22h, todos os dias, inclusive fins de semana e feriados, conforme disponibilidade.'],
      ['E se o computador não liga ou não acessa a internet?', 'Nesse caso o atendimento remoto não é possível. A avaliação física é feita com o equipamento entregue em um local combinado em São José dos Campos.'],
      ['Como funciona o orçamento?', 'Você descreve o problema pelo WhatsApp e recebe a orientação sobre o atendimento e o valor antes de começar.'],
    ],
    related: ['suporte-tecnico-windows', 'remocao-de-virus', 'computador-lento'],
    wa: 'Olá! Gostaria de agendar um suporte remoto para o meu computador.',
  },
  {
    slug: 'suporte-tecnico-windows',
    group: 'resolver',
    modality: 'remoto',
    icon: 'AppWindow',
    navLabel: 'Suporte técnico Windows',
    cardText: 'Erros, atualizações travadas, configurações e programas que não funcionam.',
    seoTitle: 'Suporte Técnico Windows 10 e 11 | Atendimento Remoto',
    description:
      'Suporte técnico para Windows 10 e 11: erros, atualizações travadas, tela azul, programas e configurações. Atendimento remoto com hora marcada para todo o Brasil.',
    eyebrow: 'Windows 10 e Windows 11',
    h1: 'Suporte técnico para Windows 10 e 11',
    intro:
      'Atualização que não termina, mensagem de erro que volta toda hora, configuração que sumiu depois de uma atualização. Esses problemas costumam estar no próprio Windows e, na maioria das vezes, podem ser corrigidos remotamente, sem formatar o computador.',
    includes: [
      'Correção de erros e falhas de atualização',
      'Reparo de arquivos do sistema',
      'Configuração de contas, impressoras e rede',
      'Ajustes de inicialização e desempenho',
    ],
    signsTitle: 'Problemas comuns no Windows',
    signs: [
      'Atualização do Windows que falha, trava em uma porcentagem ou desfaz sozinha.',
      'Mensagens de erro ao abrir programas ou ao iniciar o computador.',
      'Menu Iniciar, barra de tarefas ou pesquisa que pararam de responder.',
      'Impressora, Wi-Fi ou som que deixaram de funcionar depois de uma atualização.',
      'Conta da Microsoft, senha ou PIN com problemas para entrar.',
      'Dúvidas sobre atualizar do Windows 10 para o Windows 11.',
    ],
    approachTitle: 'Corrigir antes de formatar',
    approach: [
      'Formatar resolve muita coisa, mas também apaga programas e configurações que levaram tempo para ficar do seu jeito. Por isso, a primeira tentativa é sempre identificar e corrigir a causa do erro.',
      'Quando o reparo não compensa ou o sistema está muito comprometido, a reinstalação é discutida com você, incluindo o que precisa ser preservado antes.',
    ],
    faqs: [
      ['Tela azul tem conserto pelo remoto?', 'Depende da causa. Telas azuis ligadas a drivers, atualizações ou programas costumam ser tratadas remotamente. Quando a origem é uma peça com defeito, a avaliação física é necessária.'],
      ['Vale a pena atualizar para o Windows 11?', 'Depende do computador e do uso. A compatibilidade do equipamento e os programas que você usa são verificados antes de qualquer atualização.'],
      ['O serviço inclui licença do Windows?', 'Não. O atendimento utiliza a licença válida que já existe no equipamento ou uma licença fornecida por você.'],
      ['Preciso estar em São José dos Campos?', 'Não. O suporte para Windows é feito remotamente, para qualquer cidade do Brasil, com agendamento.'],
    ],
    related: ['suporte-remoto', 'instalacao-do-windows', 'computador-travando'],
    wa: 'Olá! Estou com um problema no Windows e gostaria de agendar um suporte remoto.',
  },
  {
    slug: 'computador-lento',
    group: 'resolver',
    modality: 'misto',
    icon: 'Gauge',
    navLabel: 'Computador lento',
    cardText: 'Diagnóstico da lentidão e otimização do sistema, sem formatar à toa.',
    seoTitle: 'Computador ou Notebook Lento? Diagnóstico e Otimização',
    description:
      'Computador ou notebook lento? Diagnóstico da causa e otimização do Windows por suporte remoto em todo o Brasil. Upgrade de SSD e memória em São José dos Campos.',
    eyebrow: 'Diagnóstico de lentidão e otimização',
    h1: 'Computador ou notebook lento: descubra a causa antes de gastar',
    intro:
      'Lentidão pode vir de excesso de programas iniciando com o Windows, pouco espaço livre, vírus, disco desgastado, pouca memória ou aquecimento. Cada causa tem uma solução diferente, e nem todas exigem formatar ou trocar peças.',
    includes: [
      'Análise do que está consumindo o computador',
      'Otimização da inicialização e do sistema',
      'Verificação da saúde do disco',
      'Orientação sobre upgrade quando compensa',
    ],
    signsTitle: 'Sinais de que vale uma avaliação',
    signs: [
      'Demora vários minutos para ligar ou para abrir o navegador.',
      'Trava em tarefas simples, como videochamadas, planilhas ou sites.',
      'Uso de disco em 100% mesmo com poucos programas abertos.',
      'Pouco espaço livre e muitos programas que você nem reconhece.',
      'Ficou lento de repente, depois de uma atualização ou instalação.',
      'Ventoinha acelerada e aquecimento durante o uso.',
    ],
    approachTitle: 'O caminho mais curto até um computador rápido',
    approach: [
      'O diagnóstico e a otimização do sistema podem ser feitos por suporte remoto, para qualquer cidade do Brasil. Com isso, já fica claro se a lentidão é de software ou de hardware.',
      'Se a causa for o disco ou a memória, você recebe a recomendação de upgrade com o motivo explicado. A instalação de SSD ou memória é feita com o equipamento entregue em São José dos Campos.',
    ],
    faqs: [
      ['Formatar resolve a lentidão?', 'Nem sempre. Se a causa for um HD desgastado, pouca memória ou aquecimento, o computador volta a ficar lento mesmo depois de formatado. Por isso o diagnóstico vem antes.'],
      ['Dá para resolver computador lento pelo remoto?', 'Quando a causa está no sistema, sim: programas na inicialização, vírus, atualizações e configurações são tratados a distância. Problemas de hardware precisam de avaliação física.'],
      ['Trocar o HD por SSD deixa o computador mais rápido?', 'Na maioria dos computadores com HD, a diferença é grande na inicialização e na abertura de programas. A compatibilidade do equipamento é verificada antes.'],
      ['Vale a pena investir em um computador antigo?', 'Depende do equipamento e do seu uso. Quando o investimento não compensa, você recebe essa orientação.'],
    ],
    related: ['upgrade-ssd', 'computador-travando', 'remocao-de-virus'],
    wa: 'Olá! Meu computador está muito lento e gostaria de uma avaliação.',
  },
  {
    slug: 'computador-travando',
    group: 'resolver',
    modality: 'misto',
    icon: 'RotateCcw',
    navLabel: 'Computador travando',
    cardText: 'Travamentos, reinícios sozinhos e telas de erro investigados com método.',
    seoTitle: 'Computador Travando ou Reiniciando Sozinho | Diagnóstico',
    description:
      'Computador travando, reiniciando sozinho ou com tela azul? Diagnóstico remoto para todo o Brasil e avaliação física em São José dos Campos.',
    eyebrow: 'Travamentos e reinícios',
    h1: 'Computador travando ou reiniciando sozinho',
    intro:
      'Travamentos frequentes atrapalham a rotina e podem colocar arquivos em risco. A causa pode ser um driver, uma atualização, um vírus, aquecimento ou uma peça com falha, e identificar qual delas é o primeiro passo.',
    includes: [
      'Análise dos registros de erro do Windows',
      'Verificação de drivers e atualizações',
      'Teste de temperatura e de disco',
      'Proteção dos arquivos antes de mudanças',
    ],
    signsTitle: 'Situações que pedem atenção',
    signs: [
      'A tela congela e só volta desligando no botão.',
      'O computador reinicia sozinho, com ou sem tela azul.',
      'Programas fecham sem aviso durante o uso.',
      'Os travamentos aumentam com o computador quente.',
      'Começou depois de uma atualização ou da instalação de um programa.',
      'Barulhos diferentes vindo do disco ou da ventoinha.',
    ],
    approachTitle: 'Investigação antes da solução',
    approach: [
      'Os registros do Windows mostram muito sobre o que aconteceu antes de cada travamento. Essa análise pode ser feita remotamente e separa problemas de sistema de problemas físicos.',
      'Se houver indício de falha física, como disco ou aquecimento, a avaliação continua com o equipamento entregue em São José dos Campos. Antes de qualquer reparo, a prioridade é proteger seus arquivos.',
    ],
    faqs: [
      ['Tela azul é grave?', 'Depende do erro e da frequência. Uma tela azul isolada pode ser pontual; quando se repete, vale investigar antes que o problema aumente.'],
      ['Meus arquivos correm risco?', 'Se a causa for o disco, sim. Por isso, quando há sinal de falha no armazenamento, a cópia dos arquivos importantes vem antes de qualquer outra ação.'],
      ['Dá para fazer o diagnóstico a distância?', 'Na maioria dos casos, a primeira etapa sim, desde que o computador fique ligado tempo suficiente para a conexão.'],
    ],
    related: ['computador-lento', 'suporte-tecnico-windows', 'backup-de-arquivos'],
    wa: 'Olá! Meu computador está travando e reiniciando sozinho. Gostaria de uma avaliação.',
  },
  {
    slug: 'remocao-de-virus',
    group: 'resolver',
    modality: 'remoto',
    icon: 'ShieldAlert',
    navLabel: 'Remoção de vírus',
    cardText: 'Vírus, propagandas e programas suspeitos removidos, com proteção revisada.',
    seoTitle: 'Remoção de Vírus e Malware | Suporte Remoto em Todo o Brasil',
    description:
      'Remoção de vírus, malware, propagandas e programas indesejados do computador, com revisão da proteção. Atendimento remoto para todo o Brasil, com hora marcada.',
    eyebrow: 'Vírus, malware e programas indesejados',
    h1: 'Remoção de vírus e programas indesejados do computador',
    intro:
      'Propagandas que surgem do nada, navegador abrindo páginas estranhas, alertas falsos pedindo pagamento. Além de irritar, esses sinais podem indicar que dados e senhas estão expostos. A limpeza pode ser feita remotamente, em qualquer cidade do Brasil.',
    includes: [
      'Verificação completa do sistema',
      'Remoção de malware, adware e extensões suspeitas',
      'Revisão do antivírus e das atualizações',
      'Orientação para evitar novas infecções',
    ],
    signsTitle: 'Sinais comuns de infecção',
    signs: [
      'Propagandas e janelas aparecendo mesmo com o navegador fechado.',
      'Página inicial ou mecanismo de busca trocados sem você mexer.',
      'Programas desconhecidos instalados sozinhos.',
      'Alertas de "vírus encontrado" pedindo para pagar ou ligar para alguém.',
      'Computador lento e com uso alto de internet sem motivo.',
      'Amigos recebendo mensagens estranhas enviadas da sua conta.',
    ],
    approachTitle: 'Limpar e fechar a porta de entrada',
    approach: [
      'Remover o vírus é metade do trabalho. A outra metade é entender por onde ele entrou: um programa baixado de fonte duvidosa, uma extensão do navegador, um sistema sem atualizações.',
      'Depois da limpeza, a proteção do computador é revisada e você recebe orientações simples para reduzir o risco de acontecer de novo. Se houver suspeita de senhas expostas, você é avisado sobre quais trocar.',
    ],
    faqs: [
      ['Precisa formatar para tirar vírus?', 'Na maioria dos casos, não. A formatação só é indicada quando o sistema está muito comprometido, e isso é conversado com você antes.'],
      ['Dá para remover vírus pelo suporte remoto?', 'Sim, desde que o computador ligue e acesse a internet. É o formato mais comum para esse serviço.'],
      ['Meu antivírus não detectou nada. Pode ter vírus mesmo assim?', 'Pode. Programas de propaganda e extensões maliciosas muitas vezes passam despercebidos. Uma verificação manual complementa o antivírus.'],
      ['E se for um golpe por telefone ou mensagem?', 'Se alguém teve acesso ao seu computador, o atendimento verifica programas de acesso remoto instalados e orienta sobre senhas e contas a proteger.'],
    ],
    related: ['suporte-remoto', 'computador-lento', 'backup-de-arquivos'],
    wa: 'Olá! Acho que meu computador está com vírus. Gostaria de agendar um atendimento.',
  },
  {
    slug: 'formatacao-de-notebook',
    group: 'resolver',
    modality: 'misto',
    icon: 'RefreshCw',
    navLabel: 'Formatação',
    cardText: 'Windows reinstalado do zero, com drivers, atualizações e seus arquivos preservados.',
    seoTitle: 'Formatação de Notebook e Computador com Backup | Muniz',
    description:
      'Formatação de notebook e computador com backup dos arquivos, Windows atualizado e drivers instalados. Remoto em vários casos e com entrega em São José dos Campos.',
    eyebrow: 'Formatação e reinstalação do Windows',
    h1: 'Formatação de notebook e computador, sem perder o que importa',
    intro:
      'Uma formatação bem feita devolve estabilidade ao computador. Uma formatação mal planejada apaga fotos, documentos e programas que não voltam. Antes de reinstalar, fica combinado o que precisa ser preservado e se formatar é realmente a melhor solução.',
    includes: [
      'Avaliação antes de formatar',
      'Backup dos arquivos combinados',
      'Windows limpo, atualizado e com drivers',
      'Programas essenciais combinados com você',
    ],
    signsTitle: 'Quando a formatação costuma ser indicada',
    signs: [
      'O Windows continua lento mesmo depois de otimizações.',
      'Erros e travamentos voltam mesmo após correções.',
      'O sistema está cheio de programas indesejados ou foi muito alterado.',
      'O Windows não inicia corretamente ou está corrompido.',
      'O computador vai passar para outra pessoa.',
      'Uma formatação anterior deixou drivers e programas faltando.',
    ],
    approachTitle: 'Remoto quando possível, físico quando necessário',
    approach: [
      'Quando o Windows ainda inicia, a reinstalação pode ser conduzida remotamente em vários casos, com orientação passo a passo nos momentos em que você precisa interagir.',
      'Quando o sistema não inicia, o disco precisa ser verificado ou o backup exige acesso direto ao equipamento, o computador é entregue em um local combinado em São José dos Campos.',
    ],
    faqs: [
      ['A formatação apaga todos os arquivos?', 'Sim, a reinstalação limpa remove o conteúdo da unidade do sistema. Por isso o backup é combinado antes, quando tecnicamente possível.'],
      ['Dá para formatar o computador pelo remoto?', 'Em vários casos, sim, quando o Windows ainda inicia e há acesso à internet. A viabilidade é confirmada na conversa inicial.'],
      ['A formatação sempre resolve lentidão?', 'Não. Disco desgastado, pouca memória e aquecimento continuam causando lentidão depois de formatar. A avaliação evita uma formatação desnecessária.'],
      ['O Windows e os drivers são instalados?', 'Sim. O serviço inclui o sistema atualizado e os drivers compatíveis, usando a licença válida do equipamento ou uma fornecida por você.'],
      ['Quanto tempo leva?', 'Depende do equipamento, da quantidade de arquivos e das atualizações. A previsão é informada depois da avaliação.'],
    ],
    related: ['instalacao-do-windows', 'backup-de-arquivos', 'computador-lento'],
    wa: 'Olá! Gostaria de formatar meu computador/notebook. Pode me orientar?',
  },
  {
    slug: 'instalacao-do-windows',
    group: 'resolver',
    modality: 'misto',
    icon: 'AppWindow',
    navLabel: 'Instalação do Windows',
    cardText: 'Instalação, reparo ou migração do Windows com drivers e atualizações.',
    seoTitle: 'Instalação e Reinstalação do Windows 10 e 11 | Muniz',
    description:
      'Instalação, reinstalação e reparo do Windows 10 e 11, com drivers e atualizações. Atendimento remoto em vários casos e entrega do equipamento em São José dos Campos.',
    eyebrow: 'Windows 10 e 11',
    h1: 'Instalação e reinstalação do Windows 10 e 11',
    intro:
      'Instalar o Windows vai além de avançar as telas do instalador. A versão certa para o equipamento, os drivers corretos e as atualizações aplicadas fazem diferença na estabilidade do dia a dia.',
    includes: [
      'Verificação de compatibilidade e licença',
      'Instalação ou reparo do sistema',
      'Drivers e atualizações aplicados',
      'Configuração inicial e testes',
    ],
    signsTitle: 'Quando você pode precisar',
    signs: [
      'SSD novo ou computador montado sem sistema.',
      'Windows corrompido que não inicia ou não atualiza.',
      'Migração do Windows 10 para o Windows 11.',
      'Drivers faltando depois de uma instalação feita por conta própria.',
      'Erros que não foram resolvidos com reparos simples.',
    ],
    approachTitle: 'Reparar, reinstalar ou migrar',
    approach: [
      'Nem toda falha do Windows exige começar do zero. Às vezes um reparo do sistema mantém programas e arquivos no lugar. Quando a reinstalação é necessária, o backup vem antes.',
      'Reparos e migrações podem ser feitos remotamente quando o sistema inicia. Instalações em disco novo ou em computador sem sistema exigem o equipamento entregue em São José dos Campos.',
    ],
    faqs: [
      ['O serviço inclui a licença?', 'Não. A ativação utiliza a licença válida que já existe no equipamento ou uma fornecida por você.'],
      ['Windows 10 ou 11?', 'A versão é definida conforme a compatibilidade do equipamento e os programas que você usa.'],
      ['Instala Office e outros programas?', 'Sim, quando você possui a licença e isso foi combinado antes.'],
    ],
    related: ['formatacao-de-notebook', 'suporte-tecnico-windows', 'upgrade-ssd'],
    wa: 'Olá! Preciso instalar ou reinstalar o Windows. Pode me ajudar?',
  },
  {
    slug: 'backup-de-arquivos',
    group: 'resolver',
    modality: 'misto',
    icon: 'FolderLock',
    navLabel: 'Backup de arquivos',
    cardText: 'Fotos e documentos copiados, organizados e com rotina de backup configurada.',
    seoTitle: 'Backup de Arquivos, Fotos e Documentos | Muniz Informática',
    description:
      'Backup e organização de fotos, documentos e arquivos, com rotina de cópia em nuvem ou disco externo. Configuração remota para todo o Brasil.',
    eyebrow: 'Backup e organização de arquivos',
    h1: 'Backup de fotos, documentos e arquivos importantes',
    intro:
      'Muita gente só pensa em backup quando o computador para de ligar. Configurar uma cópia automática dos arquivos importantes leva pouco tempo e evita a pior parte de qualquer problema técnico: perder o que não tem como recuperar.',
    includes: [
      'Levantamento do que precisa ser protegido',
      'Cópia para nuvem ou disco externo',
      'Rotina automática de backup',
      'Transferência para um computador novo',
    ],
    signsTitle: 'Quando vale cuidar do backup',
    signs: [
      'Fotos e documentos existem só em um computador.',
      'Você vai formatar, trocar ou vender o equipamento.',
      'O computador deu sinais de falha no disco.',
      'Os arquivos estão espalhados e você não sabe o que é importante.',
      'O espaço da nuvem acabou e o backup parou sem avisar.',
    ],
    approachTitle: 'Backup não é recuperação de dados',
    approach: [
      'Backup copia arquivos de um equipamento que ainda funciona. Configurar a nuvem, organizar pastas e programar cópias automáticas pode ser feito por suporte remoto, de qualquer cidade.',
      'Quando o disco já está falhando ou o computador não liga, a cópia precisa ser feita com o equipamento em mãos, entregue em São José dos Campos. A possibilidade de recuperar arquivos depende do estado do disco e não pode ser garantida antes da análise.',
    ],
    faqs: [
      ['Backup em nuvem é seguro?', 'Pode ser uma boa opção quando configurado corretamente, com senha forte e verificação em duas etapas.'],
      ['Vocês fazem recuperação de dados?', 'A cópia de arquivos de discos com falha leve pode ser tentada após avaliação. Casos graves exigem laboratório especializado, e você recebe essa orientação.'],
      ['Posso fazer a configuração remotamente?', 'Sim. Configuração de nuvem, rotina automática e organização de pastas são feitas por suporte remoto.'],
    ],
    related: ['formatacao-de-notebook', 'computador-travando', 'suporte-remoto'],
    wa: 'Olá! Gostaria de ajuda para fazer backup e organizar meus arquivos.',
  },

  // ───────────────────────── HARDWARE (entrega em São José dos Campos) ─────────────────────────
  {
    slug: 'upgrade-ssd',
    group: 'hardware',
    modality: 'sjc',
    icon: 'HardDrive',
    navLabel: 'Upgrade de SSD',
    cardText: 'Troca do HD por SSD com o sistema e os arquivos transferidos.',
    seoTitle: 'Upgrade de SSD em São José dos Campos | Muniz Informática',
    description:
      'Upgrade de HD para SSD em São José dos Campos, com verificação de compatibilidade e transferência do sistema e dos arquivos. Entrega do equipamento com agendamento.',
    eyebrow: 'Upgrade de armazenamento · São José dos Campos',
    h1: 'Upgrade de SSD em São José dos Campos',
    intro:
      'Trocar um HD por um SSD costuma ser o upgrade com a maior diferença percebida em computadores e notebooks mais antigos: o sistema liga mais rápido e os programas abrem sem aquela espera.',
    includes: [
      'Verificação do modelo de SSD compatível',
      'Instalação física do SSD',
      'Transferência do sistema ou instalação limpa',
      'Testes de desempenho e de funcionamento',
    ],
    signsTitle: 'Sinais de que o SSD pode ajudar',
    signs: [
      'O computador ainda usa HD mecânico.',
      'Demora muito para ligar e para abrir programas.',
      'Disco em 100% de uso no Gerenciador de Tarefas.',
      'O equipamento atende ao seu uso, mas está lento demais.',
    ],
    approachTitle: 'Antes de comprar a peça',
    approach: [
      'O primeiro passo é confirmar o tipo de SSD aceito pelo equipamento e se o upgrade realmente resolve a lentidão. Essa verificação pode começar por suporte remoto, de qualquer cidade.',
      'A instalação é feita com o equipamento entregue em um local combinado em São José dos Campos, com agendamento. A compra e a garantia da peça são combinadas em cada caso.',
    ],
    faqs: [
      ['Perco meus arquivos ao trocar para SSD?', 'Não precisa. O sistema e os arquivos podem ser transferidos para o SSD, ou copiados antes de uma instalação limpa.'],
      ['Todo computador aceita SSD?', 'A grande maioria aceita algum tipo de SSD. O modelo compatível é verificado antes da compra.'],
      ['Onde entrego o equipamento?', 'A entrega é combinada pelo WhatsApp em um local em São José dos Campos, com agendamento. Não há atendimento em loja aberta ao público.'],
    ],
    related: ['upgrade-memoria-ram', 'computador-lento', 'assistencia-tecnica-em-sao-jose-dos-campos'],
    wa: 'Olá! Gostaria de avaliar um upgrade de SSD no meu computador/notebook em São José dos Campos.',
  },
  {
    slug: 'upgrade-memoria-ram',
    group: 'hardware',
    modality: 'sjc',
    icon: 'MemoryStick',
    navLabel: 'Upgrade de memória RAM',
    cardText: 'Mais memória para quem trabalha com várias abas e programas abertos.',
    seoTitle: 'Upgrade de Memória RAM em São José dos Campos | Muniz',
    description:
      'Upgrade de memória RAM para notebooks e computadores em São José dos Campos, com verificação de compatibilidade antes da compra. Entrega com agendamento.',
    eyebrow: 'Upgrade de memória · São José dos Campos',
    h1: 'Upgrade de memória RAM em São José dos Campos',
    intro:
      'Pouca memória deixa o computador lento quando várias abas, planilhas ou programas ficam abertos ao mesmo tempo. O upgrade ajuda, desde que a memória seja compatível e a falta dela seja de fato o problema.',
    includes: [
      'Análise do uso real de memória',
      'Verificação do tipo e do limite suportado',
      'Instalação e testes de estabilidade',
    ],
    signsTitle: 'Quando o upgrade de memória faz sentido',
    signs: [
      'O computador fica lento com várias abas ou programas abertos.',
      'O uso de memória passa de 80% no dia a dia.',
      'O equipamento tem 4 GB ou menos e roda Windows 10 ou 11.',
    ],
    approachTitle: 'Verificar antes de comprar',
    approach: [
      'A análise do uso de memória pode ser feita remotamente, para confirmar se o upgrade vai resolver. Também é verificado o tipo aceito pelo equipamento e quantos slots estão livres.',
      'A instalação é feita com o equipamento entregue em São José dos Campos, com agendamento.',
    ],
    faqs: [
      ['Como saber se meu notebook aceita mais memória?', 'É preciso verificar o modelo, os slots disponíveis e o limite suportado. Alguns notebooks têm a memória soldada e não permitem upgrade.'],
      ['Memória ou SSD: qual primeiro?', 'Se o computador ainda usa HD, o SSD costuma trazer mais diferença. A análise indica qual faz mais sentido no seu caso.'],
    ],
    related: ['upgrade-ssd', 'computador-lento', 'assistencia-tecnica-notebook'],
    wa: 'Olá! Gostaria de avaliar um upgrade de memória RAM em São José dos Campos.',
  },
  {
    slug: 'limpeza-de-notebook',
    group: 'hardware',
    modality: 'sjc',
    icon: 'Fan',
    navLabel: 'Limpeza de notebook',
    cardText: 'Limpeza interna e revisão da refrigeração para reduzir aquecimento.',
    seoTitle: 'Limpeza Interna de Notebook em São José dos Campos | Muniz',
    description:
      'Limpeza interna de notebook e computador em São José dos Campos, com revisão da ventoinha e da refrigeração. Entrega do equipamento com agendamento.',
    eyebrow: 'Manutenção preventiva · São José dos Campos',
    h1: 'Limpeza interna de notebook em São José dos Campos',
    intro:
      'Poeira acumulada nas ventoinhas e saídas de ar faz o notebook esquentar mais, ficar barulhento e perder desempenho. A limpeza interna ajuda a manter a temperatura sob controle e prolonga a vida útil do equipamento.',
    includes: [
      'Abertura e limpeza interna cuidadosa',
      'Revisão de ventoinha e saídas de ar',
      'Avaliação da pasta térmica',
      'Teste de temperatura após o serviço',
    ],
    signsTitle: 'Quando fazer a limpeza',
    signs: [
      'O notebook esquenta muito e a ventoinha fica sempre acelerada.',
      'O equipamento desliga sozinho durante tarefas mais pesadas.',
      'Faz mais de um ou dois anos que ele não passa por limpeza.',
      'Está mais barulhento do que costumava ser.',
    ],
    approachTitle: 'Cuidado com cada modelo',
    approach: [
      'Cada notebook tem uma forma de abertura diferente, e o serviço é feito com atenção para não danificar travas, cabos e conectores. A troca da pasta térmica depende do modelo e do estado encontrado.',
      'O equipamento é entregue em um local combinado em São José dos Campos, com agendamento.',
    ],
    faqs: [
      ['A limpeza inclui troca de pasta térmica?', 'A necessidade depende do modelo e do estado encontrado. Isso é informado antes da execução.'],
      ['De quanto em quanto tempo limpar?', 'Depende do ambiente e do uso. Em locais com poeira ou animais, a limpeza tende a ser necessária com mais frequência.'],
    ],
    related: ['notebook-esquentando', 'manutencao-de-computadores', 'assistencia-tecnica-notebook'],
    wa: 'Olá! Gostaria de agendar uma limpeza interna do meu notebook em São José dos Campos.',
  },
  {
    slug: 'notebook-esquentando',
    group: 'hardware',
    modality: 'sjc',
    icon: 'Thermometer',
    navLabel: 'Notebook esquentando',
    cardText: 'Aquecimento, ventoinha barulhenta e desligamentos durante o uso.',
    seoTitle: 'Notebook Esquentando ou Desligando Sozinho | Avaliação em SJC',
    description:
      'Notebook esquentando, com ventoinha barulhenta ou desligando sozinho? Verificação remota inicial e limpeza com revisão da refrigeração em São José dos Campos.',
    eyebrow: 'Aquecimento e refrigeração',
    h1: 'Notebook esquentando ou desligando sozinho',
    intro:
      'Aquecimento constante reduz o desempenho e, com o tempo, pode danificar componentes. As causas mais comuns são poeira, pasta térmica ressecada e ventoinha desgastada, mas programas pesando em segundo plano também fazem o processador esquentar.',
    includes: [
      'Verificação de temperatura e uso do processador',
      'Limpeza interna e revisão da ventoinha',
      'Avaliação da pasta térmica',
      'Orientações de uso no dia a dia',
    ],
    signsTitle: 'Sinais de aquecimento',
    signs: [
      'A base do notebook fica quente demais para apoiar no colo.',
      'A ventoinha fica acelerada mesmo em tarefas simples.',
      'O notebook desliga sozinho ou trava quando esquenta.',
      'O desempenho cai depois de alguns minutos de uso.',
    ],
    approachTitle: 'Descartar o software, tratar o hardware',
    approach: [
      'Uma verificação remota mostra a temperatura e o que está consumindo o processador. Às vezes, o aquecimento vem de um programa travado em segundo plano.',
      'Se a causa for física, a limpeza e a revisão da refrigeração são feitas com o equipamento entregue em São José dos Campos, com agendamento.',
    ],
    faqs: [
      ['Notebook esquentando precisa trocar pasta térmica?', 'Depende do modelo e do estado encontrado. Poeira e ventoinha obstruída são causas tão comuns quanto a pasta ressecada.'],
      ['É perigoso usar o notebook quente?', 'O aquecimento constante força os componentes e pode causar desligamentos. Vale investigar antes que vire um defeito.'],
    ],
    related: ['limpeza-de-notebook', 'computador-travando', 'assistencia-tecnica-notebook'],
    wa: 'Olá! Meu notebook está esquentando muito. Gostaria de uma avaliação.',
  },
  {
    slug: 'notebook-demora-para-ligar',
    group: 'hardware',
    modality: 'misto',
    icon: 'Power',
    navLabel: 'Notebook demora para ligar',
    cardText: 'Inicialização lenta investigada: sistema, disco ou programas.',
    seoTitle: 'Notebook Demorando para Ligar? Diagnóstico | Muniz Informática',
    description:
      'Notebook ou computador demorando muito para ligar? Diagnóstico remoto da inicialização para todo o Brasil e upgrade de SSD em São José dos Campos.',
    eyebrow: 'Inicialização lenta',
    h1: 'Notebook demorando muito para ligar',
    intro:
      'Esperar vários minutos até conseguir usar o notebook costuma ter três causas principais: programas demais iniciando junto com o Windows, atualizações pendentes ou um HD que já não acompanha o sistema.',
    includes: [
      'Análise do que inicia com o Windows',
      'Verificação de atualizações pendentes',
      'Teste de saúde do disco',
      'Recomendação de upgrade quando compensa',
    ],
    signsTitle: 'O que observar',
    signs: [
      'Fica muitos minutos na tela de carregamento.',
      'Liga, mas demora para responder depois de entrar no Windows.',
      'A demora piorou aos poucos ao longo dos meses.',
      'Às vezes não passa do logotipo do fabricante.',
    ],
    approachTitle: 'Do remoto ao upgrade',
    approach: [
      'A análise da inicialização e a limpeza do que não precisa iniciar junto são feitas remotamente, para qualquer cidade.',
      'Se o disco for o gargalo, o upgrade para SSD é feito com o equipamento entregue em São José dos Campos.',
    ],
    faqs: [
      ['Resolve sem trocar peça?', 'Muitas vezes, sim. Ajustar a inicialização e aplicar atualizações pendentes já faz diferença. Se o notebook usa HD, o SSD é o próximo passo.'],
      ['E se ele não passa do logotipo?', 'Nesse caso o atendimento remoto não é possível, e a avaliação é física, em São José dos Campos.'],
    ],
    related: ['upgrade-ssd', 'computador-lento', 'suporte-remoto'],
    wa: 'Olá! Meu notebook está demorando muito para ligar. Gostaria de uma avaliação.',
  },

  // ───────────────────────── SÃO JOSÉ DOS CAMPOS ─────────────────────────
  {
    slug: 'assistencia-tecnica-em-sao-jose-dos-campos',
    group: 'local',
    modality: 'sjc',
    icon: 'MapPin',
    navLabel: 'Técnico em São José dos Campos',
    cardText: 'Como funciona o atendimento físico em São José dos Campos.',
    seoTitle: 'Técnico de Informática em São José dos Campos | Muniz',
    description:
      'Técnico de informática em São José dos Campos: suporte remoto, upgrade, limpeza e manutenção de computadores e notebooks, com entrega do equipamento agendada.',
    eyebrow: 'Atendimento em São José dos Campos',
    h1: 'Técnico de informática em São José dos Campos',
    intro:
      'Para quem está em São José dos Campos, o atendimento combina o melhor dos dois formatos: o que dá para resolver pela internet é feito remotamente, e o que exige mexer no equipamento é feito com entrega agendada em um local combinado na cidade.',
    includes: [
      'Suporte remoto com hora marcada',
      'Upgrade de SSD e memória',
      'Limpeza interna e manutenção',
      'Atendimento no local para empresas',
    ],
    signsTitle: 'Serviços com o equipamento em mãos',
    signs: [
      'Upgrade de SSD ou memória RAM.',
      'Limpeza interna e revisão da refrigeração.',
      'Computador que não liga ou não inicia o Windows.',
      'Backup de disco com sinais de falha.',
      'Avaliação física de travamentos e aquecimento.',
    ],
    approachTitle: 'Como funciona a entrega do equipamento',
    approach: [
      'Você descreve o problema pelo WhatsApp e, se for preciso intervenção física, o dia e o local de entrega em São José dos Campos são combinados na conversa. Não há loja aberta ao público nem atendimento em domicílio para pessoas físicas.',
      'Empresas sediadas em São José dos Campos podem receber atendimento no próprio local, também com agendamento e conforme disponibilidade.',
    ],
    faqs: [
      ['Vocês têm loja física?', 'Não. O equipamento é entregue em um local combinado em São José dos Campos, com agendamento pelo WhatsApp.'],
      ['Fazem atendimento em domicílio?', 'Para pessoas físicas, não. Empresas em São José dos Campos podem receber atendimento no local, com agendamento.'],
      ['Atendem presencialmente em outras cidades?', 'Não. O atendimento físico é feito apenas em São José dos Campos. Para qualquer outra cidade do Brasil, o atendimento é por suporte remoto.'],
    ],
    related: ['assistencia-tecnica-notebook', 'assistencia-tecnica-computador', 'upgrade-ssd'],
    wa: 'Olá! Estou em São José dos Campos e gostaria de agendar um atendimento.',
  },
  {
    slug: 'assistencia-tecnica-notebook',
    group: 'local',
    modality: 'misto',
    icon: 'Laptop',
    navLabel: 'Assistência para notebook',
    cardText: 'Lentidão, aquecimento, upgrade e sistema de notebooks.',
    seoTitle: 'Assistência Técnica de Notebook em São José dos Campos',
    description:
      'Assistência técnica de notebook: suporte remoto para todo o Brasil e upgrade, limpeza e avaliação física em São José dos Campos, com entrega agendada.',
    eyebrow: 'Notebooks',
    h1: 'Assistência técnica de notebook',
    intro:
      'Notebooks concentram tela, teclado, bateria, armazenamento e refrigeração em pouco espaço, e isso pede cuidado redobrado na hora de abrir e mexer. Problemas de sistema são resolvidos remotamente; o que é físico é tratado com entrega em São José dos Campos.',
    includes: [
      'Diagnóstico de lentidão e travamentos',
      'Upgrade de SSD e memória',
      'Limpeza interna e refrigeração',
      'Formatação e instalação do Windows',
    ],
    signsTitle: 'Problemas mais comuns em notebooks',
    signs: [
      'Lentidão, principalmente em modelos com HD.',
      'Aquecimento e ventoinha barulhenta.',
      'Demora para ligar ou travamentos.',
      'Wi-Fi, som ou touchpad que pararam depois de uma atualização.',
    ],
    approachTitle: 'Primeiro o diagnóstico',
    approach: [
      'Uma conversa pelo WhatsApp e, quando possível, uma verificação remota já indicam se o problema é de sistema ou físico. Isso evita deslocamentos desnecessários.',
      'Serviços físicos, como upgrade e limpeza, são feitos com entrega agendada em São José dos Campos.',
    ],
    faqs: [
      ['Preciso levar o notebook para saber o que ele tem?', 'Nem sempre. Muitos problemas são identificados na conversa ou em uma verificação remota. A entrega só é combinada quando o caso exige mexer no equipamento.'],
      ['Atende notebooks de qualquer marca?', 'Sim, a avaliação é feita para os modelos mais comuns. Em casos muito específicos, você é orientado sobre o melhor caminho.'],
    ],
    related: ['upgrade-ssd', 'limpeza-de-notebook', 'notebook-esquentando'],
    wa: 'Olá! Gostaria de uma avaliação para o meu notebook.',
  },
  {
    slug: 'assistencia-tecnica-computador',
    group: 'local',
    modality: 'misto',
    icon: 'Monitor',
    navLabel: 'Assistência para computador',
    cardText: 'Computadores de mesa: sistema, upgrade e manutenção.',
    seoTitle: 'Assistência Técnica de Computador em São José dos Campos',
    description:
      'Assistência técnica de computador de mesa: suporte remoto para todo o Brasil e upgrade, limpeza e manutenção em São José dos Campos, com entrega agendada.',
    eyebrow: 'Computadores de mesa',
    h1: 'Assistência técnica de computador',
    intro:
      'Computadores de mesa são mais fáceis de manter e atualizar que notebooks, o que muitas vezes torna o upgrade uma ótima alternativa à compra de uma máquina nova. Problemas de sistema são resolvidos remotamente; o que é físico, com entrega em São José dos Campos.',
    includes: [
      'Diagnóstico de lentidão e travamentos',
      'Upgrade de SSD e memória',
      'Limpeza interna e revisão de ventoinhas',
      'Formatação e instalação do Windows',
    ],
    signsTitle: 'Problemas comuns em computadores de mesa',
    signs: [
      'Lentidão e demora para ligar.',
      'Travamentos e reinícios sozinhos.',
      'Poeira acumulada e barulho excessivo.',
      'Computador que não liga ou não dá imagem.',
    ],
    approachTitle: 'Upgrade antes de trocar',
    approach: [
      'Antes de comprar um computador novo, vale avaliar se um SSD, mais memória ou uma limpeza resolvem. Quando o investimento não compensa, você também recebe essa orientação.',
      'Serviços físicos são feitos com entrega agendada em São José dos Campos. Empresas na cidade podem receber atendimento no local.',
    ],
    faqs: [
      ['Vale a pena fazer upgrade no meu computador?', 'Depende da idade do equipamento e do seu uso. A avaliação mostra o custo-benefício de cada opção.'],
      ['Preciso levar o monitor e o teclado?', 'Normalmente só o gabinete. Isso é confirmado na conversa pelo WhatsApp.'],
    ],
    related: ['upgrade-ssd', 'manutencao-de-computadores', 'computador-travando'],
    wa: 'Olá! Gostaria de uma avaliação para o meu computador.',
  },
  {
    slug: 'manutencao-de-computadores',
    group: 'local',
    modality: 'sjc',
    icon: 'Wrench',
    navLabel: 'Manutenção de computadores',
    cardText: 'Manutenção preventiva para casa e para empresas em São José dos Campos.',
    seoTitle: 'Manutenção de Computadores em São José dos Campos | Muniz',
    description:
      'Manutenção preventiva e corretiva de computadores e notebooks em São José dos Campos, para pessoas e empresas. Atendimento no local para empresas, com agendamento.',
    eyebrow: 'Manutenção preventiva e corretiva',
    h1: 'Manutenção de computadores em São José dos Campos',
    intro:
      'Manutenção preventiva é mais barata que conserto. Uma revisão periódica de limpeza, atualizações, disco e backup reduz paradas inesperadas, tanto no computador de casa quanto nas máquinas de uma empresa.',
    includes: [
      'Limpeza interna e refrigeração',
      'Atualizações e revisão de segurança',
      'Verificação de disco e de backup',
      'Relatório do que foi encontrado',
    ],
    signsTitle: 'Para quem é',
    signs: [
      'Computadores usados todos os dias para trabalho ou estudo.',
      'Empresas com vários equipamentos e nenhuma rotina de revisão.',
      'Equipamentos que ficam em ambientes com poeira.',
      'Quem quer evitar ser pego de surpresa por uma falha.',
    ],
    approachTitle: 'Pessoas e empresas',
    approach: [
      'Para pessoas físicas, a manutenção física é feita com entrega do equipamento agendada em São José dos Campos. A parte de sistema e atualizações pode ser feita remotamente.',
      'Para empresas em São José dos Campos, a manutenção pode ser feita no próprio local, com agendamento e conforme disponibilidade.',
    ],
    faqs: [
      ['Com que frequência fazer manutenção?', 'Depende do uso e do ambiente. A recomendação é definida depois da primeira revisão.'],
      ['Atendem empresas no local?', 'Sim, empresas em São José dos Campos, com agendamento e conforme disponibilidade.'],
    ],
    related: ['limpeza-de-notebook', 'suporte-informatica-pequenas-empresas', 'backup-de-arquivos'],
    wa: 'Olá! Gostaria de agendar uma manutenção preventiva em São José dos Campos.',
  },

  // ───────────────────────── EMPRESAS ─────────────────────────
  {
    slug: 'suporte-informatica-pequenas-empresas',
    group: 'empresas',
    modality: 'empresa',
    icon: 'Headset',
    navLabel: 'Suporte de TI para empresas',
    cardText: 'Suporte técnico para os computadores e usuários do dia a dia.',
    seoTitle: 'Suporte de TI para Pequenas Empresas | Remoto e em SJC',
    description:
      'Suporte de informática para pequenas empresas: atendimento remoto para todo o Brasil e no local em São José dos Campos, com agendamento.',
    eyebrow: 'Empresas · Suporte técnico',
    h1: 'Suporte de informática para pequenas empresas',
    intro:
      'Em uma empresa pequena, um computador parado é uma pessoa sem trabalhar. O suporte cuida dos problemas do dia a dia com o mínimo de interrupção, remotamente sempre que possível.',
    includes: [
      'Atendimento aos usuários e às estações de trabalho',
      'Manutenção de computadores, remota e no local em SJC',
      'Instalação e configuração de programas',
      'Impressoras, e-mail e compartilhamentos',
      'Revisão de segurança e backup',
    ],
    signsTitle: 'Quando faz sentido ter um suporte de referência',
    signs: [
      'Cada problema é resolvido por quem estiver disponível, sem padrão.',
      'Ninguém sabe ao certo se o backup está funcionando.',
      'Os computadores têm configurações diferentes e problemas repetidos.',
      'Um funcionário perde horas tentando resolver algo técnico.',
    ],
    approachTitle: 'Remoto primeiro, no local quando necessário',
    approach: [
      'A maior parte dos chamados é resolvida remotamente, com agendamento, para empresas de qualquer cidade do Brasil.',
      'Para empresas sediadas em São José dos Campos, atendimentos no local são agendados conforme disponibilidade.',
    ],
    faqs: [
      ['Atendem empresas de outras cidades?', 'Sim, por suporte remoto. Atendimento no local é feito apenas em São José dos Campos.'],
    ],
    related: ['empresas/redes-e-wi-fi', 'empresas/firewall-e-antivirus', 'empresas/infraestrutura-de-ti'],
    wa: 'Olá! Gostaria de conversar sobre suporte de informática para a minha empresa.',
  },
  {
    slug: 'empresas/redes-e-wi-fi',
    group: 'empresas',
    modality: 'empresa',
    icon: 'Wifi',
    navLabel: 'Redes e Wi-Fi',
    cardText: 'Rede cabeada e Wi-Fi estáveis, organizados e documentados.',
    seoTitle: 'Redes e Wi-Fi para Empresas em São José dos Campos | Muniz',
    description:
      'Configuração e organização de redes e Wi-Fi para pequenas empresas: cobertura, estabilidade, rede de visitantes e compartilhamentos. No local em São José dos Campos.',
    eyebrow: 'Empresas · Redes e conectividade',
    h1: 'Redes e Wi-Fi para pequenas empresas',
    intro:
      'Internet que cai, Wi-Fi que não chega na sala do fundo, impressora que some da rede. Uma rede bem configurada é invisível, e é exatamente isso que ela deve ser.',
    includes: [
      'Diagnóstico da rede e da cobertura Wi-Fi',
      'Configuração de roteadores e pontos de acesso',
      'Rede separada para visitantes',
      'Documentação de senhas e equipamentos',
    ],
    signsTitle: 'Problemas que indicam uma rede mal planejada',
    signs: [
      'Wi-Fi fraco ou instável em parte do escritório.',
      'Clientes e visitantes usando a mesma rede dos computadores da empresa.',
      'Ninguém sabe a senha do roteador ou quem configurou a rede.',
      'Impressoras e pastas compartilhadas que falham com frequência.',
    ],
    approachTitle: 'Levantamento antes de comprar equipamento',
    approach: [
      'Antes de qualquer compra, a rede atual é avaliada para entender o que realmente precisa mudar. Às vezes, uma reconfiguração resolve.',
      'Ajustes de configuração podem ser feitos remotamente. Quando é preciso estar no local, o atendimento é feito apenas para empresas em São José dos Campos, com agendamento.',
    ],
    faqs: [
      ['Atendem redes em outras cidades?', 'Configurações remotas, sim. Atendimento no local, apenas para empresas em São José dos Campos.'],
    ],
    related: ['empresas/firewall-e-antivirus', 'empresas/infraestrutura-de-ti', 'suporte-informatica-pequenas-empresas'],
    wa: 'Olá! Gostaria de avaliar a rede e o Wi-Fi da minha empresa.',
  },
  {
    slug: 'empresas/firewall-e-antivirus',
    group: 'empresas',
    modality: 'empresa',
    icon: 'ShieldCheck',
    navLabel: 'Firewall e antivírus',
    cardText: 'Proteção da rede e das estações contra ameaças e acessos indevidos.',
    seoTitle: 'Firewall e Antivírus Corporativo para Pequenas Empresas',
    description:
      'Firewall e antivírus para pequenas empresas: proteção da rede, das estações e revisão de acessos. Remoto em todo o Brasil e no local em São José dos Campos.',
    eyebrow: 'Empresas · Segurança',
    h1: 'Firewall e antivírus corporativo para pequenas empresas',
    intro:
      'Pequenas empresas também são alvo de golpes, vírus e sequestro de dados. A proteção começa com o básico bem feito: um firewall configurado, antivírus gerenciado em todas as máquinas e atualizações em dia.',
    includes: [
      'Avaliação da segurança atual',
      'Configuração de firewall',
      'Antivírus corporativo nas estações',
      'Revisão de acessos e atualizações',
    ],
    signsTitle: 'Riscos comuns em pequenas empresas',
    signs: [
      'Cada computador com um antivírus diferente, ou nenhum.',
      'Atualizações do Windows desativadas para "não atrapalhar".',
      'Funcionários com acesso de administrador sem necessidade.',
      'Nenhum controle do que entra e sai da rede.',
    ],
    approachTitle: 'Proteção proporcional ao tamanho da empresa',
    approach: [
      'Nem toda empresa precisa de uma estrutura cara. A recomendação é feita a partir do que a empresa usa e do risco real, sem vender mais do que o necessário.',
      'A configuração pode ser feita remotamente em boa parte dos casos. Quando é preciso estar no local, o atendimento é feito apenas para empresas em São José dos Campos.',
    ],
    faqs: [
      ['Antivírus gratuito não é suficiente?', 'Para empresas, um antivírus com gerenciamento centralizado permite saber se todas as máquinas estão protegidas. A recomendação depende do tamanho da empresa.'],
      ['Firewall é só para empresas grandes?', 'Não. Mesmo escritórios pequenos se beneficiam de controle sobre a rede, especialmente quando há dados de clientes.'],
    ],
    related: ['empresas/redes-e-wi-fi', 'empresas/infraestrutura-de-ti', 'remocao-de-virus'],
    wa: 'Olá! Gostaria de avaliar firewall e antivírus para a minha empresa.',
  },
  {
    slug: 'empresas/infraestrutura-de-ti',
    group: 'empresas',
    modality: 'empresa',
    icon: 'Server',
    navLabel: 'Infraestrutura de TI',
    cardText: 'Organização do ambiente de TI: equipamentos, acessos, backup e padrões.',
    seoTitle: 'Infraestrutura de TI para Pequenas Empresas | Muniz',
    description:
      'Organização e melhoria da infraestrutura de TI de pequenas empresas: inventário, padronização, backup e acessos. Remoto e no local em São José dos Campos.',
    eyebrow: 'Empresas · Infraestrutura',
    h1: 'Infraestrutura e organização de TI para pequenas empresas',
    intro:
      'Com o tempo, a TI de uma empresa pequena cresce sem planejamento: um computador aqui, um roteador ali, senhas anotadas em papel. Organizar esse ambiente reduz paradas, facilita o suporte e protege os dados do negócio.',
    includes: [
      'Inventário de equipamentos e licenças',
      'Padronização das estações de trabalho',
      'Política de backup e de acessos',
      'Plano de melhorias por prioridade',
    ],
    signsTitle: 'Sinais de que é hora de organizar',
    signs: [
      'Ninguém sabe quantos computadores e licenças a empresa tem.',
      'Senhas e acessos dependem de uma única pessoa.',
      'Backup inexistente ou nunca testado.',
      'Problemas repetidos que voltam toda semana.',
    ],
    approachTitle: 'Diagnóstico, prioridades e execução',
    approach: [
      'O trabalho começa com um levantamento do ambiente atual e termina com um plano de melhorias ordenado por impacto e custo. A empresa decide o ritmo.',
      'Levantamentos e configurações podem ser feitos remotamente. Atendimento no local é feito apenas para empresas em São José dos Campos, com agendamento.',
    ],
    faqs: [
      ['Precisa trocar todos os equipamentos?', 'Não. O objetivo é aproveitar o que já existe e indicar trocas apenas quando fazem diferença.'],
      ['Quanto tempo leva?', 'Depende do tamanho do ambiente. O levantamento inicial define o escopo e o prazo.'],
    ],
    related: ['empresas/redes-e-wi-fi', 'empresas/firewall-e-antivirus', 'suporte-informatica-pequenas-empresas'],
    wa: 'Olá! Gostaria de conversar sobre a organização da TI da minha empresa.',
  },
];

export const serviceBySlug: Record<string, ServicePage> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
);

export const byGroup = (group: Group) => services.filter((s) => s.group === group);

export const modalityLabel: Record<Modality, { short: string; long: string }> = {
  remoto: {
    short: 'Remoto · todo o Brasil',
    long: 'Atendimento remoto para qualquer cidade do Brasil, com hora marcada.',
  },
  misto: {
    short: 'Remoto + entrega em SJC',
    long: 'Começa pelo suporte remoto. Se precisar mexer no equipamento, a entrega é combinada em São José dos Campos.',
  },
  sjc: {
    short: 'Entrega em São José dos Campos',
    long: 'Exige o equipamento em mãos: a entrega é combinada em um local em São José dos Campos, com agendamento.',
  },
  empresa: {
    short: 'Remoto + no local em SJC',
    long: 'Remoto para empresas de todo o Brasil. Atendimento no local apenas para empresas em São José dos Campos.',
  },
};
