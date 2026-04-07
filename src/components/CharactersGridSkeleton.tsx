import { CardSkeleton } from './CardSkeleton'

export function CharactersGridSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 20 }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}