How the app how ?
to run the app you first need to open the frontend react directory by typing *cd front-search* then after "npm start" on the terminal . 

and also start the server by type npm start on the root directory.

I used axios to fetch the data from the itunes api endpoint. 
.
on the live site the user can type on the search bar and term , words or sentence and then choose a the type of meddium of content. eg music or movies, the app will search all movie titles with the said 'term or sentence" and give the user the results. 

after receiving the results the user can click on their favorite movie/ song , they acn choose as many items as possible. the chosen items will be added on the *Favorites* section.

if the user does not like the chosen item , they can delete it from the list of favorites. 

I have added Helmet middleware to my Express app as a great way to enhance its security .With Helmet included, my Express app is now more secure against some common web vulnerabilities.

the application is deployed using netlify for the frontend and render for the backend server . 

ckick on the link below to see the deployed application 

https://itune-search-app.netlify.app/
