export type BacklogNetworkDTO = {
  totalCount: number;
  list: Pick<BacklogItemNetworkDTO, 'id' | 'title' | 'storyPoints'>[] | [];
};

export type BacklogItemNetworkDTO = {
  assignee: string;
  creator: string;
  description: string;
  id: string;
  storyPoints: number;
  title: string;
};

export type CreateBacklogItemNetworkInputDTO = {
  theme: string;
  description: string;
};
