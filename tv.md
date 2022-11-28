## Technical View

++Proyecto Final

FrontEnd Similar a:
https://opensea.io

Usaremos API de:
https://docs.alchemy.com

Base de datos:
https://firebase.google.com   (verificar GET/POST ciclo)


### Estructura General
:: En orden de visualizacion del usuario

1-Landing Page


2-Marketplace
	cuenta con: 
		-Autenticacion local/terceros
		-Sesion individual (localStorage)
		-Vusualizacion de NFT`s 	
		-Poder calificar (STARS) a NFT`s 
		-Wallet (guardado de sus colecciones
		-Carrito de Compra
		-Pasarela de Pago
		-LoadFiles (DNI/foto/ ETC)


3-DashBoard Admin
	cuenta con:
		-Autenticacion (Local)
		-despliegue de usuarios
		-Borrado/Bloqueo  de usuarios




### ANOTACIONES DISCORD
Deploy > ???
Auth > ???
Pasarela de pagos > Api mercado pago ?
Filtros combinados > Filtrado front, redux
Local Storage/Persist > ???
Rewiews/puntuación > ???
Dashboard Admin > Administrar users, verificar?, editar/eliminar publi-rewiews
Notificaciones mail > ???
Borrado lógico > Avaible ? true : false

API > https://www.alchemy.com/nft-api
Template > https://opensea.io/es
Landing Page > ???
Market-Place > Todas las publicaciones
Market-Place Cards > Que info mostramos
Prod-Details > ???
Favoritos > LocalStorage o DB?
Carrito > LocalStorage o DB?
Perfil user > wallet, collecciones, etc
Users > User (landing) - UserVer (compra-venta, comments) - Admin (administrar users-verificar?, publicaciones, rewiews)
Models DB > User y Prod
Models DB - User > Nombre, apellido, gmail, password, status (user, verif, admin), dni, colleccion, idPK
Models DB - Prod > Imagen, nombre, precio, rewiews, inventario, idPK, etc etc
Rutas back > ???
Rutas front > ???

Funcionalidades
- Recuperar password 

