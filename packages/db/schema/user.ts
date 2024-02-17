import { date, pgTable, serial, text } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
	id: serial("id").primaryKey(),
	name: text("name"),
	email: text("email"),
	createdAt: date("created_at", { mode: "date" }).defaultNow(),
	updatedAt: date("updated_at", { mode: "date" }),
});
