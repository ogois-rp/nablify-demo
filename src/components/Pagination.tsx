interface PaginationProps {
  page: number
  totalPages?: number | null
  hasNext?: number | null
  hasPrev?: number | null
  onNext: () => void
  onPrev: () => void
}

export function Pagination({ page, totalPages, hasNext, hasPrev, onNext, onPrev }: PaginationProps) {
  return (
    <div className="flex items-center justify-between mt-10">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        Previous
      </button>
      <span className="text-sm text-gray-500">Page {page} of {totalPages}</span>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        Next
      </button>
    </div>
  )
}