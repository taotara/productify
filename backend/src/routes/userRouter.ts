import { Router } from "express";
import { syncUser } from "../controllers/userController.ts";
import { requireAuth } from "@clerk/express";

const router = Router();

// /api/users/sync  -POST => Syncs the user data from Clerk to the database

router.post("/sync", requireAuth(), syncUser);

export default router;