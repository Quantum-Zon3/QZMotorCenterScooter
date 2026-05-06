import { Router } from "express";
import {
  createScooter,
  deleteScooter,
  findAllScooters,
  findScooterById,
  updateScooter,
} from "../controllers/ScooterController";

const router = Router();

router.get("/scooters", findAllScooters);
router.post("/scooters", createScooter);
router.get("/scooters/:id", findScooterById);
router.put("/scooters/:id", updateScooter);
router.delete("/scooters/:id", deleteScooter);

export default router;
