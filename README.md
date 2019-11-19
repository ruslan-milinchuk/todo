
# Todo list

## Install Application

1. Clone this repository

   ```git clone https://github.com/ruslan-milinchuk/todo.git```

2. Installs dependencies

   ```npm install```

3. Run docker-compose with mongo settings

   ```docker compose --up -build```

4. Add .env to web application

   ```REACT_APP_API_URL = http://localhost:5000/api```

5. Add .env to api

   ```PORT = 5000```
   
   ```MONGO_LINK = mongodb://localhost:27017/todo```

6. Start application

   ```npm start```

## Structure project

Packages :
* api (node)
* web (react)
