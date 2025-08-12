export function collectLeafIds(node) {
    if (!node.children || node.children.length === 0) {
      return node.type === 'person' ? [node.id] : []
    }
    return node.children.flatMap(collectLeafIds)
  }

//  export function computeNodeState(node, categoryId, selectedByCategory) {
//     const selectedSet = selectedByCategory[categoryId]
//     if (node.type === 'person') {
//       return selectedSet.has(node.id) ? 'checked' : 'unchecked'
//     }
//     const leaves = collectLeafIds(node)
//     if (leaves.length === 0) return 'unchecked'
//     let selectedCount = 0
//     for (const leafId of leaves) {
//       if (selectedSet.has(leafId)) selectedCount += 1
//     }
//     if (selectedCount === 0) return 'unchecked'
//     if (selectedCount === leaves.length) return 'checked'
//     return 'indeterminate'
//   }