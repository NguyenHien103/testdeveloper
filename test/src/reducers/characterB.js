const initialState = {
    points: 1
};

const characterBReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UP_B':
            return {
                ...state,
                points: state.points + 1
            };
        case 'RESET_B':
            return initialState;
        default:
            return state;
    }
};

export default characterBReducer;
