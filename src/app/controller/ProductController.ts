import ProductService from '../service/ProductService';

class ProductController {
  async create(req, res) {
    try {
      const result = await ProductService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const result = await ProductService.findAll(req.query);
      if (result.length === 0) {
        return res.status(404).json({ message: 'No products found' });
      }
      return res.status(200).json(result);
    } catch (error) {
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
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.description, message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const payload = req.body;
      const result = await ProductService.update(id, payload);
      return res.status(200).json(result);
    } catch (error) {
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
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new ProductController();
