import { action, thunk } from 'easy-peasy';
import { SORT_BY } from '../../../components/sort-bar/constants';

const saveQuestions = action((state, payload) => {
  const { items = [] } = payload;
  if (!items.length) {
    state.questions = [];
    return;
  }
  const questions = items.map((question) => {
    const {
      title,
      question_id: questionId,
      answer_count: answerCount,
      creation_date: creationDate,
      view_count: viewCount,
    } = question;
    return {
      title,
      questionId,
      answerCount,
      creationDate,
      viewCount,
    };
  });
  state.questions = questions;
});

const saveAvatar = action((state, payload) => {
  const { items = [] } = payload;
  if (!items.length) {
    state.user = undefined;
    return;
  }
  const {
    user_id: userId,
    profile_image: profileImage = '',
    display_name: displayName = '',
    accept_rate: acceptRate = '',
    reputation = '',
  } = items[0]?.owner;

  state.user = {
    userId,
    profileImage,
    displayName,
    acceptRate,
    reputation,
  };
});

const setIsLoading = action((state, payload) => {
  state.loading = payload;
});

const sortBy = action((state, payload = SORT_BY.date) => {
  state.questions.sort((q1, q2) => q1[payload] - q2[payload]);
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
    console.error(err);
  }
});

export default {
  saveQuestions,
  saveAvatar,
  setIsLoading,
  getQuestionByUserId,
  sortBy,
};
