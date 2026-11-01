// Avaliações reais do Google. Mantenha VAZIO até haver avaliações confirmadas.
// Enquanto `reviews` estiver vazio, a seção não aparece no site e nenhum dado de nota vai para o Schema.org.
// Copie o texto exatamente como está no Google, com o nome que o cliente exibe publicamente.

export interface Review {
  author: string;   // nome público exibido no Google
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;     // trecho literal da avaliação
  date: string;     // AAAA-MM-DD
}

export const reviews: Review[] = [];

// Link público do perfil no Google (ex.: https://g.page/r/...). Deixe vazio até conferir o perfil.
export const googleProfileUrl = '';
