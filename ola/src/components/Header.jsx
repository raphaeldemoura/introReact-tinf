import React from 'react'
import './Header.css'

function Header() {
  const [searchTerm , setSearchchTerm] = React.useState('')
  return (
    <div className='Header'> 
        <h1>Buscador de Personagens - Harry Poter</h1>

        <input type="text" 
        placeholder='Digite o nome...'
        value={searchTerm}
        onChange={(e) => setSearchchTerm(e.target.value)}
        className='search'
        />
    </div>
  )
}

export default Header