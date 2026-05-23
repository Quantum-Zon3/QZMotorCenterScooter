## Docker

Levantar app + PostgreSQL:

```bash
docker compose up --build
```

API:

```bash
http://localhost:3000/api/scooters
```

PostgreSQL desde un cliente SQL:

- Host: `localhost`
- Port: `5432`
- User: `postgres`
- Password: `postgres`
- Database: `qzmotorcenterscooter`

Detener contenedores:

```bash
docker compose down
```

Detener y borrar volumen de PostgreSQL:

```bash
docker compose down -v
```
