
## strongbox-app

### Description

Strongbox is a password manager that helps you keep your passwords safe and secure. Strongbox is easy to use, making it the perfect password manager for anyone who wants to protect their online privacy.

### Requirements

* MongoDB (Database to secure your data)

### MongoDB Schema

#### User and Keys

The following file, show you the schema are used to save your information, after of create the database: ⬇
https://github.com/valenne/strongbox-app/blob/4359749fec52c274b6fe54013ca12c7ef53df7ed/server/db/Schema.md

### How to Use

1. Install the dependencies:

```
npm install
```

2. Create a .env file and add the following environment variables:

```
<!-- Parameter Database -->
MONGODB_URI = (mongodb://127.0.0.1:27017/ ⬅ your URL)
HOST_STRING = localhost
HOST_ADDRESS = 127.0.0.1
PORT_DB = 27017
DB_NAME = strongbox

<!-- Parameter Server -->
PORT_SERVER = (your PORT)

<!-- BYCRIPT Parameter -->
SALT_ROUNDS = 10

<!-- jwt token -->
TOKEN_SECRET = (insert here your secret password)
```

3. Start the app:
3.1 in a MongoDB terminal or powershell type to connect to a your db:
```
mongod

```
3.2 in mongodb Compass, in new Connecion write: mongodb://localhost:(27017) ⬅ port
3.3 open the proyect, and follow the next steps: 
```
cd server/
npm run start

cd client/
npm run dev

```

The app will be available at http://localhost:5173.

### Features

* Securely store your passwords
* Organize your passwords by category
* Keep track of your password changes

### Security

Strongbox uses the following security features to protect your passwords:

* End-to-end encryption
* Two-factor authentication

### Contact

[@valenne](https://github.com/valenne)
