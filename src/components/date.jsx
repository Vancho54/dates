import React from 'react';

const date = ({date, deleteDate}) => (
    <div className='cita'>
        <p>Pet: <span>{date.pet}</span></p>
        <p>Owner: <span>{date.owner}</span></p>
        <p>Date: <span>{date.date}</span></p>
        <p>Time: <span>{date.time}</span></p>
        <p>Sinthoms: <span>{date.sinthoms}</span></p>

        <button 
            className='button eliminar u-full-width'
            onClick={ () => deleteDate(date.id)}
            >
            Delete Date
        </button>
    </div>
);

export default date;