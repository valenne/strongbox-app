export const loginController = {
  getLogin: (req, res) => {
    res.status(200).send(`Render Login page`)
  },
  postLogin: (req, res) => {
    res.status(200).send(`Login the user with credentials`)
  }
}
