export function getInitials(name) {
    const parts = name.split(' ').filter(Boolean)
    const first = parts[0]?.[0] ?? ''
    const last = parts[1]?.[0] ?? ''
    return (first + last).toUpperCase()
  }