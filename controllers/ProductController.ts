
import type { Request, Response, NextFunction } from "express";

import { fetchProduct, fetchProducts } from "../services/ProductService.js";


//function for route
export async function getProducts(req: Request, res: Response, next: NextFunction) {

    try {
        const products = await fetchProducts()
        
        res.json(products)
    } catch (error) {
        
        next(error)
    }

}
//function for route
export async function getProduct(req: Request, res: Response, next: NextFunction) {
    try {
        const product = await fetchProduct(req.params.id)

        res.json(product)
    } catch (error) {
        next(error)
    }
}