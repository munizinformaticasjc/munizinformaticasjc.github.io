import { site, DEFAULT_WA_MESSAGE } from '../config/site';

/**
 * Monta o link do WhatsApp com mensagem pré-preenchida.
 * `ref` identifica a origem do contato dentro da própria conversa,
 * o que ajuda a saber qual página gerou o pedido mesmo sem Analytics.
 */
export function waLink(message: string = DEFAULT_WA_MESSAGE, ref?: string) {
  const text = ref ? `${message}\n\n(ref: ${ref})` : message;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
