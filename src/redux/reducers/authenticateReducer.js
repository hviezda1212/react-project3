let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

function authenticateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
        console.log("login");
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    case "LOG_OUT":
        console.log("logout");
      return {
        ...state,
        authenticate: false,
      };
    default:
      return { ...state };
  }
}

export default authenticateReducer;
