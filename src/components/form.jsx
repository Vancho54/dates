import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4'

const Form = ({createDate}) => {

    const [dates, setDate] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        sinthoms: ''
    });

    const [error, setError] = useState(false)

    const submitForm = e => {
        e.preventDefault();
        
        if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || sinthoms.trim() === '') {
            setError(true);
            return
        }

        setError(false)
        dates.id = uuid()

        createDate(dates)

        setDate({
            pet: '',
            owner: '',
            date: '',
            time: '',
            sinthoms: ''
        })
    }

    const handleChange = e => {
        setDate({
            ...dates,
            [e.target.name]: e.target.value
        })
    };

    const { pet, owner, date, time, sinthoms } = dates

    return (
        <Fragment>
            <h2>Create Date</h2>
            {error 
            ? 
            <p className='alerta-error'>All field are required</p> 
            : 
            null}
            <form
                onSubmit={submitForm}
            >
                <label>Pet Name</label>
                <input 
                    type='text'
                    name='pet'
                    className='u-full-width'
                    placeholder='Introduce pet name'
                    onChange={handleChange}
                    value={pet}
                />
                <label>Owner Name</label>
                <input 
                    type='text'
                    name='owner'
                    className='u-full-width'
                    placeholder='Introduce your name'
                    onChange={handleChange}
                    value={owner}
                />
                <label>Date</label>
                <input 
                    type='date'
                    name='date'
                    className='u-full-width'
                    onChange={handleChange}
                    value={date}
                />
                <label>Time</label>
                <input 
                    type='time'
                    name='time'
                    className='u-full-width'
                    onChange={handleChange}
                    value={time}
                />
                <label>Sinthoms</label>
                <textarea
                    className='u-full-width'
                    name='sinthoms'    
                    onChange={handleChange}
                    value={sinthoms}
                />
                <button
                    type='submit'
                    className='u-full-width button-primary'
                >
                    Add Date
                </button>
            </form>
        </Fragment>
    );
};

export default Form;