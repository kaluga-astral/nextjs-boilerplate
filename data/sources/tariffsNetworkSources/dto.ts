export type TariffNetworkDTO = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type TariffListNetworkDTO = {
  data: TariffNetworkDTO[];
  total: number;
};
