postgres://csxokzrnacfszy:810fcb2315087e2595c0a4070c397da4f321185a799c1b18c0a362c4ee699b0d@ec2-3-216-92-193.compute-1.amazonaws.com:5432/d6i61h159l1i17

username:password@host:port/database

heroku config:set \
APP_ENV=production \
APP_KEY=$(php artisan --no-ansi key:generate --show) \
APP_DEBUG=true \
APP_LOG=errorlog \
DB_CONNECTION=pgsql \
DB_HOST=ec2-3-216-92-193.compute-1.amazonaws.com \
DB_PORT=5432 \
DB_DATABASE=d6i61h159l1i17 \
DB_USERNAME=csxokzrnacfszy \
DB_PASSWORD=810fcb2315087e2595c0a4070c397da4f321185a799c1b18c0a362c4ee699b0d