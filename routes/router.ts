import { Router } from "express";

import {
  getProducts,
  getProduct,
  getProductsQuery,
  getRelatedProduct,
} from "../controllers/ProductController";

export const router = Router();

router.get("/", getProducts);

router.get("/range", getProductsQuery);

router.get("/:id", getProduct);

router.get("/:name", getRelatedProduct);
