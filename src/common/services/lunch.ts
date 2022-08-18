import axios from 'axios';
import { LunchModel } from 'common/models';

export const getLunchList = async (): Promise<LunchModel> => {
  const { data } = await axios.get<LunchModel>(
    'launch/?is_crewed=false&include_suborbital=true&related=false'
  );

  return data;
};
