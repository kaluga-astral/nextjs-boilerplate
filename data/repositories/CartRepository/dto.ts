import { CartNetworkSourcesDTO } from '../../sources';

export namespace CartRepositoryDTO {
  export type AddGoodsToCartInputDTO = CartNetworkSourcesDTO.AddGoodsInputDTO;
  export type RemoveGoodsFromCartInputDTO =
    CartNetworkSourcesDTO.RemoveGoodsInputDTO;
  export type GoodsItemDTO = CartNetworkSourcesDTO.CartGoodsItemDTO;
  export type GoodsDTO = CartNetworkSourcesDTO.CartGoodsDTO['data'];
  export type GoodsCountDTO = CartNetworkSourcesDTO.GoodsCountDTO;
}
