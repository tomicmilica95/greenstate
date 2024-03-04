Project Instructions

Welcome to My Project!😊

Docker Setup
Clone the Code.
Start by pulling the code from the repository.

Run Docker:
Open your terminal and execute the following command:
	docker-compose up

If you encounter any Docker-related issues on Windows 10, try running these commands:
	docker pull node:alpine
	docker-compose up

Alternative Setup
If the above Docker setup doesn't suit your needs(but I hope it won't):
Run Local Application:
Open two terminals, one for the frontend and the other for the backend.

Install Dependencies:

In both terminals, run:
	npm install

Set .env file with your credential of database I use postgre db

Start the Application:

Next command in both terminals:
npm run start

Using the Application

Sign Up:
Once the application is running, sign up at localhost:3001/signup.

Explore the Dashboard:

After signing up, you'll be redirected to the dashboard.
Look for the "Create Task" button and start creating your first task!

A Note from the Developer
Code Quality:

I've put in a lot of effort into developing this app. Please forgive any syntax mistakes and bad imports
I coded for three days straight with minimal breaks, and my concentration wasn't at its peak at times! 😅

New Technologies:
This is my first attempt at dockerizing the entire application and using redux-saga-toolkit.
It was a challenging yet crazy experience.

Thank you ! 🚀
