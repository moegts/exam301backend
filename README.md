# 401 Entrance Exam

## Instructions:

### Make sure before starting to:

- Turn off any means of communication (phone, Email, and Slack(except the course channel)).
- Start your screen recording and share your face camera.
- You are not allowed to use previous projects, notes, or GitHub.
- You can use Google search engine.

## You need 2 repositories to be created in your GitHub
### For the frontend repo: 
1. Head out to this [link](https://github.com/RazanAl-Quran/frontend-app-301) that has a template(front-end-starter-code) in order to create a copy and have your own repo
2. Follow the steps in the README.md
### For the backend repo: 
You need to create a new repo as we used to do in our course


## Requirements:

1. You will create a CRUD full-stack web app for Programming Languages information that is retrieved from the Programming Languages API.


2. In the **API-Data**. The user wants to view all the Programming Languages information that is retrieved from the Programming Languages API using this [endpoint](https://ltuc-asac-api.herokuapp.com/programmingLangData) which should be displayed as cards (using Card Bootstrap component). And each item should have its own card that will contain a Name, Image ,and Add-to-favorite button. **(19 points)**
**P.S:** You will be creating here seperate component for each item.
**P.S:** You will be using the Card Bootstrap component for rendering each item data.
**Hint:** You will use the componentDidMount() Function.


3. When the user clicks on the 'Add-to-favorite' button then the selected item should be added to the database to the logged-in user record.
**(9 points)**

4. In the **My-Fav**. The user wants to view all the records that are retrieved from the database for the logged-in user and displayed them as cards (each item should have its own card that will contain Name, Image, Update and Delete buttons) by creating a new component where it will render your favorite items only! This component will render the data stored from your DB and not from the Programming Languages API. **(21 points)**
**P.S:** You will be creating here seperate component for rendering each Favorite item
**P.S:** If there is NO data got retrieved from the Database then **Your List is Empty ¯\_(ツ)_/¯** should be displayed
**Hint:** You will use the componentDidMount() Function


5. When the user clicks on the Delete button then it will delete the selected item from the database from the logged-in user record then re-render the page.
**(10 points)**

6. When the user clicks on the Update button that will show an update Modal/Form containing all the item's information. After the user updates the data, you should be able to send the new data to the backend, and re-render the component with the newly updated data. **(17 points)**
**P.S[OPTIONAL]:** You will be creating here seperate component for the Update-Modal/Form

7. Deploy your frontend repo on Netlify. **(2 points)**

8. Deploy your backend repo on Heroku. **(2 points)**

9. Create your database in MongoAtlas. **(2 points)**

10. Keep your code clean, also use proper naming for both variables and functions (idiomatic style) and proper indentation. **(3 points)**

11. Full running App. **(5 points)**

12. You should follow the provided wireframe structure in your webapp.

## Resources

- You can use **any technology** you've learned during code 301 course to achieve the above requirements.
- You can use this [NoSQL cheat sheet](https://kb.objectrocket.com/mongo-db/the-mongoose-cheat-sheet-225).
- If you face any connection issues to the database, don't forget to start your MongoDB server:
  - for WIN `sudo service mongodb start` OR `sudo service mongod start`
- If you use `WSL` and have weird issues with your server, you can use this command `killall -s KILL node`. **keep using `ctrl+c`**

```Javascript
require('dotenv').config();
server.use(cors());
server.use(express.json());
mongoose.connect('mongodb://localhost:27017/DB_NAME',{ useNewUrlParser: true, useUnifiedTopology: true });
```

## Submission Instructions:

- Submit the links of your GitHub repositories && the Deployed links in Canvas. (4 links)
- After submitting the exam links, do **NOT** commit or push anything to your repositories .
- Send the 3 recorded videos to your instructor on Slack.