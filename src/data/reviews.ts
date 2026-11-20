import { site } from '../config/site';

// Avaliações reais do Google. Só entra aqui o que estiver publicado no perfil.
// Enquanto `reviews` estiver vazio, a seção não aparece no site. Nenhuma nota vai para o Schema.org
// (o Google não exibe estrelas de avaliações do próprio negócio).
// Copie o texto exatamente como está no Google. O nome fica abreviado (nome + inicial) por privacidade.
// Não publique avaliação que cite o nome do dono: o site não mostra nome, foto nem biografia.

export interface Review {
  author: string;   // nome exibido no Google, abreviado (nome + inicial do sobrenome)
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;     // texto literal da avaliação
  date?: string;    // AAAA-MM-DD, só quando a data exata for conhecida (o Google mostra apenas "há X meses")
}

// Conferidas no perfil público em 2026-11-20 (7 avaliações, todas 5 estrelas).
// Ficou de fora uma avaliação que cita o nome do dono.
export const reviews: Review[] = [
  {
    author: 'Gabriela E.',
    rating: 5,
    text: 'Excelente atendimento! O serviço de informática foi realizado com muito profissionalismo, atenção e qualidade. Fiquei muito satisfeita com o resultado e com a forma como fui atendida. Serviço bem executado e de confiança. Recomendo para quem precisar de um serviço de informática de qualidade!',
  },
  {
    author: 'Alefe H.',
    rating: 5,
    text: 'Excelente profissional, preço justo e super atencioso. Tive um excelente suporte também que me auxiliou muito com algumas dúvidas. Está de parabéns, atendimento nota 1000!!!',
  },
  {
    author: 'Joao V.',
    rating: 5,
    text: 'Ótimo atendimento, resolveu meu problema',
  },
  {
    author: 'Renato V.',
    rating: 5,
    text: 'Excelente atendimento e agilidade nos serviços prestados.',
  },
  {
    author: 'Anderson M.',
    rating: 5,
    text: 'Recomendo! Excelente trabalho!!!',
  },
  {
    author: 'Bruno A.',
    rating: 5,
    text: 'Muito bom e atencioso',
  },
];

// Link público do perfil no Google (abre o perfil no Google Maps).
export const googleProfileUrl = site.profiles.google;
