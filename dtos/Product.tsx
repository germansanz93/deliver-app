import Decimal from 'decimal.js';

export type Product = {
  id: string; 
  name: string; 
  price: Decimal; 
  mediaUrl: string, 
  quantity: Decimal, 
  units: {label:string, step: Decimal}[]
}