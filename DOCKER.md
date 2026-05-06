## Docker

Levantar app + MySQL:

```bash
docker compose up --build
```

API:

```bash
http://localhost:3000/api/scooters
```

MySQL desde Workbench:

- Host: `localhost`
- Port: `3307`
- User: `root`
- Password: `root`
- Database: `qzmotorcenterscooter`

Variables Docker usadas por los contenedores:

- Archivo: `.env.docker`
- La app local sigue usando `.env`

Detener contenedores:

```bash
docker compose down
```

Detener y borrar volumen de MySQL:

```bash
docker compose down -v
```
