# Mercado Libre Search!

Es una plataforma de búsqueda de artículos, que consume una api externa del sitio web de mercado libre; la cual se encarga de guardar los datos en cache para optimizar el rendimiento de la aplicación.

### Installation
- **Server**
  ```node
  // Instalar el servidor global
  sudo apt install redis-server
  // Inicializar servidor
  redis-server
  // Instalar dependencias de la APP
  cd api/
  npm i
  // Ejecutar servidor
  npm start
  ```
- **Client**
  ```node
  // Instalar dependencias
  cd client/
  npm i
  // Ejecutar Cliente
  npm start
  ```
### Previews
![Demo](https://github.com/karlofsd/ML-Search/blob/master/client/assets/MLsearch.GIF)
