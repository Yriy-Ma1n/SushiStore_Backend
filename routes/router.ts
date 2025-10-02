import { Router } from "express"



import { getProducts, getProduct } from "../controllers/ProductController.js"

export const router = Router()

router.get('/', getProducts)

router.get('/:id', getProduct)