/**
 * ================================================================
 * DATAS RESERVADAS - FICHEIRO DE CONFIGURAÇÃO
 * ================================================================
 * Para adicionar uma nova data, basta adicionar um novo objeto
 * ao array abaixo, seguindo o formato existente:
 *
 *   { date: "DD/MM/AAAA", type: "Tipo de Evento", notes: "Opcional" }
 *
 * Datas passadas são automaticamente ocultadas no site.
 * ================================================================
 */

export type BookedDate = {
  date: string;       // Formato: "DD/MM/AAAA"
  type: string;       // Ex: "Casamento", "Evento Corporativo", etc.
  notes?: string;     // Nota opcional a mostrar no card
};

export const bookedDates: BookedDate[] = [
  { date: "05/09/2026", type: "Casamento" },
  { date: "12/09/2026", type: "Casamento" },
  { date: "26/09/2026", type: "Casamento" },
  { date: "03/10/2026", type: "Casamento" },
  { date: "08/11/2026", type: "Casamento" },
  { date: "05/12/2026", type: "Casamento" },
  // Adicione novas datas abaixo ↓
];

/**
 * Converte "DD/MM/AAAA" para um objecto Date para comparações
 */
export function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Retorna apenas as datas futuras (a partir de hoje), ordenadas cronologicamente.
 */
export function getUpcomingDates(): BookedDate[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return bookedDates
    .filter((item) => parseDate(item.date) >= today)
    .sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
}
