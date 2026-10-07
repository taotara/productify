import { Router } from "express";
import * as productController from "../controllers/productController.ts";
import { requireAuth } from "@clerk/express";

const router = Router();

// GET /api/products - GET => Get all products (Public)
router.get("/", productController.getAllProducts);

// GET /products/my - Get current user's procudts (Protected)
router.get("/my", requireAuth(), productController.getMyProducts);

// GET /api/products/:id - GET => Get single product by ID (Public)
router.get("/:id", productController.getProductById);

// POST /api/products - Create new product (Protected)
router.post("/", requireAuth(), productController.createProduct);

// PUT /api/products/:id - Update product by ID (Protected)
router.put("/:id", requireAuth(), productController.updateProduct);

// DELETE /api/products/:id - Delete product by ID (Protected)
router.delete("/:id", requireAuth(), productController.deleteProduct);

export default router;
