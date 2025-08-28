# Nodejs-Mono-to-Micro-Architecure

**Branch Index & Project Summary**

This repository demonstrates the evolution of a **Grocery Online Shopping App** from a **Monolithic Node.js architecture** to multiple **Microservices-based architectures**.
Each branch showcases a different architectural style, deployment approach, and technology integration.

---

## 📌 Branches Overview

### 1. `monolithic-architecture`

* **Branch:** Monolith
* **Description:**

  * Built with Node.js (Express.js).
  * Organized into modules (users, products, cart, orders).
  * Uses **MongoDB** with repository pattern.
  * JWT-based authentication.
  * DTOs, centralized error handling, and extensibility for future migration.
* **Portfolio Value:** Showcases solid **backend fundamentals** and **clean architecture** in a single codebase.

---

### 2. `microservices-webhook`

* **Branch:** Microservices + Webhooks
* **Description:**

  * Independent microservices for each domain.
  * **Webhooks** for cross-service communication.
  * **Reverse proxy as API gateway** for routing, authentication, and rate limiting.
  * JWT-based authentication at gateway level.
* **Portfolio Value:** Highlights **service decoupling** and **API gateway integration** using webhooks.

---

### 3. `microservices-rabbitmq`

* **Branch:** Microservices + RabbitMQ
* **Description:**

  * Independent services communicating via **event-driven queues (RabbitMQ / AMQP)**.
  * **NGINX as reverse proxy** (API gateway).
  * Services are **Dockerized** with orchestration using **Docker Compose**.
  * CI/CD pipeline with GitHub Actions & Docker.
  * AWS Elastic Beanstalk deployment.
* **Portfolio Value:** Demonstrates **event-driven microservices**, **containerization**, and **cloud deployment automation**.

---

### 4. `microservices-rabbitmq-sentry`

* **Branch:** Microservices + RabbitMQ + Sentry
* **Description:**

  * All features from `microservices-rabbitmq`.
  * Integrated **Sentry error monitoring** at the Express middleware level.
  * Provides **stack traces, performance monitoring, and error tracking** across distributed services.
* **Portfolio Value:** Showcases **production-grade monitoring** and **observability** in distributed systems.

---

## 🚀 Purpose of This Repository

* To provide a **progressive learning path** from monolithic to advanced microservices.
* To showcase **different architectural trade-offs** and **real-world practices** (API gateway, messaging queues, monitoring, CI/CD).
* To serve as a **portfolio-ready Node.js project** demonstrating expertise in backend development, architecture design, and cloud-native deployment.
