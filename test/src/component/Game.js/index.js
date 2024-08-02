import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { upA,resetA } from '../../actions/characterA';
import { upB, resetB } from '../../actions/characterB';
import Box from '../Box';
const Game = () => {
    const pointsA = useSelector(state => state.characterA.points);
    const pointsB = useSelector(state => state.characterB.points);
    const dispatch = useDispatch();

    const handleClick = () => {
        const randomCharacter = Math.random() < 0.5 ? 'A' : 'B';
        if (randomCharacter === 'A') {
            dispatch(upA());
        } else {
            dispatch(upB());
        }
    };

    const handleReset = () => {
        dispatch(resetA());
        dispatch(resetB());
    };

    let message = 'Same point';
    if (pointsA > pointsB) {
        message = 'A is winning';
    } else if (pointsA < pointsB) {
        message = 'B is winning';
    }
    const renderBoxes = (count) => {
        const boxes = [];
        for (let i = 0; i < count; i++) {
            boxes.push(<Box key={i} />);
        }
        return boxes;
    };

    return (
        <div>
            <h1>{message}</h1>
            <p>A: {renderBoxes(pointsA)}</p>
            <p>B: {renderBoxes(pointsB)}</p>
            <button onClick={handleClick}>Race</button>
            {(pointsA > 1 || pointsB > 1) && <button onClick={handleReset}>Reset</button>}
        </div>
    );
};

export default Game;
