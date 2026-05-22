package db

import (
	"context"
	"database/sql"
)

func CreateTables(ctx context.Context, conn *sql.DB) error {
	schema := `
	CREATE TABLE IF NOT EXISTS games (
		id UUID PRIMARY KEY,
		apocalypse TEXT,
		size INTEGER,
		time INTEGER,
		food INTEGER,
		place TEXT,
		rooms TEXT,
		resources TEXT
	);

	CREATE TABLE IF NOT EXISTS characters (
		id UUID PRIMARY KEY,
		game_id UUID NOT NULL REFERENCES games(id) ON DELETE CASCADE,
		main TEXT,
		body TEXT,
		health TEXT,
		job TEXT,
		hobby TEXT,
		phobia TEXT,
		item TEXT,
		info TEXT,
		ability TEXT
	);

	CREATE TABLE IF NOT EXISTS apocalypses(val TEXT PRIMARY KEY);
	CREATE TABLE IF NOT EXISTS places(val TEXT PRIMARY KEY);
	CREATE TABLE IF NOT EXISTS rooms(val TEXT PRIMARY KEY);
	CREATE TABLE IF NOT EXISTS resources(val TEXT PRIMARY KEY);
	CREATE TABLE IF NOT EXISTS bodies (val TEXT PRIMARY KEY);
	CREATE TABLE IF NOT EXISTS health (val TEXT PRIMARY KEY);
	CREATE TABLE IF NOT EXISTS jobs (val TEXT PRIMARY KEY);
	CREATE TABLE IF NOT EXISTS hobbies (val TEXT PRIMARY KEY);
	CREATE TABLE IF NOT EXISTS phobias (val TEXT PRIMARY KEY);
	CREATE TABLE IF NOT EXISTS items (val TEXT PRIMARY KEY);
	CREATE TABLE IF NOT EXISTS info (val TEXT PRIMARY KEY);
	CREATE TABLE IF NOT EXISTS abilities (val TEXT PRIMARY KEY);
	`

	_, err := conn.ExecContext(ctx, schema)
	return err
}
