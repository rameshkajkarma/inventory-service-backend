export interface CreateItemDTO {
  name: string;
  quantity: number;
}

export interface UpdateItemDTO {
  name?: string;
  quantity?: number;
}
