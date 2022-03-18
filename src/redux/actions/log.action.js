
const types = {
    GET_LOGS: 'GET_LOGS'

}

const actions = {
    getAll: () => {
        return {
            type: types.GET_LOGS,
            payload: {}
        }
    }
}

const logActions = { actions, types };

export default logActions;