import ClientService from "../service/ClientService"

class ClientController {
  async create(req, res) {
    try {
      const result = await ClientService.create(req.body)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}

export default new ClientController