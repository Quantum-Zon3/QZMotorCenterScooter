import Scooter from "../models/Scooter";

export class ScooterRepository {
  async findAll() {
    return await Scooter.findAll();
  }

  async findById(id: number) {
    return await Scooter.findByPk(id);
  }

  async create(scooter: any) {
    return await Scooter.create(scooter);
  }

  async update(id: number, scooter: any) {
    return await Scooter.update(scooter, { where: { id } });
  }

  async delete(id: number) {
    return await Scooter.destroy({ where: { id } });
  }
}
