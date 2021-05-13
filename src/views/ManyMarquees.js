import React from 'react';
const ManyMarquees = (props) => {
    return(
        <div>
            <h1>{isNaN(props.word)?`word:${props.word}`:`Number:${props.word}`}</h1>
            <h1> Main ManyMarquees route</h1>
        </div>
    )
}
export default ManyMarquees
