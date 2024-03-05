# Current TODO:

- Investigate Default value on column fix for filehashes, SQLite is having an aneursym about this currently.

# Main functionality
- When generating file in R2 for upload, also
  - Send out a Database creation event for the file with metadata
  - Put the R2 signed URL in the object
  - Return the object's metadata
- Allow fetching .MD files from R2 for parsing as part of SSR step
  - UI to allow assigning slug routes to versioned .MD files
  - Include cache control headers to keep data around in client browser

# Docs
- Generate docs pages for each required setup step
- Create guide for getting R2 keys from Cloudflare and placing them in .env file
- Create guide for getting SQL connection keys from database and placing them in .env file
- Create guide for getting Redis keys or HTTP connection from Upstash and placing them in .env file