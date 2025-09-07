FROM node:20-alpine AS build
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build application with production config
RUN npm run build -- --configuration=production

FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built application - check exact path
COPY --from=build /app/dist/task-app/browser /usr/share/nginx/html

# Create nginx config for Angular SPA
RUN echo 'events { worker_connections 1024; }' > /etc/nginx/nginx.conf && \
    echo 'http {' >> /etc/nginx/nginx.conf && \
    echo '  include /etc/nginx/mime.types;' >> /etc/nginx/nginx.conf && \
    echo '  default_type application/octet-stream;' >> /etc/nginx/nginx.conf && \
    echo '  server {' >> /etc/nginx/nginx.conf && \
    echo '    listen 80;' >> /etc/nginx/nginx.conf && \
    echo '    server_name localhost;' >> /etc/nginx/nginx.conf && \
    echo '    root /usr/share/nginx/html;' >> /etc/nginx/nginx.conf && \
    echo '    index index.html index.htm;' >> /etc/nginx/nginx.conf && \
    echo '    location / {' >> /etc/nginx/nginx.conf && \
    echo '      try_files $uri $uri/ /index.html;' >> /etc/nginx/nginx.conf && \
    echo '    }' >> /etc/nginx/nginx.conf && \
    echo '  }' >> /etc/nginx/nginx.conf && \
    echo '}' >> /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
