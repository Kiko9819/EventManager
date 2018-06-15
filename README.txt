********************************CONFIGURATION********************************

To be able to start the app there are a few things you need to consider.

1. In the root folder of the app there is a package.json file, which contains
all the needed dependencies. You can install them by running 'npm install'.

2. In the root folder there is also a data folder, which you shouldn't delete
otherwise you lose the database. I used MongoDB as a tool for saving the data.

3. There is a file called 'mongod', also a very important file, you cannot run
the DB without it. So before you start the application, run the mongod file like
this: './mongod', but now navigate to the root directory of linux with 'cd ~' and 
then type './mongod' otherwise you will get a permission denied if you did that in 
the root folder of the project.

4. Last but not least you need to run the server with node. The main js file called
app.js. Run it with 'node app.js' this time in the root folder of the project. And you should be good to go. A message should tell you that the server is running.

5. Go to your browser and go to http://localhost:3000/

6. Enjoy the experience. ^^
