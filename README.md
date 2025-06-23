# Tour and Travel Server

This is a simple server for a tour and travel application built with Node.js and Express.js.

## Features

* User authentication and authorization
* CRUD operations for tours and travelers
* Filtering and sorting of tours
* Support for multiple languages

## Installation

* Clone the repository
* Run `npm install` to install dependencies
* Run `npm run build` to build the application
* Run `npm run start` to start the server

## API Endpoints

### Users

* `POST /users` - Create a new user
* `GET /users` - Get a list of all users
* `GET /users/:id` - Get a user by ID
* `PUT /users/:id` - Update a user
* `DELETE /users/:id` - Delete a user

### Tours

* `POST /tours` - Create a new tour
* `GET /tours` - Get a list of all tours
* `GET /tours/:id` - Get a tour by ID
* `PUT /tours/:id` - Update a tour
* `DELETE /tours/:id` - Delete a tour

### Travelers

* `POST /travelers` - Create a new traveler
* `GET /travelers` - Get a list of all travelers
* `GET /travelers/:id` - Get a traveler by ID
* `PUT /travelers/:id` - Update a traveler
* `DELETE /travelers/:id` - Delete a traveler

## Request Body

The request body should be a JSON object with the following properties:

* `name`: The name of the user, tour, or traveler
* `email`: The email address of the user
* `password`: The password of the user (only for users)
* `description`: The description of the tour or traveler
* `price`: The price of the tour (only for tours)
* `duration`: The duration of the tour (only for tours)
* `language`: The language of the tour (only for tours)

## Response

The response will be a JSON object with the following properties:

* `id`: The ID of the user, tour, or traveler
* `name`: The name of the user, tour, or traveler
* `email`: The email address of the user
* `description`: The description of the tour or traveler
* `price`: The price of the tour (only for tours)
* `duration`: The duration of the tour (only for tours)
* `language`: The language of the tour (only for tours)

## Authentication

The server uses JSON Web Tokens (JWT) for authentication. To authenticate, send a `POST` request to the `/login` endpoint with a JSON object containing the user's email and password. The response will contain a JWT token that can be used to authenticate future requests.

## Authorization

The server uses role-based access control (RBAC) for authorization. The following roles are available:

* `admin`: Can perform any action on any endpoint
* `user`: Can perform read-only actions on any endpoint
* `traveler`: Can perform read-only actions on the `/travelers` endpoint

To authorize a request, include an `Authorization` header with a valid JWT token. The server will verify the token and check the user's role before allowing the request to proceed.
