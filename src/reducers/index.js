import * as consts from '../actions/constans';
const initialState = [];

function TaskReducer (state = initialState, action) {
    switch(action.type) {
        case consts.ADD_TASK:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    done: false
                }
            ]
        case consts.TOGGLE_TASK:
            return state.map((task) => 
            (task.id === action.payload.id) ? { ...task, done: !task.done } : task)
        default:
            return state;
    }
        
}

export default TaskReducer;