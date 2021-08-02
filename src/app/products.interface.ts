export interface Products {
  images: Image[];
  _id?: string;
  name: string;
  sku: string;
  price: number;
  discount: number;
  final_price: number;
  stock: number;
  store_id?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

interface Image {
  'image-type': string;
  _id: string;
  url: string;
  product: string;
  key: string;
  created_at: string;
  __v: number;
}