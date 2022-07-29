# jwt-pern-registration-login-practice
1. Postgresql: connects db with server in order to run pg queries
2. Express: used to quickly create server in node.js
3. React: used to build the frontend
4. Node.js: a runtime environment for JavaScript
## Steps 
### Build Server
1. Create 'server' folder
2. In 'server'  run 'npm init -y'; then 'npm i express cors pg jsonwebtoken bcrypt'
3. In 'server' create 'index.js' file
4. In 'index.js' require 'express', create 'app' variable, and require 'cors'
5. Create 'app.listen()' method to listen to port number
6. Use 'node index' or 'nodemon index' to run server and see changes
7. Create middleware
### Create Postgresql Database and Table 
8. In 'server' create 'database.sql' file
9. In 'database.sql' write commands for database and table (visually easier to see/write)
10. Open postgresql and copy/paste command for database to create it
11. Remember to set extension (download) for 'uuid_generate_v4()' to function: run command -> 'create extension if not exists "uuid-ossp";' inside database
12. Enter database and copy/paste command for table to create it
### Connect Database to Server
13. In 'server' create 'db.js' file
14. In 'db.js' configure connection to database by requiring pg library
### Build Register Route
15. In 'server' create 'routes' folder
16. In 'routes' create 'jwtAuth.js' file 
17. Use 'router' function and export it
18. In 'jwtAuth' file, require 'pool'
19. In 'jwtAuth' file, require 'bcrypt'
20. In 'index.js' file, specify routes 
21. Build 'register' route in 'jwtAuth.js' file
### Create JWT Generator
22. In 'server', run npm i dotenv
23. In 'server', create create '.env' file and create secret key
24. In 'server', create 'utils' folder that will create all functions
25. In 'utils' folder, create 'jwtGenerator.js' file 
26. In 'jwtGenerator.js' file, require jsonwebtoken, and require 'dotenv'
27. Create 'jwtGenerator' function
28. In "jwtAuth.js', require 'jwtGenerator' function
29. Add 'jwtGenerator' to 'register' route in 'jwtAuth.js' file
### Build Login Route
30. Buld 'login' route in 'jwtAuth.js' file
### Create JWT middleware
31. Create new folder, 'middleware'
32. In 'middleware', create 'authorization.js' file
33. In 'middleware', create 'validinfo.js' file (checks if email is valid or not)
34. In 'jwtAuth.js', take in middleware; require 'validinfo.js' file (add to register and login routes)
### Build Private Routes
35. In 'jwtAuth.js' file, build 'is-verify' route; require 'authorization.js' file (add to 'is-verify' route)
36. In 'routes' folder, create 'dashboard.js' file
37. In 'index.js' file, create dashboard route
38. In 'dashboard.js' file, build dashboard function
## Educational source

[freeCodeCamp.org](https://www.youtube.com/watch?v=7UQBMb8ZpuE)