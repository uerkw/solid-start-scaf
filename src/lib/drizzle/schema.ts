import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { nanoid } from 'nanoid';

export const contentFile = sqliteTable('content_file', {
  id: text('id')
    .primaryKey()
    .$default(() => nanoid()),

  title: text('title').notNull(),
  filehash: text('filehash').unique(),
});
export type SelectContentFile = typeof contentFile.$inferSelect;