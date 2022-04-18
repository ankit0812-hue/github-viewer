import axios from "axios";

export const getProfileDetails = (userName) => {
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      if (request.status === 200 && request.statusText === "OK") {
        const response = request.data;
        return dispatch({
          type: "GET_PROFILE_DETAILS",
          payload: response,
        });
      } else if (request.status === 404) {
        throw new Error("Enter Valid Github User Name");
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const getAllRepositories = (pageNumber, itemsPerPage, userName) => {
  return async (dispatch) => {
    try {
      const request = await axios.get(
        `https://api.github.com/users/${userName}/repos?page=${pageNumber}&per_page=${itemsPerPage}`
      );
      if (request.status === 200 && request.statusText === "OK") {
        const response = request.data;

        return dispatch({
          type: "GET_ALL_REPOSITORIES",
          payload: response,
        });
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};
