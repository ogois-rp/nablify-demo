export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="w-full h-48 skeleton" />
      <div className="p-3">
        <div className="h-4 skeleton rounded w-3/4 mb-2" />
        <div className="h-3 skeleton rounded w-1/2 mb-2" />
        <div className="h-3 skeleton rounded w-2/3" />
      </div>
    </div>
  )
}