export function calcularMedia(...notas: number[]): number {
    const total = notas.reduce((soma, nota) => soma + nota, 0);
    return notas.length > 0 ? total / notas.length : 0;
  }