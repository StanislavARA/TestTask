const SET_USER_DATA = "SET_USER_DATA"
let initialState = {

    login: "Admin",
    password: "admin",
    isAuth: false,

};

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            if (action.data.login === state.login && action.data.password === state.password) {

                return { ...state, isAuth: true }
            }
            return state;
        }
        default:
            return state;
    }
}

export const setUserData = (login, password) => ({ type: SET_USER_DATA, data: { login, password } })

export default loginReducer