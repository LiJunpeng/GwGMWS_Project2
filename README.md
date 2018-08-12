# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 2

I have done following things in this stage:
- Utilize local node server to serve restaurants data instead of local static file
- Adding IndexedDB access into my dbhelper class. Once the request is made, dbhelper will return results in IndexedDB first, then update data in IndexedDB by fetching restaurants from server. If IndexedDB is empty, dbhelper will do a fetch first anyway, in case it is the first a user load this webpage.
- Fixing problems following lighthouse's suggestion.

### How to start?
1. Run a data server on port 1337. https://github.com/udacity/mws-restaurant-stage-2
2. From /web_src/public directory, run a python HTTP server
