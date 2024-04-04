import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

const GameGrid = () => {
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient.get('/character').then((res) => setCharacters())
  })

  return <div>GameGrid</div>
}

export default GameGrid
