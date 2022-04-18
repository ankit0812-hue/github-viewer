const initState = {
  profileInfo: {},
  repositoryList: [],
};

export const RepositoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PROFILE_DETAILS":
      return {
        ...state,
        profileInfo: action.payload,
      };
    case "GET_ALL_REPOSITORIES":
      return {
        ...state,
        repositoryList: action.payload,
      };
    default:
      return state;
  }
};
