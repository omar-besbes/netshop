# Open Source eCommerce Backend ( NestJS )
# Assignment for testing class

## How To Run Locally ?
1. clone the project
2. run `docker compose up` (to setup a local db)
3. create a file `.env.local` and insert the uri from `.env.example`
4. generate your private key 🔐  ```openssl genrsa -out private_key.pem 2048```
5. generate your public key 🔑 ```openssl rsa -in private_key.pem -out public_key.pem -outform PEM -pubout```
6. start server `pnpm run start:dev`

## How to Run Tests ?
1. run `pnpm run test`

![image](https://github.com/omar-besbes/netshop/assets/86571415/57e31867-68c2-45ce-9809-be570a7bf227)

## How to Check Test Coverage ?
1. run `pnpm run test:cov`

![image](https://github.com/omar-besbes/netshop/assets/86571415/9c6a0252-e2f7-416d-86b5-e94cde00d230)
