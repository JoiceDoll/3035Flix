import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(dateString?: string) {
  if (!dateString) return "";

  const date = parseISO(dateString);
  return format(date, "dd 'de' MMM 'de' yyyy", { locale: ptBR });
}