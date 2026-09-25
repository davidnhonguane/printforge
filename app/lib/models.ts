import { getDBConnection } from "../lib/db";

export async function getModels({
  search,
  sort,
  categorySlug,
}: {
  search?: string;
  sort?: string;
  categorySlug?: string;
}) {
  const db = await getDBConnection();

  let sql = "SELECT * FROM models";
  const placeholders = [];

  if (categorySlug || search) {

    const where = []; 

    if (search) {
      where.push("(name LIKE ? OR description LIKE ?)");
      placeholders.push(`%${search}%`, `%${search}%`);
    }

    if (categorySlug) {
      where.push("category = ?");
      placeholders.push(categorySlug);
    }

    sql += " WHERE " + where.join(" AND ")

  }

  if (sort === "alpha") {
    sql += " ORDER BY name ASC";
  }

  if (sort === "popular") {
    sql += " ORDER BY likes DESC";
  }

  if (sort === "recent") {
    sql += " ORDER BY dateAdded DESC";
  }

  try {
    return await db.all(sql, placeholders);
  } catch (error) {
    console.log("sort:", sort);
    console.log("SQL:", sql);
    console.log("categories: ", categorySlug);

    await db.close();
  }
}

export async function getSingleModelById(id: string) {
  const db = await getDBConnection();

  try {
    return await db.get("SELECT * FROM models WHERE id = ?", id);
  } catch {
    await db.close;
  }
}
