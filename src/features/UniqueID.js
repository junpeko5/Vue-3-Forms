let UUID = 0

const UniqueID = () => {
  const getID = () => {
    UUID++
    return UUID
  }

  return {
    getID
  }
}

export default UniqueID
