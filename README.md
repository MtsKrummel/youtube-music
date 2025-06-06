# 🎵 Apple Music Clone

Aplicación web inspirada en Apple Music, desarrollada con **React**, **TypeScript**, **Vite** y **TailwindCSS**. Permite explorar álbumes y canciones populares del rock argentino, con una interfaz moderna y responsiva.

---

## 🚀 Características

- Navegación lateral expandible/colapsable
- Listado de álbumes y canciones con carátulas
- Barra de reproducción fija
- Diseño responsive y moderno
- Componentización y uso de Context API para el estado global

---

## 📦 Estructura del Proyecto

```
├── public/
│   ├── albums/
│   ├── icons/
│   └── songs/
├── src/
│   ├── assets/
│   ├── components/
│   ├── consts/
│   ├── context/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── ...
```

---

## 🛠️ Instalación y Uso

1. **Instala las dependencias:**
   ```sh
   npm install
   ```

2. **Inicia el servidor de desarrollo:**
   ```sh
   npm run dev
   ```

3. **Construye para producción:**
   ```sh
   npm run build
   ```

> [!NOTE]
> El proyecto utiliza [Vite](https://vitejs.dev/) para un desarrollo rápido y recarga en caliente.

---

## 🧩 Principales Tecnologías

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)

---

## 📂 Componentes Destacados

- `App.tsx`: Componente raíz y layout principal.
- [`Navbar`](src/components/Navbar.tsx): Barra superior con menú y logo.
- [`SidebarOpen`](src/components/SidebarOpen.tsx) / [`SidebarClose`](src/components/SidebarClose.tsx): Navegación lateral expandible.
- [`PlayerBar`](src/components/Playerbar.tsx): Barra de reproducción fija.
- [`CarouselSection`](src/components/CarouselSection.tsx): Carrusel de álbumes/canciones.
- [`ListOfSongs`](src/components/ListOfSongs.tsx): Listado horizontal de canciones o álbumes.

---

## 🧑‍💻 Estado Global

El estado de la barra lateral se gestiona con Context API:

- [`DrawerContext`](src/context/drawer.tsx): Provee `isExpanded` y `setIsExpanded` a toda la app.

---

## 📋 Scripts Disponibles

| Comando         | Descripción                        |
|-----------------|------------------------------------|
| `npm run dev`   | Inicia el servidor de desarrollo   |
| `npm run build` | Compila la app para producción     |
| `npm run lint`  | Ejecuta ESLint                    |
| `npm run preview` | Previsualiza la build            |

---

## 📝 Notas

> [!NOTE]
> Las imágenes de álbumes y canciones se encuentran en la carpeta [`public/albums`](public/albums) y [`public/songs`](public/songs).

> [!TIP]
> Puedes personalizar los íconos en [`public/icons`](public/icons).

---

## 📄 Licencia

Proyecto educativo sin fines de lucro.  
Desarrollado por [Tu Nombre].
