

# NETFLIX-GPT->

1. setup the app by create react app[ npx create-react-app (project name)].
2. configure tailwind
3. Routing through react-router-dom
4. Header
5. Login/Bg logo
6. SignUp/SignIn(toogle feature).
7. Validate the form/useRef hook
8. Firebase setup
9. Deploying our app to production.
10. User authentication/ registration/SignIn/signUp
11. Adding redux store to our app( using navigate hook and api provide by firebase).
12. update profile(by display name).
12. Sign out api.
13. Constant file ehich contains iamge urls.
14. BUG_FIX: upadate profile name and photo_url by dispatching the action again.
15. BUG_FIX: redirect to browse and login page when onAuthstateChanged(like event listener) changes to auth in(Header compo).

16. BUG_FIX(good practice): when unmounting the component unsubscribe onAuthStateChanged callback.
17. Register to tmdb and get acees of token and api.
18. Get data from tmdb now playing api list.
19. custom hook (useNowPlayingMovies)
20. Create redux store to store the now playing movies.
21. Create movieContainer
     -  create Video title
     -  Fetch Movie video api from tmdb and embedded youtube video.
     -  Store Movie Trailer in movie slice and fetch Trailer key.
     -  Create custom hook (useTrailerVideo).
     -  Add tailwind to make video background awsome and add autoplay=1&mute=1.
 22. Create secondary container
     - create movieList
     - create movieCards
     - add tailwind to make it look awesome.
     - add more actions in movie slice and craete there custom hook like(popular,trending).    


# FEATURES->
1. Authentication
     - sign in/sign up page
     - redirect to browse page
2. Browse
     - Header
     - Main movie
         - trailer in background
         - title and description
         - movie suggestions
            - movieList *n
3. Netflix gpt
    - search bar
    - movie suggestions


Doubt-> DO NOT NAVIGATE TO BROWSE PAGE FROM SIGN IN