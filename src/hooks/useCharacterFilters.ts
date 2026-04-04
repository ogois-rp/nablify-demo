import { useState } from 'react'

export function useCharacterFilters() {
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [page, setPage] = useState(1)

  const handleStatusChange = (value: string) => {
    setStatus(value)
    setPage(1)
  }

  const handleSpeciesChange = (value: string) => {
    setSpecies(value)
    setPage(1)
  }

  return {
    status,
    species,
    page,
    setPage,
    handleStatusChange,
    handleSpeciesChange,
  }
}