export type Product = {
  id: string; 
  name: string; 
  price: number; 
  mediaUrl: string, 
  quantity: number, 
  units: {label:string, step: number}[]
}