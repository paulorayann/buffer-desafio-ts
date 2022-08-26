import SaleService from '../service/SaleService';
import logger from '../../logger';

class SaleController {
  async create(req, res) {
    try {
      const result = await SaleService.create(req.body);
      logger.log('info', 'Successfully created sale');
      return res.status(201).json(result);
    } catch (error) {
      logger.log('error', 'Error creating sale');
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const result = await SaleService.findAll(req.query);
      if (result.length === 0) {
        logger.log('error', 'No sales in the database');
        return res.status(404).json({ message: 'No sale found' });
      }
      logger.log('info', 'Successfully found sales');
      return res.status(200).json(result);
    } catch (error) {
      logger.log('error', 'Error finding sales');
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const result = await SaleService.findById(id);
      if (!result) {
        return res.status(404).json({ message: 'Sale not found' });
      }
      logger.log('info', 'Successfully found sale by ID');
      return res.status(200).json(result);
    } catch (error) {
      logger.log('error', 'Error finding sale by ID');
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const payload = req.body;
      const result = await SaleService.update(id, payload);
      logger.log('info', 'Successfully updated sale');
      return res.status(200).json(result);
    } catch (error) {
      logger.log('error', 'Error updating sale');
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await SaleService.delete(id);
      if (!result) {
        return res.status(404).json({ message: 'Sale not found' });
      }
      logger.log('info', 'Successfully deleted sale');
      return res.status(204).send();
    } catch (error) {
      logger.log('error', 'Error deleting sale');
      return res.status(500).json(error);
    }
  }
}

export default new SaleController();
