import { SORT_BY } from '../../../../components/sort-bar/constants';
import INITIAL_STATE from '../../../reducers/stack-overflow-search/intial-state';
import { bakeUserAvatarProfile, bakeUserQuestionsList } from './helpers';


export function showModal(state, payload) {
  state.data.modalView = payload;
}

export function clearState(state) {
  state.data = INITIAL_STATE.data;
}

export function saveData(state, payload) {
  const { items = [] } = payload;
  if (!items.length) {
    clearState(state);
    return;
  }
  state.data.items = bakeUserQuestionsList(items);
  state.data.user = bakeUserAvatarProfile(items);
}

export function setIsLoading(state, payload) {
  state.loading = payload;
}

export function sortBy(state, payload = SORT_BY.date) {
  state.data.items.sort((q1, q2) => q1[payload] - q2[payload]);
}

export async function getQuestionByUserId(actions, payload) {
  try {
    const res = await fetch(
      `https://api.stackexchange.com/2.3/users/${payload}/questions?order=desc&sort=activity&site=stackoverflow`
    );
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const questions = await res.json();
    actions.saveDataAction(questions);
  } catch (err) {
    console.error(err);
  }
}
