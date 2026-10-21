PRAGMA foreign_keys = ON;
CREATE TABLE metadata (key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE categories (id INTEGER PRIMARY KEY, title TEXT NOT NULL UNIQUE, position INTEGER NOT NULL UNIQUE);
CREATE TABLE topics (
    id TEXT PRIMARY KEY, position INTEGER NOT NULL UNIQUE,
    category_id INTEGER NOT NULL REFERENCES categories(id), stadium INTEGER,
    metadata_json TEXT NOT NULL
);
CREATE TABLE contents (
    topic_id TEXT NOT NULL REFERENCES topics(id), lang TEXT NOT NULL CHECK(lang IN ('nl','en')),
    html TEXT NOT NULL, content_hash TEXT NOT NULL, updated_at TEXT NOT NULL,
    PRIMARY KEY(topic_id,lang)
);
CREATE TABLE content_versions (
    id INTEGER PRIMARY KEY, topic_id TEXT NOT NULL REFERENCES topics(id), lang TEXT NOT NULL,
    html TEXT NOT NULL, content_hash TEXT NOT NULL, changed_at TEXT NOT NULL, reason TEXT NOT NULL
);
CREATE TABLE page_reviews (
    topic_id TEXT PRIMARY KEY REFERENCES topics(id), review_json TEXT NOT NULL,
    last_checked_at TEXT, checked_hash TEXT NOT NULL
);
CREATE TABLE criterion_checks (
    topic_id TEXT NOT NULL REFERENCES topics(id), criterion TEXT NOT NULL,
    status TEXT NOT NULL, evidence TEXT NOT NULL, last_checked_at TEXT,
    checked_hash TEXT NOT NULL, PRIMARY KEY(topic_id,criterion)
);
CREATE TABLE claims (
    id TEXT PRIMARY KEY, topic_id TEXT NOT NULL REFERENCES topics(id), claim_json TEXT NOT NULL,
    verification TEXT NOT NULL, last_attempted_at TEXT, last_checked_at TEXT,
    checked_hash TEXT NOT NULL
);
CREATE TABLE review_events (
    id INTEGER PRIMARY KEY, topic_id TEXT REFERENCES topics(id), entity_type TEXT NOT NULL,
    entity_id TEXT NOT NULL, event_kind TEXT NOT NULL, status TEXT NOT NULL,
    evidence TEXT NOT NULL, reviewer TEXT NOT NULL, content_hash TEXT,
    checked_at TEXT, recorded_at TEXT NOT NULL
);
CREATE INDEX review_events_topic ON review_events(topic_id,id);
