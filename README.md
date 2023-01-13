
<h1 align="center">Turtler</h1>

<p align="center">
Twitter, but Turtler
  <br>
  <a target="__blank" href="https://wtfuck-d0de5.web.app/"><strong>online view: first</strong></a>
  <br>
  <a target="__blank" href="https://tmp-1-30971.web.app/"><strong>online view: second</strong></a>
  <br>
</p>

#### Stack Used

- React
- Firebase : 
  - Authentication : To Login and Signup Users
  - Firestore Database : To store users and posts information
  - Firebase Storage - To Upload images
- TypeScript

#### Tools and Additional Framework :
- Redux Toolkit 
- Redux Thunk
- React Router v6
- React Toastify
- React Icons
- React Moment + Moment
- React Infinite Scroll Component
- React Loading Skeleton

#### How To Run in Local - 
Run these commands in your terminal
 ```
 git clone https://github.com/huhuhu0420/Turtler.git
 cd ./Turtler
 npm install
```

- Go To [Firebase](https://firebase.google.com/)
- Create A Project 
- Add `.env.local` file to the root directory
- Place all your app related keys from the created firebase project and place it in the `.env.local` as below 

```
REACT_APP_API_KEY=<your key>
REACT_APP_AUTH_DOMAIN=<your domain>
REACT_APP_PROJECT_ID=<your project id>
REACT_APP_STORAGE_BUCKET=<your storage bucket>
REACT_APP_MESSAGING_SENDER_ID=<your sender id>
REACT_APP_APP_ID=<your app id>
REACT_APP_ADMIN_ID=<your admin account id> 
```
After that Run in your local with this command. 

`npm start`

And now this application runs in your local machine too. 

---
# Features

### Authentication: 

- First Name 
- Last Name 
- Set a username
- User Login (Email, Password || Sign In With Google)
- Logout

### User Related Operations
- Create A post
- Update Post
- Delete Post
- Like / Remove Like from Post
- Comment on a post 
- Add/Remove post To/From Bookmarks
- Follow/ Unfollow a user
- Edit logged in user's profile details such as name , username, bio, portfolio link, DP
- Relevant Toast Messages on success or error of certain functionalities

---

## Thanks

### original project
https://github.com/partha8/seeker

### Teamates

110590001
110590009
110590034
110590035