import { stackOverflowSearchActions } from '../../actions';
import INITIAL_STATE from './intial-state';

const stacklOverflowSearchReducer = {
  ...INITIAL_STATE,
  ...stackOverflowSearchActions,
};
export default stacklOverflowSearchReducer;
