import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/adoptionposts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/adoptionposts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;