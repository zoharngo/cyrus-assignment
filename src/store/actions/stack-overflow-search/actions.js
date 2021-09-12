import { action, thunk } from 'easy-peasy';
import { clearState, getQuestionByUserId, saveData, setIsLoading, showModal, sortBy } from './core/actions';

const showModalAction = action(showModal);

const saveDataAction = action(saveData);

const clearStateAction = action(clearState);

const setIsLoadingAction = action(setIsLoading);

const sortByAction = action(sortBy);

const getQuestionByUserIdAction = thunk(getQuestionByUserId);

export default {
  saveDataAction,
  setIsLoadingAction,
  getQuestionByUserIdAction,
  sortByAction,
  clearStateAction,
  showModalAction
};
