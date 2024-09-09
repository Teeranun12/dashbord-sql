import { queryDatabase } from "../../../util/helper/dbhelper";

export class DataRepository {
  async getDataByRepo(repo: string) {
    const queryText = `SELECT * FROM ${repo} LIMIT 20;`;
    
    return await queryDatabase(queryText);
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
