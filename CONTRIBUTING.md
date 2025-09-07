# Contributing to Collaborative Task Management Application

Merci de votre intérêt pour contribuer à ce projet ! Ce guide vous aidera à commencer.

## 🚀 Comment contribuer

### 1. Fork et Clone

```bash
# Fork le repository sur GitHub, puis :
git clone https://github.com/VOTRE-USERNAME/collaborative-task-management-application.git
cd collaborative-task-management-application
```

### 2. Configuration de l'environnement de développement

```bash
# Configurer les variables d'environnement
cp .env.example .env
./generate-secrets.sh  # Générer des secrets sécurisés

# Lancer l'application en mode développement
docker-compose up -d
```

### 3. Créer une branche pour votre fonctionnalité

```bash
git checkout -b feature/nom-de-votre-fonctionnalite
```

## 📝 Standards de code

### Backend (Java/Spring Boot)

- Suivre les conventions Java standard
- Utiliser Spring Boot best practices
- Écrire des tests unitaires avec JUnit
- Documenter les API avec des commentaires Javadoc

### Frontend (Angular/TypeScript)

- Suivre le guide de style Angular
- Utiliser TypeScript strict
- Implémenter des tests avec Jasmine/Karma
- Respecter les principes de composants réutilisables

### Général

- Code en anglais (commentaires, variables, fonctions)
- Messages de commit descriptifs en français ou anglais
- Tests pour toute nouvelle fonctionnalité
- Documentation mise à jour

## 🔒 Sécurité

- **JAMAIS** committer de secrets ou mots de passe
- Suivre les guidelines du fichier [SECURITY.md](SECURITY.md)
- Valider toutes les entrées utilisateur
- Utiliser des requêtes paramétrées

## 🧪 Tests

### Backend

```bash
cd backend
./mvnw test
```

### Frontend

```bash
cd frontend
npm test
```

## 📋 Process de Pull Request

1. **Vérifiez** que votre code suit les standards
2. **Ajoutez** des tests pour vos modifications
3. **Mettez à jour** la documentation si nécessaire
4. **Assurez-vous** que tous les tests passent
5. **Créez** une Pull Request avec une description claire

### Template de Pull Request

```markdown
## Description
Brève description des changements

## Type de changement
- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Breaking change
- [ ] Documentation

## Tests
- [ ] Tests unitaires ajoutés/mis à jour
- [ ] Tests d'intégration passent
- [ ] Tests manuels effectués

## Checklist
- [ ] Code suit les standards du projet
- [ ] Auto-évaluation du code effectuée
- [ ] Documentation mise à jour
- [ ] Aucun secret committté
```

## 🐛 Signaler des bugs

Utilisez les GitHub Issues avec le template suivant :

- **Description** : Description claire du problème
- **Reproduction** : Étapes pour reproduire
- **Comportement attendu** : Ce qui devrait se passer
- **Captures d'écran** : Si applicable
- **Environnement** : OS, version du navigateur, etc.

## 💡 Proposer des fonctionnalités

1. Ouvrir une Issue avec le label "enhancement"
2. Décrire la fonctionnalité et sa valeur ajoutée
3. Discuter de l'implémentation dans l'Issue
4. Attendre l'approbation avant de commencer le développement

## 📞 Contact

Pour toute question, contactez :

- GitHub Issues pour les questions techniques
- Email : [votre-email@example.com] pour les questions de sécurité

## 📄 Code de conduite

Ce projet adhère au [Contributor Covenant](https://www.contributor-covenant.org/). En participant, vous vous engagez à respecter ce code.

Merci de contribuer à ce projet ! 🙏
