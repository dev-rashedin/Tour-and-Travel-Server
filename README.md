# Tour and Travel Server

This is a simple server for a tour and travel application built with Node.js and Express.js.

## Features

* User authentication and authorization
* CRUD operations for tours and travelers
* Filtering and sorting of tours

## Installation

* Clone the repository
* Run `npm install` to install dependencies
* Run `npm run build` to build the application
* Run `npm run start` to start the server

## API Endpoints

### Users

* `POST /users/create-user` - Create a new user
* `GET /users` - Get a list of all users
* `GET /users/:id` - Get a user by ID
* `PUT /users/:id` - Update a user
* `DELETE /users/:id` - Delete a user

### Tours

* `POST /tours/create-tour` - Create a new tour
* `GET /tours` - Get a list of all tours
* `GET /tours/:id` - Get a tour by ID
* `PUT /tours/:id` - Update a tour
* `DELETE /tours/:id` - Delete a tour

### Ratings

* `POST /ratings/create-rating` - Create a new rating
* `GET /ratings` - Get a list of all ratings
* `GET /ratings/:id` - Get a rating by ID
* `PUT /ratings/:id` - Update a rating
* `DELETE /ratings/:id` - Delete a rating

### Request Body 
