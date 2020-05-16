# unLeashd

UnLeashd is a dog checkin app inspired by Untappd (untappd.com). It allows users to create, and edit dogs. Users can also checkin the dogs they are petting, view other checkins through the global feed, and browse through all dogs and petshops through the petshop and dogs page.

## Features

User authentification: User can sign up as a member and login. User profile: Logged in users have a home page with user information. Pet Store list: Users will have access to a full list of Pet Stores that is saved in database. Dog list: Logged in users have access to a full list of Dog Breeds that is saved in database. Pet Store profile: Each Pet Store has its profile page with detailed information, including the breed of dogs it offers, and it's associated checkins. Dog Breed profile: Each Dog Breed has its profile page with detailed information, including a link to the associated Pet Store that sells it, the author of the Dog, and the Dog's assotiated checkins.

## Technologies

### Backend

* Ruby 2.5.1
* Rails 5.2.3
* PostgreSQL

### Frontend

* React
* Redux
* JavaScript ES6

## Petshop Index

<img width="970" alt="petshops_index" src="https://user-images.githubusercontent.com/43156715/75044187-35546000-548f-11ea-9b02-2e8eb0d002da.png">

## Dog Profile

<img width="972" alt="Screen Shot 2020-02-21 at 8 58 49 AM" src="https://user-images.githubusercontent.com/43156715/75044235-4a30f380-548f-11ea-988d-b02512022a76.png">

## Checkin Modal

<img width="894" alt="checkin_dog" src="https://user-images.githubusercontent.com/43156715/75044263-5452f200-548f-11ea-83b6-9a0f43e5456f.png">

## Cool features

* Reduced screen flickering and React.js Component rendering time by utilizing Redux Store Normalized Global State in different presentational components, and not refetching redundant information.
* Created RESTful routes in Rails Controllers and queries for PostgreSQL database with JQuery Ajax calls to fetch user data and display the user’s friendships, profile picture, dog checkins, and the pets index.
* Queried dynamically for subsets of data from database on index GETs to reduce load times and reduce database workload.
* Accounted for global state changes from natural flow of user navigation and also unexpected hard page refreshes by periodically manually testing and correcting global state to be a consistent shape throughout component switches.
* Filtered backend responses using JBuilder gem to increase efficiency within frontend reducers by returning relevant information in the json response in the correct shape for less required parsing within the reducer.
* Saved images using Rails Active Storage and Amazon Web Services (AWS) S3 to keep application assets folder manageable, data secure through Amazon’s security restrictions, and persist data from being cleared from cache on server resets.
