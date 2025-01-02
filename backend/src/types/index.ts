export interface City {
  _id?: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface Place {
  _id?: string;
  name: string;
  cityId: string;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface Event {
  _id?: string;
  name: string;
  cityId: string;
  description: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  price: number;
  category: string;
  venue: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface ErrorResponse {
  message: string;
  status: number;
  stack?: string;
} 