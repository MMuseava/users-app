import React from 'react'

const UserRow = ({ user, onDeleteHandler}) => {
    const {id,name, phone, email,website}= user
  return (
      
              <tr>
                  <td>{ id}</td>
                  <td>{ name}</td>
                  <td>{ email}</td>
                  <td>{ phone}</td>
                  <td>{website}</td>
              <td>
                  <button onClick= {()=> onDeleteHandler(id)}>x</button>
                  </td>
              </tr>
  )
}

export default UserRow