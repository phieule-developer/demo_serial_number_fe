const initialState = [
];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_FAILED":
            return [];
        case "GET_USERS_SUCCESS":
            state = action.payload;
            return [...state]
        default:
            return [];
    }
}
export default userReducer;