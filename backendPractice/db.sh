docker compose up -d 
sleep 1
docker exec -it postgres psql -U myuser mydb