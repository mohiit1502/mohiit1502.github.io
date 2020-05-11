#Microbot

A web app to interact with Github performing tasks related to repository, issues, collaborators etc. of a logged in user; but by providing a string of text that is parsed to identify user intent. Recast NLP was used for training and intent extraction and Github API was used to login and interact with Github. User types in query and receives a form/response, both of which are maintained in browser’s local storage and updated using Redux. App doesn’t use a server that enabled understanding of CORS restrictions in Chrome and how to get around it. Source and CSS structuring using SASS was the key takeaway from this project. Following libraries were helpful in implementing this project – github-api, recastai, redux, webpack, sass and eslint for the code quality. jQuery and templating were widely used for DOM manipulation. Project is highly configurable and new operations can easily be added with no changes to existing code and minimal additions.

Available at: https://mohiit1502.github.io/dist

Try following in the search bar:

- create repository
- create issue
- add collaborator
- purge history
- display repositories
- etc.
