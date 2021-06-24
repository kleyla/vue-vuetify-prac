# playing

Checking styles with vuetify

## DEPLOY

Crear el archivo o modificarlo si ya existe:

```
touch vue.config.js
```

```js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/my-repo/" : "/",
};
```

Crear el archivo:

```
touch deploy.sh
```

Copiar el sgte contenido y modificar:

```sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages

cd -
```

```
chmod +x deploy.sh
```

```
./deploy.sh
```
