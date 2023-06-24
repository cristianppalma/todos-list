import React from "react";
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? 'green' : 'black'} //si completed es true es verde y si no es negro
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };