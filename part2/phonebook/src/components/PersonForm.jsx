import { useState } from 'react'
import PropTypes from 'prop-types'

import { addPerson, editPerson } from '../services/persons'

export const PersonForm = ({ persons, setPersons, setMessage }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChangeText = (e) => {
    setNewName(e.target.value)
  }

  const handleChangeNum = (e) => {
    setNewNumber(e.target.value)
  }

  const handleClick = () => {
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    if (newName !== '' && newNumber !== '') {
      if (persons.some((person) => person.name === newPerson.name)) {
        if (
          window.confirm(
            `${newName} is already added to phonebook, replace the old number with a new one ?`
          )
        ) {
          const previousPerson = persons.find(
            (person) => person.name === newName
          )

          editPerson(previousPerson.id, newPerson)
            .then((updatePerson) => {
              setPersons(
                persons.map((person) =>
                  person.name === newName ? updatePerson : person
                )
              )
            })

            .catch(() => {
              setMessage(
                `[ERROR]: ${newName} has already been removed from server`
              )
              setPersons(persons.filter((person) => person.name !== newName))
            })

          setMessage(`${newName} was edited!`)
        }
      } else {
        addPerson(newPerson)
          .then((newAdd) => {
            setPersons([...persons, newAdd])
            setMessage(`${newName} was added!`)
          })
          .catch((error) => {
            setMessage(`[ERROR]: ${error.response.data.error}`)
          })
      }
    }

    setNewName('')
    setNewNumber('')

    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input type="text" onChange={handleChangeText} value={newName} />
      </div>
      <div>
        number:{' '}
        <input type="text" onChange={handleChangeNum} value={newNumber} />
      </div>
      <div>
        <button onClick={handleClick}>add</button>
      </div>
    </form>
  )
}

PersonForm.propTypes = {
  persons: PropTypes.array,
  setPersons: PropTypes.func,
  setMessage: PropTypes.func,
}
