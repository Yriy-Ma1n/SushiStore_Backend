import { Router } from "express"



import { getProducts, getProduct, getProductByQueryParams } from "../controllers/ProductController"

export const router = Router()

router.get('/', getProducts)

router.get('/:id', getProduct)

router.get('/range', getProductByQueryParams)