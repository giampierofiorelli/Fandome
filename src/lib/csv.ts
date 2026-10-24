// Minimal CSV parser (quoted fields, doubled quotes, \n or \r\n). Drops empty lines.
export function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ''
  let q = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (q) {
      if (c === '"' && text[i + 1] === '"') (cell += '"'), i++
      else if (c === '"') q = false
      else cell += c
    } else if (c === '"') q = true
    else if (c === ',') row.push(cell), (cell = '')
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(cell), rows.push(row), (row = []), (cell = '')
    } else cell += c
  }
  if (cell || row.length) row.push(cell), rows.push(row)
  return rows.filter((r) => r.some((x) => x.trim()))
}
