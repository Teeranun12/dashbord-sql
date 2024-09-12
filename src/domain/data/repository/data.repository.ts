import { queryDatabase } from "./../../../util/helper/dbhelper";
import { paginate } from "../../../util/helper/pagination";

export class DataRepository {
  async getDataByRepo(repo: string, query?: string) {
    const queryText = `SELECT * FROM ${repo} ORDER BY id DESC`;
    const data = await queryDatabase(queryText);

    if (query === "export") {
      return data;
    }
    const result = paginate(data, 1, 20);
    return result;
  }

  async getAllData() {
    const queryText = `
      SELECT table_name, column_name, data_type 
      FROM information_schema.columns 
      WHERE table_schema = 'public' 
      ORDER BY table_name DESC;`;

    return await queryDatabase(queryText);
  }

  async getBaseByTable(table: string) {
    const queryText = `
      SELECT table_name, column_name, data_type 
      FROM information_schema.columns 
      WHERE table_schema = 'public' 
      AND table_name = '${table}'
      ORDER BY table_name DESC;`;

    return await queryDatabase(queryText);
  }
}
