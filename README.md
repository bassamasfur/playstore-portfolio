# Bassam Playstore - Portfolio Google Play Console

Aplicación web desarrollada con Angular 21 que muestra el portafolio de aplicaciones publicadas en Google Play Console por Bassam Asfur.

## 📱 Aplicaciones en Google Play

### 1. **Calcular IMC**
- **Paquete**: `com.bassamasfur.appsalud`
- **Estado**: Producción ✅
- **Descripción**: Aplicación para calcular el Índice de Masa Corporal (IMC) de manera rápida y sencilla.
- **Estadísticas**:
  - 72 usuarios activos
  - 11 adquisiciones
  - 5,000⭐ valoración
  - $2 USD ingresos

### 2. **AliviaDol**
- **Paquete**: `com.bassamasfur.aliviadol`
- **Estado**: Prueba cerrada 🧪
- **Descripción**: Herramienta médica para el seguimiento y gestión del dolor con recordatorios y gráficos.
- **Estadísticas**:
  - 3 usuarios activos
  - 4 adquisiciones
  - Sin valoraciones aún

## 🏗️ Arquitectura MVC

El proyecto sigue una arquitectura MVC (Modelo-Vista-Controlador) organizada de la siguiente manera:

```
src/app/
├── models/              # 📦 Modelos de datos
│   └── app.model.ts     # Interfaz PlayStoreApp
├── services/            # 🎛️ Controladores (Lógica de negocio)
│   └── app.service.ts   # Servicio para gestionar apps
├── views/               # 👁️ Vistas (Componentes UI)
│   ├── home/            # Página de inicio
│   ├── app-list/        # Lista de aplicaciones
│   └── app-detail/      # Detalle de aplicación
└── app.routes.ts        # Configuración de rutas
```

### Componentes principales:

- **Model** (`models/app.model.ts`): Define la interfaz `PlayStoreApp` con todos los datos de las aplicaciones.
- **Controller** (`services/app.service.ts`): Servicio inyectable que gestiona la lógica de negocio y datos.
- **Views** (`views/`): Componentes standalone que muestran la información al usuario.

## 📄 app-ads.txt

El archivo `app-ads.txt` está ubicado en la carpeta `public/` y será accesible en la ruta raíz del dominio:

```
/app-ads.txt
```

**Contenido:**
```
google.com, pub-9670246345724768, DIRECT, f08c47fec0942fa0
```

### ⚠️ Importante
**NO necesitas un archivo app-ads.txt por cada aplicación**. Un solo archivo en el dominio raíz funciona para todas las aplicaciones del mismo desarrollador (ID de cuenta: 5188124797212086585).

## 🚀 Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
npm start
```

O alternativamente:

```bash
ng serve
```

Abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques los archivos fuente.

## 🔨 Construcción

Para construir el proyecto para producción, ejecuta:

```bash
npm run build
```

Los artefactos de construcción se almacenarán en el directorio `dist/`. La construcción de producción optimiza tu aplicación para rendimiento y velocidad.

**Importante**: Asegúrate de que el archivo `app-ads.txt` sea accesible en la raíz del dominio cuando despliegues.

## 🧪 Pruebas unitarias

Para ejecutar las pruebas unitarias, ejecuta:

```bash
npm test
```

## 📋 Rutas de la aplicación

- `/` - Página de inicio con resumen del desarrollador
- `/apps` - Lista completa de aplicaciones
- `/apps/:id` - Detalle de una aplicación específica

## 🛠️ Tecnologías utilizadas

- **Angular 21** - Framework web
- **TypeScript 5.9** - Lenguaje de programación
- **RxJS 7.8** - Programación reactiva
- **CSS3** - Estilos

## 📝 Notas adicionales

### Verificación de app-ads.txt en Google Play Console

1. El archivo `app-ads.txt` debe estar accesible en: `https://tudominio.com/app-ads.txt`
2. Google Play Console verificará automáticamente el archivo
3. Un solo archivo funciona para todas las aplicaciones del mismo desarrollador
4. No es necesario crear archivos individuales por aplicación

### Estructura de datos

Los datos de las aplicaciones se gestionan en `app.service.ts`. Para agregar o editar aplicaciones, modifica el array `apps` en ese servicio.

## 📞 Contacto

**Desarrollador**: Bassam Asfur  
**ID de cuenta Google Play**: 5188124797212086585

## 📄 Licencia

Este proyecto es privado y pertenece a Bassam Asfur.

