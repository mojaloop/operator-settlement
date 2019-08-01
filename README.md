# operator-settlement

Swagger api [location](./config/swagger.json)

## Build and installation requirement
You'll need the `.npmrc` file for Azure npm repo where casablanca-lib is hosted. You can find this in 1Password
under "_Mowali vault_", "_Documents_" category. Look for `_.npmrc for Azure Devops services npm repo_` file and 
copy the content of the file to `src/.npmrc`. `.npmrc` is in the gitignore so you won't accidentally commit it. 

## Installing
```bash
cd ./src
yarn install
```

# Building
```bash
make build
```

## Push to the repo
Follow the instructions from the `Build and installation requirement` section above, then:
```bash
make push
