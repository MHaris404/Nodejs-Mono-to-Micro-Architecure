# Grocery Online Shopping App (Microservices Architecture)

This project demonstrates building a scalable online grocery shopping platform using Node.js, designed with a **microservices architecture**. Each service is independent, promoting modularity, scalability, and maintainability. The system uses **webhooks for cross-service communication** and a **reverse proxy as an API gateway** to route requests and manage common concerns.

## Project Architecture

- **Microservices:** Each domain (user management, product catalog, shopping cart, order processing) is implemented as a separate service.
- **Webhooks:** Services communicate with each other using webhooks, enabling asynchronous and decoupled interactions.
- **Reverse Proxy (API Gateway):** A reverse proxy acts as the API gateway, routing incoming requests to the appropriate microservice and handling authentication, rate limiting, and other cross-cutting concerns.
- **Framework:** Node.js with Express.js for RESTful API development within each microservice.
- **Repository Pattern:** Each microservice uses the repository pattern to abstract database operations, ensuring clean separation between business logic and data access.
- **Configuration:** Environment-based configuration management for easy deployment and scalability.
- **Database:** MongoDB is used for persistent storage, with models and schemas defined per microservice.
- **DTOs & Schemas:** Data Transfer Objects (DTOs) and validation schemas ensure consistent data flow and integrity between API endpoints and database models.
- **Authentication:** Secure user authentication and authorization using JWT, managed via the API gateway.
- **Error Handling:** Centralized error handling and validation for robust API responses within each service.
- **Extensibility:** Designed for easy addition of new microservices and integration with other platforms.

## Features

- User registration and login (microservice)
- Product browsing and search (microservice)
- Shopping cart management and Orders (microservice)
- Secure API endpoints via API gateway

## Portfolio Value

This project demonstrates proficiency in backend development, API design, microservices architecture, webhook-based communication, MongoDB modeling, repository pattern, and scalable design. It is ideal for showcasing skills in Node.js, Express.js, schema design, and modern distributed software principles. The code is well-commented and organized, making it easy to understand and extend.
