import { ResultsInterface } from '../../shared/types';

export function getResultStorage(): ResultsInterface | any {
  const results = localStorage.getItem('results');

  return results ? JSON.parse(results) : null;
}

export function setResultStorage(result: Array<string | number>): void {
  localStorage.setItem('results', JSON.stringify(result));
}

export function clearResult(): void {
  localStorage.removeItem('results');
}
