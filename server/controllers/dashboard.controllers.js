export const dashboardController = {
  getDashboard: (req, res) => {
    const head = req.headers
    console.log(head)
    res.status(200).send({ response: 'Get http sending' })
  },
  postDashboard: (req, res) => {
    const head = req.headers
    console.log(head)
    res.status(200).send("Here's the info you requested")
  }
}

// aca problemas con el cookie y elheader depende cual use
