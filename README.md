
---

**restApi-ShopApp**

This is an Express.js REST API for managing a shop application, including authentication, products, orders, reviews, and users. It is connected to a MySQL database, and you can test the API with the provided `.http` file using Visual Studio Code's REST Client extension.

**Getting Started**

**Prerequisites**

Ensure you have the following installed on your machine:
- Node.js (v12 or later)
- MySQL (v5.7 or later)
- Git (for cloning the repository)
- Visual Studio Code (for testing with the REST Client)

**Clone the Repository**

1. Clone the repository using Git:

```
git clone https://github.com/abdisetiakawan/restApi-ShopApp.git
```

2. Navigate into the project directory:

```
cd restApi-ShopApp
```

**Install Dependencies**

Run the following command in the project directory to install all necessary packages:

```
npm install
```

**Configure the Database**

1. Create a `.env` file in the root directory based on the provided `.env.example` file.
2. Set up your MySQL database with the correct credentials and update the `.env` file with your own configuration:

```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASS=your_db_pass
DB_NAME=your_db_name
DB_PORT=3306
PORT=3000
ACCESS_TOKEN_SECRET=your_secret_key
```

Make sure the database exists and that you have the right permissions.

**Running the Project**

To start the server, run:

```
npm start
```

The server will be running on the port specified in your `.env` file (default is `http://localhost:3000`).

**Testing the API**

1. Install the REST Client Extension:
   To test the API using the `.http` file, install the REST Client extension in Visual Studio Code.

2. Run API Tests:
   Open the `testing/dokumentasi_api.http` file and execute the API requests directly in VSCode using the REST Client.

**Project Structure**

The project is structured as follows:

- config
  - database.js: Database configuration
- controllers
  - auth: Authentication controllers
  - orders: Orders controllers
  - products: Product controllers
  - ratingReview: Rating and Review controllers
  - users: User controllers
- middleware
  - auth.js: Authentication middleware
- models
  - Order.js: Order model
  - OrderDetails.js: Order details model
  - Product.js: Product model
  - RatingReview.js: Rating and Review model
  - ShippingDetails.js: Shipping details model
  - User.js: User model
- routes
  - auth.js: Auth routes
  - orders.js: Orders routes
  - products.js: Products routes
  - ratingReview.js: Rating and Review routes
  - users.js: Users routes
- testing
  - dokumentasi_api.http: API documentation and test requests
- .env.example: Environment variables example

**Notes**

- The provided `dokumentasi_api.http` file in the `testing` folder contains sample requests for the API endpoints.
- Make sure to update your environment variables in the `.env` file to match your local setup.

---
