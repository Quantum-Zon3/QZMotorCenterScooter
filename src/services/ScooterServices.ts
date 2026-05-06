import { ScooterRepository } from "../repositories/ScooterRepository";

export class ScooterService {
  private scooterRepository: ScooterRepository;

  constructor() {
    this.scooterRepository = new ScooterRepository();
  }

  async create(scooter: any) {
    return await this.scooterRepository.create(scooter);
  }

  async findAll() {
    return await this.scooterRepository.findAll();
  }

  async findById(id: number) {
    return await this.scooterRepository.findById(id);
  }

  async update(id: number, scooter: any) {
    return await this.scooterRepository.update(id, scooter);
  }

  async delete(id: number) {
    return await this.scooterRepository.delete(id);
  }
}
