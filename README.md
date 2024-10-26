# Superhero Battles API

This project is a Superhero Battle Management system built using **Node.js**, **Express**, and **MongoDB**. It allows you to manage superheroes, villains, and record battles between them. The system includes CRUD operations for heroes, villains, and battles with validation rules and error handling.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Routes](#routes)
- [Seed Data](#seed-data)
- [Usage](#usage)
- [License](#license)

## Features

- Manage superheroes and villains.
- Record battles between heroes and villains.
- Full CRUD functionality for heroes, villains, and battles.
- Validation for required fields like `alias`, `universe`, `outcome`, etc.
- MongoDB indexes to optimize database performance.

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud-based)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/ojasvigupta30/SBA319.git
    ```

2. Navigate into the project directory:

    ```bash
    cd SBA319
    ```

3. Install all required dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root of your project and add the following:

    ```bash
    PORT=5000
    mongoURI=your-mongo-db-uri-here
    ```

    Replace `your-mongo-db-uri-here` with your actual MongoDB URI connection string.

5. Run the server:

    ```bash
    npm start
    ```

    The server should start on `http://localhost:3000`.

## Routes

### Hero Routes

- **GET /hero** - Get all heroes.
- **POST /hero** - Add a new hero.
  - Required fields: `alias`, `power`, `universe`.
- **PUT /hero/:alias** - Update an existing hero by alias.
- **DELETE /hero/:alias** - Delete a hero by alias.

### Villain Routes

- **GET /villain** - Get all villains.
- **POST /villain** - Add a new villain.
  - Required fields: `alias`, `power`, `universe`.
- **PUT /villain/:alias** - Update an existing villain by alias.
- **DELETE /villain/:alias** - Delete a villain by alias.

### Battle Routes

- **GET /battle** - Get all battles.
- **POST /battle** - Add a new battle.
  - Required fields: `location`, `date`, `heroes`, `villains`, `outcome`, `universe`.
- **PUT /battle/:heroes** - Update a battle by heroes.
- **DELETE /battle/:heroes** - Delete a battle by heroes.

### Seed Data Routes

- **GET /seed** - This route seeds the database with default heroes, villains, and battles. This is a quick way to populate the database.

| **Route**               | **Method** | **Description**                                    | **Required Fields**                                         |
|-------------------------|------------|----------------------------------------------------|-------------------------------------------------------------|
| `/hero`                 | GET        | Get all heroes                                     | None                                                        |
| `/hero`                 | POST       | Add a new hero                                     | `alias`, `power`, `universe`                                 |
| `/hero/:alias`          | PUT        | Update an existing hero by alias                   | `alias`, `power`, `universe` (in request body)               |
| `/hero/:alias`          | DELETE     | Delete a hero by alias                             | `alias` (in URL path)                                        |
| `/villain`              | GET        | Get all villains                                   | None                                                        |
| `/villain`              | POST       | Add a new villain                                  | `alias`, `power`, `universe`                                 |
| `/villain/:alias`       | PUT        | Update an existing villain by alias                | `alias`, `power`, `universe` (in request body)               |
| `/villain/:alias`       | DELETE     | Delete a villain by alias                          | `alias` (in URL path)                                        |
| `/battle`               | GET        | Get all battles                                    | None                                                        |
| `/battle`               | POST       | Add a new battle                                   | `location`, `date`, `heroes`, `villains`, `outcome`, `universe` |
| `/battle/:heroes`       | PUT        | Update a battle by heroes                          | `location`, `date`, `heroes`, `villains`, `outcome`, `universe` |
| `/battle/:heroes`       | DELETE     | Delete a battle by heroes                          | `heroes` (in URL path)                                       |
| `/seed`                 | GET        | Seed the database with default data for testing    | None                                                        |



## Seed Data

You can populate your database with initial data by accessing the `/seed` route after setting up your environment.

Example seed data for heroes, villains, and battles is included in the project. Accessing `/seed` will populate the database with default entries for testing purposes.

## Usage

After starting the server, you can interact with the API using tools like **Postman** or **cURL**. Here's an example of adding a new hero using Postman:

- **POST /hero**

     **Request Body (JSON):**

  ```json
  {
    "alias": "Spider-Man",
    "power": "Spider Powers, Web Slinging",
    "universe": "Marvel"
  }
  ```

     **Request Body (JSON):**

  ```json
    {
  "_id": "60adf9f9e1e1f2f3c4e4d5a6",
  "alias": "Spider-Man",
  "power": "Spider Powers, Web Slinging",
  "universe": "Marvel",
  "archNemesis": null,
  "createdAt": "2024-10-22T18:29:53.715Z",
  "updatedAt": "2024-10-22T18:29:53.715Z",
  "__v": 0
    }
    ```


