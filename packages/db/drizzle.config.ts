export default {
	schema: "./schema/*",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString:
			process.env.DATABASE_URL || "postgres://localhost:5432/drizzle",
	},
	// breakpoints: true,
	// verbose: true,
};
