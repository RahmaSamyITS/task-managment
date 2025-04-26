
FROM node:20 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# ----------- Stage 2: Development -----------
FROM base AS development
COPY . .
EXPOSE 4200
CMD ["npm", "run", "start"]

# ----------- Stage 3: Testing -----------
FROM base AS testing
COPY . .
# Headless testing
CMD ["npm", "run", "test", "--", "--watch=false", "--browsers=ChromeHeadless"]

# ----------- Stage 4: Production -----------
FROM base AS build-prod
COPY . .
RUN npm run build --prod

# Serve Angular App via Nginx
FROM nginx:alpine AS production
COPY --from=build-prod /app/dist/task-managment /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]