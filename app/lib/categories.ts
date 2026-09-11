import { getDBConnection } from "./db";

export async function getCatgories() {
  const db = await getDBConnection();

  try {
    return await db.all("SELECT * FROM categories");
  } finally {
    await db.close();
  }
}
