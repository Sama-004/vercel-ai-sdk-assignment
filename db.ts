import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function openDB() {
  return open({
    driver: sqlite3.Database,
    filename: "./chat.db",
  });
}

export async function setupDatabase() {
  const db = await openDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT,
      role TEXT,
      content TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
      feedback TEXT
    )
  `);
}

export default openDB;
