import React from 'react'
import MaterialTable from 'material-table'

function UsersList() {
  const usersTable = [{}]
  const columns = [
    { title: 'Id', field: 'id' },
    { title: 'Użytkownik', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Uprawnienia', field: 'role' },
  ]

  return (
    <>
      <div>test</div>
      <MaterialTable columns={columns} data={usersTable} title="Użytkownicy" />
    </>
  )
}

export default UsersList
