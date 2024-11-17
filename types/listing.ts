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
   id: number;
   title: string;
   type: string;
   location: Location;
   price: number;
   bedrooms: string;
   bathrooms: string;
   size_sqft: number;
   features: string[];
   images: string[];
   image: string;
   listing_type: string;
   contact: Contact;
   description: string;
 }
 