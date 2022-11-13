import { ResultsInterface } from '../../shared/types';

export function getResult(): ResultsInterface | null {
  const results = localStorage.getItem('results');
  return results ? JSON.parse(results) : null;
}

export function setResult(result: ResultsInterface): void {
  localStorage.setItem('results', JSON.stringify(result));
}

export function clearResult(): void {
  localStorage.removeItem('results');
}
