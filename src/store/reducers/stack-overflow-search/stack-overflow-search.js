import { computed } from 'easy-peasy';
import stackOverflowSearch from '../../actions/stack-overflow-search/stack-overflow-search';

const stacklOverflowSearchReducer = {
  questions: [],
  loading: false,
  user: undefined,
  questionsCount: computed((state) => state.questions.length),
  sortBy: stackOverflowSearch.sortBy,
  saveQuestions: stackOverflowSearch.saveQuestions,
  saveAvatar: stackOverflowSearch.saveAvatar,
  setIsLoading: stackOverflowSearch.setIsLoading,
  getQuestionByUserId: stackOverflowSearch.getQuestionByUserId,
};
export default stacklOverflowSearchReducer;
