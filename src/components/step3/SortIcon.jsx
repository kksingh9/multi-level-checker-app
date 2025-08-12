import { ArrowUpDown, ChevronDown, ChevronUp } from 'lucide-react'

export function SortIcon({ active, direction }) {
    if (!active) return <ArrowUpDown className="w-4 h-4 text-gray-400" />
    return direction === 'asc' ? (
      <ChevronUp className="w-4 h-4 text-gray-700" />
    ) : (
      <ChevronDown className="w-4 h-4 text-gray-700" />
    )
  }