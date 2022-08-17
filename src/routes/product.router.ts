import { Router } from 'express'
import ProductController from '../app/controller/ProductController'
import validateProduct from '../app/validations/product/validateProduct'
import validateProductUpdate from '../app/validations/product/validateProductUpdate'

const router = Router()

router.post('/api/v1/product', validateProduct, ProductController.create)
router.get('/api/v1/product', ProductController.findAll)
router.get('/api/v1/product/:id', ProductController.findById)
router.delete('/api/v1/product/:id', ProductController.delete)
router.put('/api/v1/product/:id', validateProductUpdate ,ProductController.update)

export default router