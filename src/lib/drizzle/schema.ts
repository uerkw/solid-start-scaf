import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { nanoid } from 'nanoid';

export const contentFile = sqliteTable('content_file', {
  id: text('id')
    .primaryKey()
    .$default(() => nanoid()),

  title: text('title').notNull(),
  filehash: text('filehash').unique(),
  isMarkedDeleted: integer('isMarkedDeleted', {mode: 'boolean'}).default(false)
});
export type SelectContentFile = typeof contentFile.$inferSelect;