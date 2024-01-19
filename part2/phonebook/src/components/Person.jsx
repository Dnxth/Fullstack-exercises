import PropTypes from 'prop-types'

import { DeleteBtn } from './DeleteBtn'

export const Person = ({ person, setPersons, persons }) => {
  return (
    <p>
      {person.name} {person.number}{' '}
      <DeleteBtn person={person} setPersons={setPersons} persons={persons} />
    </p>
  )
}

Person.propTypes = {
  person: PropTypes.object,
  setPersons: PropTypes.func,
  persons: PropTypes.array
}
