import React from 'react';

export default (props) => {


    return (
        <aside>

            <button onClick={props.onSave}>save</button>
            <button onClick={props.onRestore}>restore</button>
            <button onClick={props.onAdd}>add node</button>
        </aside>
    );
};