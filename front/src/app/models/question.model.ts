export interface Question {
  id: number;
  text: string;
  fieldType: 'text' | 'radio' | 'checkbox' | 'select' | 'number';
  options?: { label: string, value: any }[];
}
