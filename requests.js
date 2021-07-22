const getPuzzle = async () => {
  const response = await fetch('https://puzzle.mead.io/puzzle', {})
  if (response.status == 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch puzzle')
  }
}