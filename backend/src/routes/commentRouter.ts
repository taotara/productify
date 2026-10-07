import { Router } from "express";
import * as commentController from "../controllers/commentController.ts";
import { requireAuth } from "@clerk/express";

const router = Router();

// POST /api/comments/:productId - Add comment to product (Protected)
router.post("/:productId", requireAuth(), commentController.createComment);

// DELETE /api/comments/:commentId - Delete comment (Protected - owner only)
router.delete("/:commentId", requireAuth(), commentController.deleteComment);

export default router;
