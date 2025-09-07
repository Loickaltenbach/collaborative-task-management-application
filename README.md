# Collaborative Task Management Application

Une application de gestio### Déploiement avec Docker Compose

1. **Cloner le repository**

```bash
git clone https://github.com/Loickaltenbach/collaborative-task-management-application.git
cd collaborative-task-management-application
```

2. **Configuration sécurisée**

```bash
# Copier les fichiers d'exemple
cp .env.example .env
cp docker-compose.example.yml docker-compose.yml

# Éditer le fichier .env avec vos valeurs sécurisées
nano .env
```

3. **Configurer les variables d'environnement**

Éditez le fichier `.env` avec des valeurs sécurisées :

```bash
POSTGRES_PASSWORD=your_super_secure_password_here
JWT_SECRET=your_jwt_secret_at_least_256_bits_long
```

4. **Lancer l'application**

```bash
docker-compose up -d
```

5. **Accéder à l'application**

- Frontend : <http://localhost:4200>
- Backend API : <http://localhost:8080>
- Base de données PostgreSQL : localhost:5432

### ⚠️ IMPORTANT - Sécurité

**Avant de déployer en production :**

1. **Changez TOUS les mots de passe par défaut**
2. **Générez un JWT secret sécurisé** :

   ```bash
   openssl rand -base64 64
   ```

3. **Utilisez HTTPS en production**
4. **Consultez le fichier [SECURITY.md](SECURITY.md) pour plus de détails**ative construite avec Spring Boot (backend) et Angular (frontend).

## 🏗️ Architecture

L'application est composée de trois services principaux :

- **Frontend** : Application Angular avec Angular Material
- **Backend** : API REST Spring Boot
- **Base de données** : PostgreSQL

## 🚀 Technologies Utilisées

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
- **Nginx** (pour servir le frontend)

## 📋 Fonctionnalités

### Gestion des Utilisateurs

- ✅ Inscription et connexion
- ✅ Authentification JWT
- ✅ Gestion des profils utilisateurs

### Gestion des Tâches

- ✅ Création, modification et suppression de tâches
- ✅ Statuts des tâches : À faire, En cours, Terminé
- ✅ Niveaux de priorité : Faible, Moyenne, Élevée
- ✅ Tableau de bord avec statistiques
- ✅ Interface utilisateur moderne et responsive

### Gestion des Projets

- ✅ Création et gestion de projets
- ✅ Attribution de tâches aux projets
- ✅ Collaboration entre utilisateurs

### Gestion des Catégories

- ✅ Organisation des tâches par catégories
- ✅ Filtrage et recherche

## 🛠️ Installation et Déploiement

### Prérequis

- Docker et Docker Compose
- Git

### Déploiement avec Docker Compose

1. **Cloner le repository**

```bash
git clone https://github.com/Loickaltenbach/collaborative-task-management-application.git
cd collaborative-task-management-application
```

2. **Lancer l'application**

```bash
docker-compose up -d
```

3. **Accéder à l'application**

- Frontend : <http://localhost:4200>
- Backend API : <http://localhost:8080>
- Base de données PostgreSQL : localhost:5432

### Développement Local

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

## 📁 Structure du Projet

```
collaborative-task-management-application/
├── backend/                     # Application Spring Boot
│   ├── src/main/java/com/example/taskmanagement/
│   │   ├── controller/         # Contrôleurs REST
│   │   ├── model/             # Entités JPA
│   │   ├── repository/        # Repositories Spring Data
│   │   ├── security/          # Configuration de sécurité
│   │   ├── service/           # Services métier
│   │   └── exception/         # Gestion des exceptions
│   ├── src/main/resources/
│   │   └── application.properties
│   ├── Dockerfile
│   └── pom.xml
├── frontend/                   # Application Angular
│   ├── src/app/
│   │   ├── components/        # Composants réutilisables
│   │   ├── pages/            # Pages de l'application
│   │   ├── services/         # Services Angular
│   │   ├── interceptors/     # Intercepteurs HTTP
│   │   └── models/           # Interfaces TypeScript
│   ├── Dockerfile
│   ├── package.json
│   └── angular.json
└── docker-compose.yml
```

## 🔌 API Endpoints

### Authentification

- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion

### Tâches

- `GET /api/tasks` - Lister les tâches
- `POST /api/tasks` - Créer une tâche
- `PUT /api/tasks/{id}` - Modifier une tâche
- `DELETE /api/tasks/{id}` - Supprimer une tâche

### Projets

- `GET /api/projects` - Lister les projets
- `POST /api/projects` - Créer un projet
- `PUT /api/projects/{id}` - Modifier un projet
- `DELETE /api/projects/{id}` - Supprimer un projet

### Catégories

- `GET /api/categories` - Lister les catégories
- `POST /api/categories` - Créer une catégorie

## 🎨 Interface Utilisateur

L'application dispose d'une interface moderne avec :

- Design responsive adapté mobile et desktop
- Thème Material Design
- Animations et transitions fluides
- Dashboard avec statistiques visuelles
- Formulaires intuitifs de création/modification

## 🔒 Sécurité

- Authentification basée sur JWT
- Protection des routes avec guards Angular
- Validation des données côté client et serveur
- Hachage sécurisé des mots de passe
- Protection CORS configurée

## 🚀 Déploiement en Production

### Variables d'environnement

#### Backend

```env
SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/taskdb
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=postgres
JWT_SECRET=votre-clé-secrète-jwt
```

#### Frontend

Les variables d'environnement sont configurées dans `src/environments/`

## 📝 Scripts Disponibles

### Backend

```bash
# Compilation
./mvnw compile

# Tests
./mvnw test

# Packaging
./mvnw package

# Exécution
./mvnw spring-boot:run
```

### Frontend

```bash
# Installation des dépendances
npm install

# Développement
npm start

# Build de production
npm run build

# Tests
npm test
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Auteurs

- **Loic Kaltenbach** - *Développement initial* - [Loickaltenbach](https://github.com/Loickaltenbach)

## 🐛 Signaler un Bug

Si vous trouvez un bug, veuillez ouvrir une [issue](https://github.com/Loickaltenbach/collaborative-task-management-application/issues) avec :

- Description détaillée du problème
- Étapes pour reproduire
- Capture d'écran si applicable
- Informations sur votre environnement
