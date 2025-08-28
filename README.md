# Grocery Online Shopping App

This project is a practical demonstration of building a scalable online grocery shopping platform using Node.js. The application is designed with a monolithic architecture, following best practices for modularity and maintainability. It showcases how business logic and service responsibilities can be organized within a single codebase, making it suitable for portfolio presentation.

## Project Architecture

- **Framework:** Node.js with Express.js for RESTful API development.
- **Structure:** Organized into modules for user management, product catalog, shopping cart, and order processing.
- **Repository Pattern:** Implements the repository pattern to abstract database operations, providing a clean separation between business logic and data access. Each domain (such as products, customers, shopping) has its own repository class responsible for interacting with MongoDB models.
- **Configuration:** Environment-based configuration management for easy deployment and scalability.
- **Database:** Uses MongoDB for persistent storage, with models and schemas defined for users, products, carts, and orders.
- **DTOs & Schemas:** Data Transfer Objects (DTOs) and validation schemas are used to ensure consistent data flow and integrity between API endpoints and database models.
- **Authentication:** Secure user authentication and authorization using JWT.
- **Error Handling:** Centralized error handling and validation for robust API responses.
- **Extensibility:** Designed to allow future migration to microservices without impacting the frontend or business logic.

## Features

- User registration and login
- Product browsing and search
- Shopping cart management
- Order placement and history
- Secure API endpoints

## Portfolio Value

This project demonstrates proficiency in backend development, API design, MongoDB modeling, repository pattern, and scalable architecture. It is ideal for showcasing skills in Node.js, Express.js, schema design, and modern software design principles. The code is well-commented and organized, making it easy to understand and extend.
