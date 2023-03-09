export const validateUser = hash => {
  bcrypt
    .compare(password, hash)
    .then(res => {
      console.log(`validate`, res) // return true
    })
    .catch(err => console.error(err.message))
}
