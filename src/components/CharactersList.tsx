import { useState } from 'react'
import { useQuery } from '@apollo/client/react'
import { CHARACTERS_QUERY } from '../queries/characters'
import { FilterBar } from './FilterBar'
import { CharacterCard } from './CharacterCard'
import { Pagination } from './Pagination'
import { useCharacterFilters } from '../hooks/useCharacterFilters'
import { CharacterModal } from './CharacterModal'
import { CharactersGridSkeleton } from './CharactersGridSkeleton'

export function CharactersList() {
  const { status, species, name, page, setPage, handleStatusChange, handleSpeciesChange, handleNameChange } = useCharacterFilters()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: {
      page,
      status: status || null,
      species: species || null,
      name: name || null,
    },
  })

  const hasResults = (data?.characters?.results?.length ?? 0) > 0

  if (error) return <p className="text-center mt-10 text-red-500">Error: {error.message}</p>
  if (loading) return (
  <div>
    <FilterBar
      status={status}
      species={species}
      name={name}
      onStatusChange={handleStatusChange}
      onSpeciesChange={handleSpeciesChange}
      onNameChange={handleNameChange}
    />
    <CharactersGridSkeleton />
  </div>
)

  const info = data?.characters?.info

  return (
    <div>
      <FilterBar
        status={status}
        species={species}
        name={name}
        onStatusChange={handleStatusChange}
        onSpeciesChange={handleSpeciesChange}
        onNameChange={handleNameChange}
      />

      {!hasResults ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-4xl mb-4">🔭</p>
          <p className="text-gray-900 font-medium mb-1">No characters found</p>
          <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
        </div>
      ) : (
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
      )}

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