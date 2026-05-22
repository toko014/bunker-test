-- Run this in Railway PostgreSQL Query tab to create all tables

-- 001: Create games table
CREATE TABLE games
(
    id         UUID PRIMARY KEY,
    apocalypse TEXT,
    size       INTEGER,
    time       INTEGER,
    food       INTEGER,
    place      TEXT,
    rooms      TEXT,
    resources  TEXT
);

-- 002: Create characters table
CREATE TABLE characters
(
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

-- 003: Create game specs tables
CREATE TABLE apocalypses(
    val TEXT PRIMARY KEY
);

CREATE TABLE places(
    val TEXT PRIMARY KEY
);

CREATE TABLE rooms(
    val TEXT PRIMARY KEY
);

CREATE TABLE resources(
    val TEXT PRIMARY KEY
);

-- 004: Create character specs tables
CREATE TABLE bodies (
    val TEXT PRIMARY KEY
);

CREATE TABLE health (
    val TEXT PRIMARY KEY
);

CREATE TABLE jobs (
    val TEXT PRIMARY KEY
);

CREATE TABLE hobbies (
    val TEXT PRIMARY KEY
);

CREATE TABLE phobias (
    val TEXT PRIMARY KEY
);

CREATE TABLE items (
    val TEXT PRIMARY KEY
);

CREATE TABLE info (
    val TEXT PRIMARY KEY
);

CREATE TABLE abilities (
    val TEXT PRIMARY KEY
);
