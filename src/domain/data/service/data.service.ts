import { DataRepository } from "../repository/data.repository";

export class Domain1Service {
  private databaseRepo: DataRepository;

  constructor() {
    this.databaseRepo = new DataRepository();
  }

  async getDataByRepo(repo: string) {
    return this.databaseRepo.gatDataByRepo(repo);
  }

  async getDataBase() {
    return this.databaseRepo.gatAllData();
  }
}
