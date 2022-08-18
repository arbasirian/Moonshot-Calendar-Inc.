import axios from 'axios';
import { LunchListFilter, LunchModel } from 'common/models';

export const getLunchList = async (
  filter: LunchListFilter
): Promise<LunchModel> => {
  const { data } = await axios.get<LunchModel>('launch', {
    params: filter,
  });

  return data;
};
