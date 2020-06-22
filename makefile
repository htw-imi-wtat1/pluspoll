start:
	docker-compose up -d
stop:
	docker-compose down
rebuild:
	docker-compose up -d --build --force-recreate pluspoll
justdb:
	docker-compose up -d mongodb
open:
	open http://localhost:3011
