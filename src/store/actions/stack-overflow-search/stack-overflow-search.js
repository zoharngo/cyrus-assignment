import { action, thunk } from 'easy-peasy';
import { Alert } from 'native-base';

const saveQuestions = action((state, payload) => {
  const { items = [] } = payload;
  if (!items.length) {
    state.questions = [];
    return;
  }
  const questions = items.map((question) => {
    const { title, question_id } = question;
    return {
      title,
      questionId: question_id,
    };
  });
  state.questions = questions;
});

const saveAvatar = action((state, payload) => {
  const { items = [] } = payload;
  if (!items.length) {
    state.user = null;
    console.log('empty user');
    return;
  }
  const { profile_image = '', display_name = '', reputation = '', accept_rate = '' } = items[0]?.owner;
  state.user = {
    displayName: display_name,
    acceptRate: accept_rate,
    profileImage: profile_image,
    reputation,
  };
});

const setIsLoading = action((state, payload) => {
  state.loading = payload;
});

const getQuestionByUserId = thunk(async (actions, payload) => {
  try {
    const res = await fetch(
      `https://api.stackexchange.com/2.3/users/${payload}/questions?order=desc&sort=activity&site=stackoverflow`
    );
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const questions = await res.json();
    actions.saveQuestions(questions);
    actions.saveAvatar(questions);
  } catch (err) {
    Alert.
    console.error(err);
  }
});

export default {
  saveQuestions,
  saveAvatar,
  setIsLoading,
  getQuestionByUserId,
};