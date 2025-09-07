# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it by emailing [your-email@example.com]. All security vulnerabilities will be promptly addressed.

**Please do NOT open public issues for security vulnerabilities.**

## Security Measures Implemented

### Authentication & Authorization

- JWT-based authentication
- Password hashing using Spring Security
- Token expiration and refresh mechanisms
- CORS protection

### Data Protection

- Environment variables for sensitive configuration
- Input validation and sanitization
- SQL injection prevention through JPA/Hibernate
- XSS protection via Angular's built-in sanitization

### Infrastructure Security

- Docker containerization
- Database access restrictions
- No hard-coded secrets in source code
- Secure HTTP headers

## Security Configuration

### Environment Variables

Always set these environment variables in production:

#### Backend

```bash
JWT_SECRET=your_super_secure_jwt_secret_at_least_256_bits_long
SPRING_DATASOURCE_PASSWORD=your_strong_database_password
POSTGRES_PASSWORD=your_strong_database_password
```

#### Database

- Use strong passwords (minimum 12 characters)
- Change default database credentials
- Restrict database access to application only

### Production Deployment

- Use HTTPS in production
- Set up proper firewall rules
- Regular security updates
- Monitor for security vulnerabilities
- Use secrets management systems (HashiCorp Vault, AWS Secrets Manager, etc.)

## Security Best Practices for Contributors

1. Never commit sensitive data (passwords, API keys, tokens)
2. Use environment variables for configuration
3. Follow the principle of least privilege
4. Validate all user inputs
5. Keep dependencies updated
6. Use parameterized queries
7. Implement proper error handling without exposing sensitive information

## Regular Security Maintenance

- Regularly update dependencies
- Monitor security advisories
- Perform security audits
- Review access logs
- Update this security policy as needed

## Contact

For security-related questions or concerns, please contact [your-email@example.com].
