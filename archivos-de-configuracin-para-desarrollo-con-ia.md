# Archivos de Configuración para Desarrollo con IA

**Templates listos para copiar y adaptar a tus proyectos**

***

## Contenido

1. CLAUDE.md - Configuración de contexto para Claude Code
2. .claude/settings.json - Permisos y configuración
3. .cursorrules - Reglas para Cursor AI
4. Plantillas por tipo de proyecto

***

## 1. CLAUDE.md - Contexto para Claude Code

El archivo CLAUDE.md le da contexto a Claude sobre tu proyecto. Colócalo en la raíz del proyecto.

### Template básico

```markdown
# Proyecto: [NOMBRE]

## Descripción
[Una o dos oraciones describiendo qué hace el proyecto]

## Stack Tecnológico
- Runtime: [Node.js 20 / Python 3.11 / etc]
- Framework: [Express / FastAPI / Next.js / etc]
- Base de datos: [PostgreSQL / MongoDB / etc]
- ORM: [Prisma / SQLAlchemy / etc]

## Comandos principales
- `npm run dev` - Servidor de desarrollo
- `npm run test` - Ejecutar tests
- `npm run lint` - Verificar código
- `npm run build` - Build de producción

## Estructura del proyecto
- `/src` - Código fuente
- `/tests` - Tests
- `/docs` - Documentación
- `/scripts` - Scripts de utilidad

## Convenciones de código
- Usar TypeScript strict mode
- Funciones async/await, no callbacks
- Nombres de variables en camelCase
- Nombres de archivos en kebab-case

## Notas importantes
- [Cualquier contexto crítico que Claude deba saber]
```

### Template completo (proyectos grandes)

```markdown
# Proyecto: [NOMBRE DEL PROYECTO]

## Visión General
[Descripción de 2-3 oraciones del propósito del proyecto]

## Stack Tecnológico
| Categoría | Tecnología | Versión |
|-----------|------------|---------|
| Runtime | Node.js | 20.x |
| Framework | Express | 4.x |
| Base de datos | PostgreSQL | 15 |
| ORM | Prisma | 5.x |
| Testing | Jest | 29.x |
| Linting | ESLint | 8.x |

## Comandos del Proyecto

### Desarrollo
- `npm run dev` - Inicia servidor con hot reload
- `npm run db:studio` - Abre Prisma Studio

### Testing
- `npm test` - Ejecuta todos los tests
- `npm run test:watch` - Tests en modo watch
- `npm run test:coverage` - Tests con cobertura

### Base de datos
- `npm run db:migrate` - Ejecuta migraciones
- `npm run db:seed` - Carga datos de prueba
- `npm run db:reset` - Reset completo (¡cuidado!)

### Build y Deploy
- `npm run build` - Build de producción
- `npm run start` - Inicia en modo producción

## Estructura del Proyecto

```

src/
├── api/           # Endpoints REST
│   ├── routes/    # Definición de rutas
│   ├── controllers/  # Lógica de controladores
│   └── middleware/   # Middleware personalizado
├── services/      # Lógica de negocio
├── models/        # Modelos de datos
├── utils/         # Funciones utilitarias
└── config/        # Configuración
tests/
├── unit/          # Tests unitarios
├── integration/   # Tests de integración
└── fixtures/      # Datos de prueba

```

## Convenciones de Código

### Nomenclatura
- Variables y funciones: camelCase
- Clases y tipos: PascalCase  
- Constantes: UPPER_SNAKE_CASE
- Archivos: kebab-case.ts

### Patrones
- Controladores: Solo manejan request/response
- Servicios: Toda la lógica de negocio
- Validación: Usar Zod en la capa de API
- Errores: Usar clases custom que extienden Error

### Estilo
- Max 100 caracteres por línea
- Usar early returns
- Preferir composición sobre herencia
- No usar `any` - siempre tipar

## Variables de Entorno

Requeridas en `.env`:
- `DATABASE_URL` - URL de conexión a PostgreSQL
- `JWT_SECRET` - Secret para tokens (min 32 chars)
- `PORT` - Puerto del servidor (default: 3000)

Opcionales:
- `LOG_LEVEL` - Nivel de logging (debug/info/warn/error)
- `ENABLE_CORS` - Habilitar CORS (true/false)

## Arquitectura y Decisiones

### Por qué Prisma
Elegimos Prisma sobre Sequelize por su mejor soporte de TypeScript y migraciones más predecibles.

### Autenticación
Usamos JWT con refresh tokens. Los access tokens duran 15 minutos, los refresh tokens 7 días.

### Manejo de errores
Todas las excepciones deben usar las clases en `/src/errors/`. El middleware global las convierte a respuestas HTTP apropiadas.

## Notas para Claude

### Lo que SÍ puedes hacer
- Crear archivos en /src y /tests
- Ejecutar tests y comandos de desarrollo
- Modificar código existente
- Crear migraciones de base de datos

### Lo que NO debes hacer
- Modificar archivos en /scripts/deploy
- Cambiar configuración de CI/CD
- Modificar variables de entorno de producción
- Hacer cambios directos a la base de datos de producción

### Contexto importante
- Este proyecto maneja datos financieros - la seguridad es crítica
- Tenemos +100K usuarios activos - considerar performance
- El código se despliega automáticamente al hacer merge a main
```

### Template para monorepo

```markdown
# Monorepo: [NOMBRE]

## Estructura

Este es un monorepo con los siguientes packages:

| Package | Descripción | Puerto |
|---------|-------------|--------|
| @project/api | Backend REST | 3000 |
| @project/web | Frontend Next.js | 3001 |
| @project/shared | Tipos y utils compartidos | - |
| @project/mobile | App React Native | - |

## Comandos Globales
- `npm run dev` - Inicia todos los servicios
- `npm run build` - Build de todos los packages
- `npm run test` - Tests de todos los packages

## Comandos por Package
- `npm run dev:api` - Solo backend
- `npm run dev:web` - Solo frontend
- `npm run test:api` - Tests del backend

## Dependencias entre packages
- `@project/web` → `@project/shared`
- `@project/api` → `@project/shared`
- `@project/mobile` → `@project/shared`

## Convenciones
- Código compartido va en @project/shared
- Tipos de API definidos en @project/shared/types
- Cada package tiene su propio README con detalles
```

***

## 2. .claude/settings.json

Configuración de permisos para Claude Code. Crea la carpeta `.claude` en la raíz del proyecto.

### Configuración permisiva (proyectos personales)

```json
{
  "permissions": {
    "allow": [
      "Read files",
      "Write files", 
      "Execute commands",
      "Search codebase"
    ],
    "deny": []
  },
  "context": {
    "includePatterns": ["**/*"],
    "excludePatterns": [
      "node_modules/**",
      ".git/**",
      "dist/**",
      "*.log"
    ]
  }
}
```

### Configuración restrictiva (proyectos sensibles)

```json
{
  "permissions": {
    "allow": [
      "Read files",
      "Search codebase"
    ],
    "deny": [
      "Write files",
      "Execute commands"
    ],
    "askBefore": [
      "Modify existing files",
      "Create new files",
      "Run shell commands"
    ]
  },
  "context": {
    "includePatterns": [
      "src/**",
      "tests/**",
      "package.json",
      "tsconfig.json"
    ],
    "excludePatterns": [
      "node_modules/**",
      ".git/**",
      ".env*",
      "secrets/**",
      "*.pem",
      "*.key"
    ]
  },
  "protectedPaths": [
    ".env",
    ".env.*",
    "secrets/",
    "scripts/deploy/",
    "infrastructure/"
  ]
}
```

### Configuración para equipos

```json
{
  "permissions": {
    "allow": [
      "Read files",
      "Search codebase",
      "Write files in src/",
      "Write files in tests/",
      "Execute npm scripts"
    ],
    "deny": [
      "Execute arbitrary commands",
      "Modify config files",
      "Access .env files"
    ]
  },
  "context": {
    "excludePatterns": [
      "node_modules/**",
      ".git/**",
      "dist/**",
      ".env*",
      "*.secret",
      "credentials/**"
    ]
  },
  "codeStyle": {
    "language": "es",
    "commentLanguage": "es",
    "preferredPatterns": [
      "async/await over promises",
      "functional over class-based",
      "composition over inheritance"
    ]
  }
}
```

***

## 3. .cursorrules - Configuración para Cursor

Coloca este archivo en la raíz del proyecto para configurar Cursor AI.

### Template general

```
You are an expert developer working on this project.

PROJECT CONTEXT:
- This is a [TYPE] project using [MAIN TECHNOLOGIES]
- The project follows [ARCHITECTURE PATTERN]
- We use [LANGUAGE] for all code

CODE STYLE:
- Use descriptive variable names in English
- Write comments in Spanish when explaining complex logic
- Prefer async/await over callbacks
- Use early returns to reduce nesting
- Maximum line length: 100 characters

WHEN WRITING CODE:
- Always include TypeScript types
- Add JSDoc comments to public functions
- Handle errors explicitly, never silently fail
- Write unit tests for new functions

WHEN EXPLAINING:
- Be concise and direct
- Use code examples when helpful
- Explain the "why" not just the "what"

DO NOT:
- Use `any` type in TypeScript
- Leave console.log in production code
- Create files outside of /src or /tests
- Modify configuration files without asking
```

### Template para JavaScript/TypeScript

```
You are a senior TypeScript developer.

TECH STACK:
- Node.js 20 with TypeScript 5
- Express for REST APIs
- Prisma for database access
- Jest for testing
- ESLint + Prettier for code quality

TYPESCRIPT RULES:
- Enable strict mode always
- Define explicit return types for functions
- Use interfaces for object shapes
- Use type for unions and primitives
- Never use `any` - use `unknown` if truly needed

PATTERNS TO FOLLOW:
- Repository pattern for data access
- Service layer for business logic
- DTOs for API input/output
- Factory functions over classes when possible

ERROR HANDLING:
- Use custom error classes extending Error
- Always include error codes for API errors
- Log errors with context (userId, requestId)
- Never expose stack traces to clients

NAMING:
- camelCase for variables and functions
- PascalCase for classes, interfaces, types
- UPPER_CASE for constants
- kebab-case for file names

TESTING:
- One test file per source file
- Use describe/it blocks with clear names
- Test file names: [original].test.ts
- Mock external dependencies
```

### Template para Python

```
You are a senior Python developer.

TECH STACK:
- Python 3.11+
- FastAPI for APIs
- SQLAlchemy for ORM
- Pytest for testing
- Black + Ruff for formatting

PYTHON STYLE:
- Follow PEP 8
- Use type hints everywhere
- Prefer dataclasses or Pydantic models
- Use pathlib over os.path

PATTERNS:
- Use dependency injection with FastAPI
- Repository pattern for data access
- Async by default for I/O operations
- Context managers for resources

NAMING:
- snake_case for variables, functions, modules
- PascalCase for classes
- UPPER_CASE for constants
- Private members prefixed with underscore

DOCUMENTATION:
- Google-style docstrings
- Type hints serve as primary documentation
- Comments explain "why", not "what"

TESTING:
- Use pytest fixtures
- Test file: test_[module].py
- Use factories for test data
- Mock external services
```

### Template para React/Next.js

```
You are a senior React developer.

TECH STACK:
- Next.js 14 with App Router
- TypeScript strict mode
- Tailwind CSS for styling
- React Query for server state
- Zustand for client state

COMPONENT RULES:
- Functional components only
- Props interface above component
- Destructure props in function signature
- Co-locate related files (component, test, styles)

FILE STRUCTURE:
- One component per file
- Index files for public exports
- Hooks in /hooks directory
- Utils in /lib directory

STATE MANAGEMENT:
- Server state with React Query
- Form state with React Hook Form
- Global client state with Zustand
- Local state with useState

STYLING:
- Tailwind utility classes
- Component variants with cva
- No inline styles
- Dark mode support required

PATTERNS:
- Container/Presentational separation
- Custom hooks for reusable logic
- Error boundaries for error handling
- Suspense for loading states

ACCESSIBILITY:
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
```

***

## 4. Plantillas por Tipo de Proyecto

### API REST con Express

**CLAUDE.md**

```markdown
# API REST - [Nombre]

## Stack
- Node.js 20 + TypeScript
- Express 4
- Prisma + PostgreSQL
- Jest para tests

## Comandos
- `npm run dev` - Desarrollo con hot reload
- `npm test` - Ejecutar tests
- `npm run db:migrate` - Migraciones

## Estructura
- `/src/routes` - Definición de endpoints
- `/src/services` - Lógica de negocio
- `/src/middleware` - Auth, validation, errors

## Convenciones
- Endpoints REST estándar (GET, POST, PUT, DELETE)
- Respuestas: { data, error, meta }
- Códigos HTTP apropiados
- Validación con Zod
```

### Frontend Next.js

**CLAUDE.md**

```markdown
# Frontend - [Nombre]

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Query

## Comandos
- `npm run dev` - Desarrollo en :3000
- `npm run build` - Build de producción
- `npm run lint` - Verificar código

## Estructura
- `/app` - Rutas y páginas
- `/components` - Componentes reutilizables
- `/lib` - Utilidades y configuración
- `/hooks` - Custom hooks

## Convenciones
- Server Components por defecto
- Client Components solo cuando necesario
- Tailwind para estilos
- Loading y error states obligatorios
```

### CLI Tool

**CLAUDE.md**

```markdown
# CLI - [Nombre]

## Stack
- Node.js 20 + TypeScript
- Commander.js para CLI
- Inquirer para prompts
- Chalk para colores

## Comandos
- `npm run dev` - Ejecutar en desarrollo
- `npm run build` - Compilar para distribución
- `npm link` - Instalar globalmente local

## Estructura
- `/src/commands` - Comandos del CLI
- `/src/utils` - Helpers
- `/src/config` - Configuración

## Convenciones
- Un archivo por comando
- Mensajes de error claros
- Colores para UX (verde=éxito, rojo=error)
- Help text descriptivo
```

### Microservicio

**CLAUDE.md**

```markdown
# Microservicio - [Nombre]

## Propósito
[Qué hace este servicio específicamente]

## Stack
- Node.js 20 + TypeScript
- Express / Fastify
- RabbitMQ para mensajería
- Redis para cache
- PostgreSQL para datos

## Endpoints
- `GET /health` - Health check
- `POST /api/v1/...` - [Endpoint principal]

## Eventos
- Publica: [eventos que emite]
- Consume: [eventos que escucha]

## Variables de entorno
- `DATABASE_URL`
- `REDIS_URL`
- `RABBITMQ_URL`
- `SERVICE_NAME`
```

***

## Cómo Usar Estos Templates

1. **Copia el template** que más se ajuste a tu proyecto
2. **Adapta los detalles** a tu stack y convenciones específicas
3. **Coloca los archivos** en la raíz de tu proyecto:
   * `CLAUDE.md` - Raíz del proyecto
   * `.claude/settings.json` - En carpeta .claude
   * `.cursorrules` - Raíz del proyecto
4. **Actualiza conforme evolucione** el proyecto

## Tips

* **Sé específico**: Mientras más contexto des, mejores resultados obtienes
* **Documenta decisiones**: Explica el "por qué" de tus convenciones
* **Lista restricciones**: Indica claramente qué NO debe hacer la IA
* **Mantén actualizado**: Revisa estos archivos cuando cambies el stack

***

*Recurso creado por yoDEV.dev - Configuraciones para desarrollo con IA*

yoDEV.dev La red de desarrolladores de Latina América
