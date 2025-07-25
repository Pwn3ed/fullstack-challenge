# C R U D

## :bulb: About

An API to register a city and people beloging to a city, and all its functions.

## :wrench: Setup

    - Install dependencies: `npm install`
    - Run application: `npm run dev`

## Endpoints

### City (private)

| URL | METHOD | HEADERS | DESCRIPTION |
| - | - | - | - |
| `/cities`| `GET`| | Search a list of cities, with pagination and filter by name. |
| `/city`| `POST`| | Create a new city. |
| `/city/:id` | `GET` | `{ "id": "cityID" }` | Get a city by ID. |
| `/city/:id` | `PUT` | `{ "id": "cityID" }` | Update a city by ID. |
| `/city/:id` | `DELETE` | `{ "id": "cityID" }` | Delete a city by ID. |

### Person (private)

| URL | METHOD | HEADERS | DESCRIPTION |
| - | - | - | - |
| `/people`| `GET`| | Search a list of people, with pagination and filter by name. |
| `/person`| `POST`| | Create a new person. |
| `/person/:id` | `GET` | `{ "id": "personID" }` | Get a person by ID. |
| `/person/:id` | `PUT` | `{ "id": "personID" }` | Update a person by ID. |
| `/person/:id` | `DELETE` | `{ "id": "personID" }` | Delete a person by ID. |

### Login (public)

| URL | METHOD | HEADERS | DESCRIPTION |
| - | - | - | - |
| `/login`| `POST`| | Allows a already register user generate a token to access private endpoints. |
| `/register`| `POST`| | Create a new user. |
