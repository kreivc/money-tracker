import { date, pgTable, serial, text } from "drizzle-orm/pg-core";
import { user } from "./user";

export const entry = pgTable("entry", {
	id: serial("id").primaryKey(),
	entryDay: date("entry_day", { mode: "date" }),
	urlFrontPhotoThumbnail: text("url_front_photo_thumbnail"),
	urlFrontPhotoHD: text("url_front_photo_hd"),
	urlBackPhotoThumbnail: text("url_back_photo_thumbnail"),
	urlBackPhotoHD: text("url_back_photo_hd"),
	userId: serial("user_id")
		.notNull()
		.references(() => user.id),
	createdAt: date("created_at", { mode: "date" }).defaultNow(),
	updatedAt: date("updated_at", { mode: "date" }),
});
