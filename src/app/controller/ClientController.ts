import ClientService from "../service/ClientService"

class ClientController {
  async create(req, res) {
    try {
      const result = await ClientService.create(req.body)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(400).json({error: error.description, message: error.message})
    }
  }

  async findAll(req, res) {
    try {
      const result = await ClientService.findAll(req.query)
      if (result.length === 0) {
        return res.status(404).json({message: "No clients found"})
      }
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json({error: error.description, message: error.message})
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params
      const result = await ClientService.findById(id)
      if (!result) {
        return res.status(404).json({message: "Client not found"})
      }
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json({error: error.description, message: error.message})
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const payload = req.body
      const result = await ClientService.update(id, payload)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(404).json({error: error.description, message: error.message})
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params
      const result = await ClientService.delete(id)
      if (!result) {
        return res.status(404).json({message: "Client not found"})
      }
      return res.status(204).json(result)
    } catch (error) {
      return res.status(400).end()
    }
  }


}

export default new ClientController