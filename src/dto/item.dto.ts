export interface CreateItemDto {
  name: string;
  price: number;
  quantity: number;
}

export interface UpdateItemDto {
  name?: string;
  price?: number;
  quantity?: number;
}
