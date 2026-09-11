import { getDBConnection } from "../../lib/db";
import categories from "../../lib/data/categories.json";

async function seedCategories() {
  const db = await getDBConnection();

  // Create the categories table

  await db.exec(`
        CREATE TABLE IF NOT EXISTS categories (
        displayName TEXT NOT NULL,
        slug TEXT NOT NULL );
        `);

  const insertCategory = await db.prepare(`
        INSERT OR REPLACE INTO categories (
        displayName,
        slug) VALUES (?,?)`);

  for (const category of categories) {

    await insertCategory.run(
        category.displayName,
        category.slug
    );
  }

  await insertCategory.finalize();
  await db.close();

  console.log("Categories seeded successfully");

  

}

seedCategories().catch((error) => {
	console.error("Seeding failed: ", error)
})

