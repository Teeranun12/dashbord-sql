# dashbord-sql

# Express API Project

This project is built with **Express** and follows a structure that separates concerns into controller, service, and repository layers. It also uses PostgreSQL for the database connection.

## Project Structure

The project is organized as follows:

src/
├── domain1/
│   ├── controller/
│   │   └── domain1.controller.ts
│   ├── repository/
│   │   └── domain1.repository.ts
│   ├── service/
│   │   └── domain1.service.ts
├── domain2/
│   ├── controller/
│   │   └── domain2.controller.ts
│   ├── repository/
│   │   └── domain2.repository.ts
│   ├── service/
│   │   └── domain2.service.ts
├── config/
│   └── sql.ts
└── index.ts
