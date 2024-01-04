export interface Question {
  id: number;
  text: string;
  fieldType: 'text' | 'radio' | 'checkbox' | 'select' | 'number';
  options?: string[]; // Utilisé pour les types radio, checkbox et select
}
