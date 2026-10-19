// devolve o texto do erro, ou vazio quando o nome serve
export const validatePlayer = (player: string): string => {
  if (player.trim().length < 3) {
    return 'Mínimo de 3 letras';
  }
  return '';
};
