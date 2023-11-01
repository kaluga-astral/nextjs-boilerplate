export namespace CartNetworkSourcesDTO {
  export type AddGoodsInputDTO = string[];

  export type RemoveGoodsInputDTO = string[];

  export type CartGoodsItemDTO = {
    id: string;
    name: string;
    price: number;
    count: number;
  };

  export type CartGoodsDTO = {
    data: CartGoodsItemDTO[];
  };

  export type GoodsCountDTO = number;
}
