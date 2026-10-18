# Camino de Fe · Estudio creativo

Primera versión en español para preparar historias bíblicas de 10–15 minutos y Shorts de 30–60 segundos.

## Inicio

Requiere Node.js 20 o superior. Sin dependencias externas de ejecución.

```sh
npm start
```

El servidor escucha en el puerto 3000 y acepta `PORT` para cambiarlo.

```sh
npm run check
```

## Disponible

- Crear historias con pasaje, mensaje y formato.
- Editar guiones y estimar duración a 140 palabras por minuto.
- Descargar instrucciones para generar un borrador con una IA externa.
- Dividir párrafos en escenas, editar narración y dirección visual.
- Exportar paquetes de texto para MiniMax Audio y Google Flow.
- Lista de revisión humana de fidelidad bíblica.
- Guardado local en el navegador y exportación JSON de respaldo.

## Límites de esta versión

No genera guiones, audio ni video automáticamente. MiniMax y Flow no están conectados. No valida por sí misma las Escrituras. No tiene cuentas, sincronización ni importación de respaldos. Los datos quedan en el navegador; exporta copias para conservarlos. No introduzcas credenciales ni datos sensibles. El servidor es para desarrollo y no incluye autenticación.

La tipografía remota es opcional y tiene alternativas locales. El resto de la aplicación no requiere servicios externos.

## Próximas integraciones

Añadir un backend con credenciales seguras y generación de audio con MiniMax; confirmar acceso oficial de Google Flow antes de prometer una integración directa. Incorporar generación de guion con referencias verificables, importación de respaldos, gestión de archivos y edición audiovisual.

## Cómo abrir y revisar la aplicación (principiantes)

1. En GitHub, selecciona la rama `feat/camino-de-fe-v1`.
2. Pulsa **Code → Codespaces → Create codespace on feat/camino-de-fe-v1**. Codespaces puede requerir disponibilidad o facturación en tu cuenta.
3. Cuando termine de abrir, escribe `npm start` en la terminal y pulsa Enter.
4. Abre la pestaña **Ports**, busca el puerto **3000** y pulsa **Open in Browser**. Mantén el puerto privado.
5. Crea una historia, escribe dos párrafos separados por una línea en blanco y pulsa **Guardar y dividir en escenas**.
6. Revisa las escenas, prueba la exportación de narración y de instrucciones para Flow. Recarga la página para comprobar que tu historia sigue guardada.

También puedes descargar el repositorio y ejecutar `npm start` en una computadora con Node.js 20 o superior.

## Cómo incorporar los cambios a main

Abre el Pull Request de `feat/camino-de-fe-v1` hacia `main`. En **Files changed** puedes revisar los archivos. Cuando hayas probado la aplicación y estés conforme, pulsa **Merge pull request → Confirm merge** (o **Squash and merge**, si esa es la opción disponible). Esto incorpora el código a `main`; no publica automáticamente un sitio web. Si eres el autor, GitHub puede impedir que apruebes formalmente tu propio Pull Request; podrás fusionarlo si las reglas del repositorio lo permiten.
