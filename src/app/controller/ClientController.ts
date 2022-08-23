import ClientService from '../service/ClientService';
import logger from '../../logger';
class ClientController {
  async create(req, res) {
    try {
      const result = await ClientService.create(req.body);
      logger.log('info', 'Successfully created client');
      return res.status(201).json(result);
    } catch (error) {
      logger.log('error', 'Error creating client');
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const result = await ClientService.findAll(req.query);
      if (result.length === 0) {
        logger.log('error', 'No clients in the database');
        return res.status(404).json({ message: 'No clients found' });
      }
      logger.log('info', 'Successfully found clients');
      return res.status(200).json(result);
    } catch (error) {
      logger.log('error', 'Error finding clients');
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const result = await ClientService.findById(id);
      if (!result) {
        return res.status(404).json({ message: 'Client not found' });
      }
      logger.log('info', 'Successfully found client by ID');
      return res.status(200).json(result);
    } catch (error) {
      logger.log('error', 'Error finding client by ID');
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const payload = req.body;
      const result = await ClientService.update(id, payload);
      logger.log('info', 'Successfully updated client');
      return res.status(200).json(result);
    } catch (error) {
      logger.log('error', 'Error updating client');
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await ClientService.delete(id);
      if (!result) {
        return res.status(404).json({ message: 'Client not found' });
      }
      logger.log('info', 'Successfully deleted client');
      return res.status(204).send();
    } catch (error) {
      logger.log('error', 'Error deleting client');
      return res.status(500).json(error);
    }
  }
}

export default new ClientController();
