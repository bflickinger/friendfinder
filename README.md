# Friend Finder - Find a compatible buddy!

### Overview

Friend Finder is an application that takes user input in the form of a survey and compares it to existing users in a pre-defined array.  The closest match is then displayed.

Node.js is used to expose the web server.  The NPM module express is used for routing of pages and api calls.

These other technologies are used for presentation and javascript functionality:

1.  Bootstrap js and css
2.  Fontawesome
3.  jQuery

### File Hierarchy

  ```
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```
### Requirements

1. The survey has 10 questions. Each response is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. `server.js` file requires the npm packages: `express` and `path`.

3. `htmlRoutes.js` two routes:

   * GET Route to `/survey` which goes to survey.html.
   * Catch-all route that goes to `home.html`.

4. `apiRoutes.js` has two routes:

   * GET route with the url `/api/friends`. This displays the JSON of friends from the array.
   * POST routes `/api/friends`. This process compatibility checks, adds the new user to the array, and then returns data for the modal.

5. `app/data/friends.js` is an array of objects using the following format:

```json
{
  "name":"John",
  "photo":"<full URL of Picture on the Internet",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```
