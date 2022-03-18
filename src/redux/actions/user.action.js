
const types = {
    GET_USERS: 'GET_USERS'

}

const actions = {
    getAll: () => {
        return {
            type: types.GET_USERS,
            payload: {}
        }
    }
}

const userActions = { actions, types };

export default userActions;