import React, { useEffect, useState } from 'react'
export default function App() {
  const [users, setUsers] = useState([])
  useEffect(() => { fetch('/api/users').then(r=>r.json()).then(setUsers) }, [])
  return <div><h1>Users</h1><ul>{users.map(u=><li key={u.id}>{u.name}</li>)}</ul></div>
}