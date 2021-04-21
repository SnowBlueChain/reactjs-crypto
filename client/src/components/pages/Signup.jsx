import React, { useState } from 'react'
import api from '../../api'

export default function Signup(props) {
  const [state, setState] = useState({
    username: '',
    name: '',
    password: '',
    message: null,
  })

  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()
    let data = {
      username: state.username,
      name: state.name,
      password: state.password,
      accountNumber: "Must Submit when ehtereum wallet intergration is on",
      profilePictureUrl: "www.fcebook.cmo",
      email: state.email,
      pictureHashes: "29343903",
      bio: state.bio,
      dob: state.dob
    }
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!')
        props.history.push('/') // Redirect to the home page
      })
      .catch(err => setState({ message: err.toString() }))
  }
  return (
    <div className="Signup">
      <h2>Signup</h2>
      <form>
        Username:{' '}
        <input
          type="text"
          value={state.username}
          name="username"
          onChange={handleInputChange}
        />{' '}
        <br />
        Name:{' '}
        <input
          type="text"
          value={state.name}
          name="name"
          onChange={handleInputChange}
        />{' '}
        <br />
        Password:{' '}
        <input
          type="password"
          value={state.password}
          name="password"
          onChange={handleInputChange}
        />{' '}
        <br />
        <button onClick={e => handleClick(e)}>Signup</button>
      </form>
      {state.message && <div className="info info-danger">{state.message}</div>}
    </div>
  )
}
