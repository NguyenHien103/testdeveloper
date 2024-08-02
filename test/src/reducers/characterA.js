const initialState = {
    points: 1
};

const characterAReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UP_A':
            return {
                ...state,
                points: state.points + 1
            };
        case 'RESET_A':
            return initialState;
        default:
            return state;
    }
};

export default characterAReducer;
