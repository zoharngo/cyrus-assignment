import { computed } from 'easy-peasy';

const INITIAL_STATE = {
  data: {
    items: [],
    user: undefined,
    modalView: {
      visible: false,
      uri: '',
    },
  },
  loading: false,
  itemsCount: computed((state) => state.data.items.length),
};
export default INITIAL_STATE;
