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

  async findAll(req, res) {
    try {
      const result = await ClientService.findAll()
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params
      const result = await ClientService.findById(id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params
      const result = await ClientService.delete(id)
      return res.status(204).json(result)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const payload = req.body
      const result = await ClientService.update(id, payload)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }


}

export default new ClientController