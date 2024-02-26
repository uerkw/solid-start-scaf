# Describing how Uploading to R2 Works

1. The Client UI opens, and client selects 1 or more files to get presigned URLs for
2. The server initiates a database call, creating the metadata that will be tied to the related file
3. A UUID is captured, as well as a file extension. These are sent to the next step
4. The server iniates an S3 PutCommand on a URL presigner, this will request a link that the client uses to upload directly to
5. The client uploads to R2. Theoretically at this stage, we could either have a worker notify a callback on the service and check a cache key, or we could simply continuously poll for status
6. The client is navigated to a new view, showing the metadata captured in SQL and a link to download the file data.
7. Some smart handling could be good to have for viewing the file in different file types: (audio, video, image, PDF, MD, etc)
