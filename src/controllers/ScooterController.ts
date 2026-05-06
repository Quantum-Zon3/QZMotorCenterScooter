import { Request, Response } from "express";
import { ScooterService } from "../services/ScooterServices";

const scooterService = new ScooterService();

export const createScooter = async (req: Request, res: Response) => {
  try {
    const scooter = await scooterService.create(req.body);
    res.status(201).json(scooter);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const findAllScooters = async (_req: Request, res: Response) => {
  try {
    const scooters = await scooterService.findAll();
    res.json(scooters);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const findScooterById = async (req: Request, res: Response) => {
  try {
    const scooter = await scooterService.findById(Number(req.params.id));
    if (!scooter) {
      return res.status(404).json({ message: "Scooter not found" });
    }
    res.json(scooter);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateScooter = async (req: Request, res: Response) => {
  try {
    const scooter = await scooterService.update(Number(req.params.id), req.body);
    res.json(scooter);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteScooter = async (req: Request, res: Response) => {
  try {
    const scooter = await scooterService.delete(Number(req.params.id));
    res.json(scooter);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
