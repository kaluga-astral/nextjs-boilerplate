import { CartSourcesNetworkDTO } from '../../sources';

export namespace CartRepositoryDTO {
  export type AddGoodsToCartInputDTO = CartSourcesNetworkDTO.AddGoodsInputDTO;
  export type RemoveGoodsFromCartInputDTO =
    CartSourcesNetworkDTO.RemoveGoodsInputDTO;
  export type GoodsDTO = CartSourcesNetworkDTO.CartGoodsDTO['data'];
  export type GoodsCountDTO = CartSourcesNetworkDTO.GoodsCountDTO;
}
