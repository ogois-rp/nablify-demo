import { useState } from 'react'
import { useQuery } from '@apollo/client/react'
import { CHARACTERS_QUERY } from '../queries/characters'
import { FilterBar } from './FilterBar'
import { CharacterCard } from './CharacterCard'
import { Pagination } from './Pagination'
import { CharacterModal } from './CharacterModal'

export function CharactersList() {
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [page, setPage] = useState(1)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: {
      page,
      status: status || null,
      species: species || null,
    },
  })

  const handleStatusChange = (value: string) => {
    setStatus(value)
    setPage(1)
  }

  const handleSpeciesChange = (value: string) => {
    setSpecies(value)
    setPage(1)
  }

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error.message}</p>

  const info = data?.characters?.info

  return (
    <div>
      <FilterBar
        status={status}
        species={species}
        onStatusChange={handleStatusChange}
        onSpeciesChange={handleSpeciesChange}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.characters?.results?.map((character) => {
          if (!character) return null
          return (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => setSelectedId(character.id ?? null)}
            />
          )
        })}
      </div>

    <Pagination
      page={page}
      totalPages={info?.pages}
      hasNext={info?.next}
      hasPrev={info?.prev}
      onNext={() => setPage((p) => p + 1)}
      onPrev={() => setPage((p) => p - 1)}
    />

    {selectedId && (
      <CharacterModal
        id={selectedId}
        onClose={() => setSelectedId(null)}
      />
    )}
    </div>
  )
}