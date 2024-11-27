export interface Location {
   city: string;
   state: string;
   neighborhood: string;
   address: string;
   zip: string;
 }
 
 export interface Contact {
   name: string;
   phone: string;
   email: string;
 }
 
 export interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  size: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  images: string[];
  type?: string;        // Optional fields
  size_sqft?: number;
  features?: string[];
  image?: string;
}
