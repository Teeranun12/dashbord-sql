import pool from "../../config/datasource";

export const queryDatabase = async (queryText: string, params?: string[]) => {
  const client = await pool.connect();
  try {
    const res = await client.query(queryText, params);
    return res.rows;
  } catch (err) {
    console.error('Query error', err);
    throw err;
  } finally {
    client.release();
  }
};
