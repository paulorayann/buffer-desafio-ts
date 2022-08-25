import ProductService from '../service/ProductService';
import logger from '../../logger';

class ProductController {
  async create(req, res) {
    try {
      const result = await ProductService.create(req.body);
      logger.log('info', 'Successfully created product');
      return res.status(201).json(result);
    } catch (error) {
      logger.log('error', 'Error creating product');
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const result = await ProductService.findAll(req.query);
      if (result.length === 0) {
        logger.log('error', 'No products in the database');
        return res.status(404).json({ message: 'No products found' });
      }
      logger.log('info', 'Successfully found products');
      return res.status(200).json(result);
    } catch (error) {
      logger.log('error', 'Error finding products');
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const result = await ProductService.findById(id);
      if (!result) {
        return res.status(404).json({ message: 'Product not found' });
      }
      logger.log('info', 'Successfully found product by ID');
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
      const result = await ProductService.update(id, payload);
      logger.log('info', 'Successfully updated product');
      return res.status(200).json(result);
    } catch (error) {
      logger.log('error', 'Error updating product');
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await ProductService.delete(id);
      if (!result) {
        return res.status(404).json({ message: 'Product not found' });
      }
      logger.log('info', 'Successfully deleted client');
      return res.status(204).send();
    } catch (error) {
      logger.log('error', 'Error deleting client');
      return res.status(500).json(error);
    }
  }
}

export default new ProductController();
