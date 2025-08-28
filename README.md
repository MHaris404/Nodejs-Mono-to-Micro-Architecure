# Grocery Online Shopping App (Microservices Architecture)

This project demonstrates building a scalable online grocery shopping platform using Node.js, designed with a **microservices architecture**. Each service is independent, promoting modularity, scalability, and maintainability. The system uses **event-driven queues (AMQP/RabbitMQ) for cross-service communication** and **NGINX as a reverse proxy** to route requests and manage common concerns.

## Project Architecture

- **Microservices:** Each domain (user management, product catalog, shopping cart, order processing) is implemented as a separate service.
- **Event-Driven Queues (AMQP/RabbitMQ):** Services communicate asynchronously using RabbitMQ, enabling decoupled and scalable interactions.
- **NGINX Proxy:** NGINX acts as the API gateway, routing incoming requests to the appropriate microservice and handling authentication, rate limiting, and other cross-cutting concerns.
- **Dockerized Services:** All services are containerized using Docker, and managed together with Docker Compose for easy orchestration and image handling.
- **Deployment:** The Node.js microservices stack is deployed on a single AWS Elastic Beanstalk Linux-based instance for simplified cloud management.
- **Secrets Management:** Sensitive configuration and secrets are securely managed via GitHub Actions Secrets.
- **CI/CD Pipeline:** Continuous Integration and Continuous Deployment are automated using Docker Compose and GitHub Actions, ensuring rapid and reliable delivery of updates.
- **Framework:** Node.js with Express.js for RESTful API development within each microservice.
- **Repository Pattern:** Each microservice uses the repository pattern to abstract database operations, ensuring clean separation between business logic and data access.
- **Configuration:** Environment-based configuration management for easy deployment and scalability.
- **Database:** MongoDB is used for persistent storage, with models and schemas defined per microservice.
- **DTOs & Schemas:** Data Transfer Objects (DTOs) and validation schemas ensure consistent data flow and integrity between API endpoints and database models.
- **Authentication:** Secure user authentication and authorization using JWT, managed via the API gateway.
- **Error Handling:** Centralized error handling and validation for robust API responses within each service.
- **Sentry Express-Level Error Monitoring:** : Each microservice integrates Sentry for error tracking, stack trace capture, and performance monitoring at the Express middleware level, ensuring visibility into runtime errors across the distributed system.
- **Extensibility:** Designed for easy addition of new microservices and integration with other platforms.

## Features

- User registration and login (microservice)
- Product browsing and search (microservice)
- Shopping cart management and Orders (microservice)
- Secure API endpoints via NGINX proxy

## Portfolio Value

This project demonstrates proficiency in backend development, API design, microservices architecture, event-driven communication with RabbitMQ, Docker-based deployment, CI/CD automation, MongoDB modeling, repository pattern, and scalable design. It is ideal for showcasing skills in Node.js, Express.js, schema design, and modern distributed software principles. The code is well-commented and organized, making it easy to understand and extend.
