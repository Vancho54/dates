import React, { useState, useEffect } from 'react'
import Form from './components/form'
import Date from './components/date'


function App() {

  let initialDates = JSON.parse(localStorage.getItem('dates'))

  if (!initialDates) {
    initialDates = []
  }

  const [dates, setDates] = useState(initialDates)

  useEffect( () => {
    if (initialDates) {
      localStorage.setItem('dates', JSON.stringify(dates))
    } else {
      localStorage.setItem('dates', JSON.stringify([]))
    }
  }, [dates, initialDates])

  const createDate = date => {
    setDates([...dates, date])
  }

  const deleteDate = id => {
    const newDates = dates.filter(date => date.id !== id)
    setDates(newDates)
  }

  return (
    <div>
      <h1>Administrador de Citas</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form 
              createDate={createDate}
            />
          </div>
          <div className='one-half column'>
            {dates.length ? <h2>Administra tus citas</h2> : <h2>No hay citas</h2>}
            {dates.map(date => (
              <Date
                date={date}
                key={date.id}
                deleteDate={deleteDate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
