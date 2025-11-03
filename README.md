# Task Manager - Java Full Stack Application

This is a simple full stack application built with Spring Boot (backend) and HTML/CSS/JavaScript (frontend).

## Features

- **Backend (Spring Boot)**:
  - RESTful API with CRUD operations
  - In-memory task management
  - CORS enabled for frontend access
  - Built with Java 17 and Spring Boot 3.2.0

- **Frontend (HTML/CSS/JS)**:
  - Clean and modern UI with gradient design
  - Add new tasks with title and description
  - Mark tasks as complete/incomplete
  - Delete tasks
  - Real-time updates via REST API

## Project Structure

```
.
├── pom.xml                                    # Maven configuration
├── src/
│   ├── main/
│   │   ├── java/com/example/fullstack/
│   │   │   ├── FullStackApplication.java    # Main Spring Boot application
│   │   │   ├── Task.java                    # Task model/entity
│   │   │   ├── TaskService.java             # Business logic layer
│   │   │   └── TaskController.java          # REST API endpoints
│   │   └── resources/
│   │       ├── application.properties       # Application configuration
│   │       └── static/
│   │           ├── index.html              # Frontend UI
│   │           ├── style.css               # Styling
│   │           └── app.js                  # Frontend JavaScript
│   └── test/
│       └── java/com/example/fullstack/
│           └── TaskControllerTest.java      # API tests
└── README.md
```

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

## Building the Application

```bash
mvn clean package
```

## Running Tests

```bash
mvn test
```

## Running the Application

```bash
mvn spring-boot:run
```

Or run the compiled JAR:

```bash
java -jar target/fullstack-app-1.0.0.jar
```

The application will start on `http://localhost:8080`

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/{id}` - Get task by ID
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{id}` - Update a task
- `DELETE /api/tasks/{id}` - Delete a task

## Usage

1. Start the application using `mvn spring-boot:run`
2. Open your browser and navigate to `http://localhost:8080`
3. Use the web interface to:
   - Add new tasks by entering a title and description
   - Mark tasks as complete/incomplete
   - Delete tasks you no longer need

## Example API Usage

### Get all tasks
```bash
curl http://localhost:8080/api/tasks
```

### Create a new task
```bash
curl -X POST http://localhost:8080/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"My Task","description":"Task description","completed":false}'
```

### Update a task
```bash
curl -X PUT http://localhost:8080/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Task","description":"Updated description","completed":true}'
```

### Delete a task
```bash
curl -X DELETE http://localhost:8080/api/tasks/1
```

## Technologies Used

- **Backend**: Spring Boot 3.2.0, Java 17
- **Build Tool**: Maven
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Testing**: JUnit 5, Spring Boot Test

## License

This project is for educational purposes.
