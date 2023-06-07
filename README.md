# Restaurant Management Application

This is a simple restaurant management application that enables users to perform CRUD operations on restaurant data. It uses Express.js for the backend, MongoDB for the database, and React for the frontend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Unit Testing](#unit-testing)
- [Running the Application](#running-the-application)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 14.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.x or higher)
- [npm](https://www.npmjs.com/get-npm) (version 6.x or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yvettewambi/restaurantmgt.git
cd restaurantmgt
```

2. Install the required dependencies:

```bash
npm install
```

## Backend Setup

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the `backend` directory with the following contents:

```text
MONGODB_URI=mongodb://localhost:27017/restaurant_management
PORT=5000
```

4. Start the backend server:

```bash
npm start
```

The server will start running on `http://localhost:5000`.

## Frontend Setup

1. Navigate to the `frontend` directory:

```bash
cd frontend
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the `frontend` directory with the following contents:

```text
REACT_APP_API_URL=http://localhost:5000
```

4. Start the frontend development server:

```bash
npm start
```

The server will start running on `http://localhost:3000`.

## Unit Testing

1. For backend unit tests, navigate to the `backend` directory and run:

```bash
npm test
```

2. For frontend unit tests, navigate to the `frontend` directory and run:

```bash
npm test
```

## Running the Application

1. Start the backend server by following the [Backend Setup](#backend-setup) instructions.
2. Start the frontend development server by following the [Frontend Setup](#frontend-setup) instructions.
3. Open a web browser and navigate to `http://localhost:3000`.
4. You can now use the restaurant management application to create, read, update, and delete restaurants.
