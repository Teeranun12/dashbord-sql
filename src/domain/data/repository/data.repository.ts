import client from "../../../config/datasource";

export class DataRepository {
  async gatDataByRepo(repo: string) {
    const result = await client.query(
      `SELECT * FROM ${repo.toString()} LIMIT 20;`
    );

    return result.rows;
  }

  async gatAllData() {
    const result = await client.query(
      `SELECT table_name , column_name , data_type FROM information_schema.columns WHERE table_schema = 'public' order by table_name desc;`
    );

    return result.rows;
  }
}
