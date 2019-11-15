# Coordinate Frontend
### Technologies Used
- React.js
- Microservices
- PostgreSQL

View the back-end for this project: github.com/srichards567/Backend-Coordinate

### General Approach
I started with creating the back-end using microservices. I started with the eureka-server, then created the api-gateway and two services - one for users and one for events. During the initialization of all the modules in the back-end I had some issues with generating a target folder for each module, so I decided to move on to creating my react app. <br />

I had to change my initial project structure for many reasons. First, I had to create two new repositories - one for the front-end and one for the back-end - because of an error with uploading my first react app into GitHub repository and also after learning that it is good practice to keep code for the front and back-end separate. 

### Major Hurdles and Unsolved Problems
My major hurdles:
- Generating folders for back-end modules for them to build successfully

Unsolved Problems:
- Only one of my services (users-api) from the back-end would build successfully after composing.


### Planning Documentation and Wireframes

### User Stories
As a User, I want to add different dates and time suggestions for an event so that I accommodate my team members' schedules.

As a User, I want to enter multiple availability dates so that I can be as flexible as possible with my schedule.
