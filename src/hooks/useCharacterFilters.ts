import { useState } from 'react'

export function useCharacterFilters() {
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [name, setName] = useState('')
  const [page, setPage] = useState(1)

  const handleStatusChange = (value: string) => {
    setStatus(value)
    setPage(1)
  }

  const handleSpeciesChange = (value: string) => {
    setSpecies(value)
    setPage(1)
  }

  const handleNameChange = (value: string) => {
    setName(value)
    setPage(1)
  }

  return {
    status,
    species,
    name,
    page,
    setPage,
    handleStatusChange,
    handleSpeciesChange,
    handleNameChange,
  }
}