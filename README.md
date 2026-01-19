# blank

blank

## Deployment

### Prerequisites

1.  **Environment Variables**: Ensure you have a `.env` file with `PAYLOAD_SECRET` and `DATABASE_URI` (set to `file:/app/local.db` for Docker).
2.  **Edge Network**: Ensure the external `edge` network exists:
    ```bash
    docker network create edge
    ```

### Deploy to VPS

Run the following command to build and start the container in detached mode:

```bash
docker compose -f docker-compose.prod.yml up -d
```

### Update Procedure

To update the application (pull changes and rebuild):

```bash
git pull
docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml up -d --build
```

### Troubleshooting

- Check logs: `docker logs -f agency-blog-agency-blog-1`
- Verify container is running: `docker ps`
