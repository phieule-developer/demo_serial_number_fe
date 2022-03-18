const initialState = [
];

const logReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LOG_FAILED":
            return [];
        case "GET_LOG_SUCCESS":
            state = action.payload;
            return [...state];
        default:
            return [];
    }
}
export default logReducer;