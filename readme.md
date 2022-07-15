Hi,

This is Hendrix and my Email is lyuhanchi@gmail.com.

I didn't use any framework like React or Vue for this exercise, just a simple web page layout，and only exercise-2 used vanillaJS, so it can be viewed through `go-live` on localhost.

Both exercises 1 and 2 made a responsive layout and set breakpoints. Exercise 1 is limited by the size of the image, so the best experience is >992px (for desktop) and < 768px (for mobile).

Exercise 2 only sets a breakpoint at 768px. I'm rewriting Exercise 2 in React, and I'll push it later (15 Jul).
The current version is already working.

For the last Question, here is my answer (also shown in `baNaNa.png`):
###>_  + 'a' = NaN
>_ 'b' + 'a' + + 'a' + 'a' = 'baNaNa'
>_ ('b' + 'a' + + 'a' + 'a').toLowerCase = 'banana'

I implemented the `React` version for Exercise_2 on Friday, and I also set up a server and a `JSON Server` which was used to simulate a Database(/db/data.json).

Use `Express` to create a web server and provide an api to get data from the database, paste the content of the 'data.json' file into the Database then fetch and return the data to the front end through the `fetchData.js` api.
 
Under the `exercise2_ReactJS` directory,

Change directory to the /backend file and run npm i, then run npm start and npm run json-server.
### `cd backend` , `npm i` , `npm start` & `npm run json-server`.
then `cd ..` Change directory to the /frontend file and run npm i, then run npm start.
### `cd frontend` , `npm i` , `npm start`.
The React version could run successfully and the display effect is the same as the VanillaJS.
