# 🏛️ Prueba Técnica - Municipalidad de Capital

## 📌 Nombre del Proyecto

#### Software para gestión de usuarios

## 🛠️ Tecnologías Utilizadas

- ⚙️ **Backend:** [NestJS](https://nestjs.com/) ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
- 🌐 **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
  - ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
  - ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
- 📦 **Gestor de paquetes:** npm ![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)

## 📝 Breve Descripción

Este repositorio contiene dos aplicaciones separadas (backend y frontend) desarrolladas como parte de una prueba técnica para la Municipalidad de Capital. Cada parte se encuentra en su propia carpeta y puede ejecutarse de manera independiente.

## 📂 Estructura del Proyecto

```
/
├── backend-prueba/   # API REST construida con NestJS
└── frontend-prueba/  # Aplicación web desarrollada con React y Vite
```

## 🚀 Pasos para Instalar y Correr

### 🔧 Backend (NestJS)

```bash
cd backend-prueba
npm install
npm start
```

> El servidor se ejecutará por defecto en `http://localhost:3000`.

### 🖥️ Frontend (React + Vite)

```bash
cd frontend-prueba
npm install
npm run dev
```

> La aplicación se servirá por defecto en `http://localhost:5173`.

⚠️ Asegúrese de tener [Node.js](https://nodejs.org/) (versión recomendada: 18.x o superior) y npm instalados.

## 🧪 Comandos Útiles para Desarrollo

### 📌 Backend

- `npm run start`: Inicia la aplicación en modo desarrollo.
- `npm run start:dev`: Inicia con hot-reload usando `ts-node-dev`.
- `npm run build`: Compila el proyecto a JavaScript.
- `npm run test`: Ejecuta los tests.

### 📌 Frontend

- `npm run dev`: Inicia la app en modo desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run preview`: Sirve la app compilada localmente.
