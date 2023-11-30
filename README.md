# PROYECTO N°5 _ JUAN MOYANO ANFOSSI

El proyecto consiste en una Aplicacion de Comercio Electronico para una tienda de articulos de Escalada Deportiva.
Consta de un sitio de autenticacion, donde los usuarios pueden registrarse o en su defecto iniciar sesión, revisar su perfil y luego cerrar su sesión. Un catalogo de productos para los cuales se puede acceder a su detalle y luego al proceso de compra mediante una pasarela de pago de Mercadopago, para la cual se necesita estar logeado en el sitio.

La aplicacion se desarrolla tanto en el backend como en el frontend complementando asi una aplicación FULLSTACK.

Para el backend se hizo uso de Node JS, Express JS, Mongoose y MongoDB Atlas. Y para el frontend se utilizo HTML, CCS, Javascript y React. Finalmente para el despliegue de la API se utilizo Render.

Para clonar el proyecto:
Cliente:
$ git clone https://github.com/jgmoyano/Proyecto-5.git
$ cd ecommerce-app
$ npm install
$ npm run dev (Para iniciar navegador en localhost)

Servidor:
$ git clone https://github.com/jgmoyano/proyecto5-server.git
$ cd ecommerce-server
$ npm install
$ npm start (Para iniciar servidor)

NOTA IMPORTANTE:
Debido a que para el despliegue de la API se utilizo el servicio de Render en su modalidad gratuita, se requiere tener mucha paciencia en operaciones que tengan comunicacion con la API, tales como Registro, Inicio de Sesion y Catalogo de productos, en algunos casos estas operaciones podrian tardar hasta 5 minutos.