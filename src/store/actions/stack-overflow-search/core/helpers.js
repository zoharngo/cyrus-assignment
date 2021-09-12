function bakeUserAvatarProfile(items = []) {
  if (!items.length) {
    return undefined;
  }
  const {
    user_id: userId,
    profile_image: profileImage = '',
    display_name: displayName = '',
    accept_rate: acceptRate = '',
    reputation = '',
  } = items[0]?.owner;

  return {
    userId,
    profileImage,
    displayName,
    acceptRate,
    reputation,
  };
}

function bakeUserQuestionsList(items = []) {
  return items.map((question) => {
    const {
      title,
      link,
      question_id: questionId,
      answer_count: answerCount,
      creation_date: creationDate,
      view_count: viewCount,
    } = question;
    return {
      title,
      link,
      questionId,
      answerCount,
      creationDate,
      viewCount,
    };
  });
}

export { bakeUserAvatarProfile, bakeUserQuestionsList };
