# Collaborative Task Management Application

A collaborative task management application built with Spring Boot (backend) and Angular (frontend).

## 🏗️ Architecture

The application consists of three main services:

- **Frontend**: Angular application with Angular Material
- **Backend**: Spring Boot REST API
- **Database**: PostgreSQL

## 🚀 Technologies Used

### Backend

- **Java 17**
- **Spring Boot 3.2.5**
- **Spring Security** (JWT Authentication)
- **Spring Data JPA**
- **PostgreSQL**
- **Maven**

### Frontend

- **Angular 19.2**
- **Angular Material**
- **TypeScript**
- **SCSS**
- **RxJS**

### DevOps

- **Docker & Docker Compose**
- **Nginx** (to serve the frontend)

## 📋 Features

### User Management

- ✅ Registration and login
- ✅ JWT authentication
- ✅ User profile management

### Task Management

- ✅ Create, edit, and delete tasks
- ✅ Task statuses: To Do, In Progress, Done
- ✅ Priority levels: Low, Medium, High
- ✅ Dashboard with statistics
- ✅ Modern and responsive user interface

### Project Management

- ✅ Create and manage projects
- ✅ Assign tasks to projects
- ✅ User collaboration

### Category Management

- ✅ Organize tasks by categories
- ✅ Filtering and search capabilities

## 🛠️ Installation and Deployment

### Prerequisites

- Docker and Docker Compose
- Git

### Deployment with Docker Compose

1. **Clone the repository**

```bash
git clone https://github.com/Loickaltenbach/collaborative-task-management-application.git
cd collaborative-task-management-application
```

2. **Secure configuration**

```bash
# Copy example files
cp .env.example .env
cp docker-compose.example.yml docker-compose.yml

# Edit the .env file with your secure values
nano .env
```

3. **Configure environment variables**

Edit the `.env` file with secure values:

```bash
POSTGRES_PASSWORD=your_super_secure_password_here
JWT_SECRET=your_jwt_secret_at_least_256_bits_long
```

4. **Launch the application**

```bash
docker-compose up -d
```

5. **Access the application**

- Frontend: <http://localhost:4200>
- Backend API: <http://localhost:8080>
- PostgreSQL Database: localhost:5432

### ⚠️ IMPORTANT - Security

**Before deploying to production:**

1. **Change ALL default passwords**
2. **Generate a secure JWT secret**:

   ```bash
   openssl rand -base64 64
   ```

3. **Use HTTPS in production**
4. **Consult the [SECURITY.md](SECURITY.md) file for more details**

### Local Development

#### Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

#### Frontend (Angular)

```bash
cd frontend
npm install
npm start
```

## 📁 Project Structure

```
collaborative-task-management-application/
├── backend/                     # Spring Boot Application
│   ├── src/main/java/com/example/taskmanagement/
│   │   ├── controller/         # REST Controllers
│   │   ├── model/             # JPA Entities
│   │   ├── repository/        # Spring Data Repositories
│   │   ├── security/          # Security Configuration
│   │   ├── service/           # Business Services
│   │   └── exception/         # Exception Handling
│   ├── src/main/resources/
│   │   └── application.properties
│   ├── Dockerfile
│   └── pom.xml
├── frontend/                   # Angular Application
│   ├── src/app/
│   │   ├── components/        # Reusable Components
│   │   ├── pages/            # Application Pages
│   │   ├── services/         # Angular Services
│   │   ├── interceptors/     # HTTP Interceptors
│   │   └── models/           # TypeScript Interfaces
│   ├── Dockerfile
│   ├── package.json
│   └── angular.json
└── docker-compose.yml
```

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Tasks

- `GET /api/tasks` - List tasks
- `POST /api/tasks` - Create a task
- `PUT /api/tasks/{id}` - Update a task
- `DELETE /api/tasks/{id}` - Delete a task

### Projects

- `GET /api/projects` - List projects
- `POST /api/projects` - Create a project
- `PUT /api/projects/{id}` - Update a project
- `DELETE /api/projects/{id}` - Delete a project

### Categories

- `GET /api/categories` - List categories
- `POST /api/categories` - Create a category

## 🎨 User Interface

The application features a modern interface with:

- Responsive design adapted for mobile and desktop
- Material Design theme
- Smooth animations and transitions
- Dashboard with visual statistics
- Intuitive forms for creation/modification

## 🔒 Security

- JWT-based authentication
- Route protection with Angular guards
- Data validation on client and server side
- Secure password hashing
- Configured CORS protection

## 🚀 Production Deployment

### Environment Variables

#### Backend

```env
SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/taskdb
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=your_secure_password
JWT_SECRET=your_secure_jwt_secret
```

#### Frontend

Environment variables are configured in `src/environments/`

## 📝 Available Scripts

### Backend

```bash
# Compilation
./mvnw compile

# Tests
./mvnw test

# Packaging
./mvnw package

# Execution
./mvnw spring-boot:run
```

### Frontend

```bash
# Install dependencies
npm install

# Development
npm start

# Production build
npm run build

# Tests
npm test
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Loic Kaltenbach** - *Initial development* - [Loickaltenbach](https://github.com/Loickaltenbach)

## 🐛 Bug Reports

If you find a bug, please open an [issue](https://github.com/Loickaltenbach/collaborative-task-management-application/issues) with:

- Detailed description of the problem
- Steps to reproduce
- Screenshots if applicable
- Information about your environment
