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
 
// ../../../types/listing.ts

export interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  size: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  images?: string[]; // Optional
  type?: string;
  size_sqft?: number;
  features?: string[];
  image?: string; // Optional
}


