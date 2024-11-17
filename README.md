# C R U D

## :bulb: About

A simple API to register a city and people beloging to a city, and all its functions.

## :wrench: Setup

    - Install dependencies: `npm install`
    - Run application: `npm run dev`

## Endpoints

### Cities (private)

| URL | METHOD | HEADERS | DESCRIPTION |
| - | - | - | - |
| `/cities`| `GET`| | Search a list of cities, with pagination and filter by name. |
| `/cities`| `POST`| | Create a new city. |
| `/cities/:id` | `GET` | `{ "id": "cityID" }` Get a city by ID. |
| `/cities/:id` | `PUT` | `{ "id": "cityID" }` | Update a city by ID. |
| `/cities/:id` | `DELETE` | `{ "id": "cityID" }` | Delete a city by ID. |

### Users (private)

| URL | METHOD | HEADERS | DESCRIPTION |
| - | - | - | - |
| `/users`| `GET`| | Search a list of users, with pagination and filter by name. |
| `/user`| `POST`| | Create a new user. |
| `/user/:id` | `GET` | `{ "id": "userID" }` | Get a user by ID. |
| `/user/:id` | `PUT` | `{ "id": "userID" }` | Update a user by ID. |
| `/user/:id` | `DELETE` | `{ "id": "userID" }` | Delete a user by ID. |

### Login (public)

| URL | METHOD | HEADERS | DESCRIPTION |
| - | - | - | - |
| `/login`| `POST`| | Allows a already register user generate a token to access private endpoints. |
| `/register`| `POST`| | Create a new user. |
