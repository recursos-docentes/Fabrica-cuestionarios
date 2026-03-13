# 🛠️ Fábrica de Cuestionarios Automatizada (Google Apps Script)

Este proyecto permite la generación masiva y automatizada de exámenes autogestionados mediante **Google Forms** y **Google Apps Script**. Está diseñado específicamente para el ámbito técnico y docente (orientado a cursos de UTU y bachilleratos tecnológicos), permitiendo organizar las evaluaciones por niveles de dificultad: **Básico, Intermedio y Avanzado**.

## 🚀 Características Principales

* **Generación Dinámica:** Crea formularios de Google automáticamente a partir de un banco de preguntas en JavaScript.
* **Organización por Niveles:** Permite configurar cuántas preguntas de cada nivel (Básico, Intermedio, Avanzado) debe incluir el examen.
* **Aleatoriedad:** Mezcla las preguntas de cada banco para que cada examen generado sea diferente.
* **Gestión de Archivos:** Crea automáticamente una carpeta en Google Drive (ej. "Exámenes - Marzo 2026") y mueve los formularios allí para mantener el orden.
* **Identificación Obligatoria:** Incluye campos de Nombre, Apellido y selección de Grupo de forma predeterminada.

## 📋 Instrucciones de Configuración

Seguí estos pasos para poner en marcha tu propia fábrica de exámenes:

1.  **Crear el Proyecto:**
    * Andá a [Google Drive](https://drive.google.com/).
    * Seleccioná **Nuevo > Más > Google Apps Script**.
    * Dale un nombre al proyecto (ej. "Generador de Exámenes de Programación").

2.  **Pegar el Script Maestro:**
    * Copiá el código del archivo `Codigo.gs` (o el script maestro que tenés) y reemplazá todo el contenido en el editor de Apps Script.

3.  **Configurar Bancos de Preguntas:**
    * Localizá las variables `bancoBasico`, `bancoIntermedio` y `bancoAvanzado`.
    * Utilizá la función `crearPregunta(tipo, titulo, opciones, correcta)` para añadir tus ítems.
    * **Ejemplo:**
        ```javascript
        crearPregunta('MULTIPLE', '¿Qué significa MVC?', ['Modelo Vista Controlador', 'Mi Vida Corta'], 0)
        ```

4.  **Ejecutar:**
    * En la barra de herramientas superior, seleccioná la función `generarMultiplesExamenes`.
    * Hacé clic en **Ejecutar**. (La primera vez te pedirá permisos para acceder a Google Drive y Google Forms).

## 🛠️ Tipos de Preguntas Soportados

| Tipo | Descripción | Formato de Respuesta Correcta |
| :--- | :--- | :--- |
| `MULTIPLE` | Opción múltiple (una sola correcta). | Índice numérico (ej. `0`) |
| `CHECKBOX` | Casillas de verificación (varias correctas). | Array de índices (ej. `[0, 2]`) |
| `DROPDOWN` | Lista desplegable. | Índice numérico (ej. `1`) |
| `TEXT` | Pregunta abierta/párrafo. | `null` (evaluación manual) |

## 💡 Consejos para la Labor Docente

* **Uso de la IA:** Podés usar modelos de lenguaje (como Gemini) para generar rápidamente nuevos bancos de preguntas específicos sobre Java, Robótica o SQL, pidiéndole que respete el formato `crearPregunta()`.
* **Revisión Manual:** Si utilizás la opción "Otra" en las preguntas múltiples o preguntas de tipo `TEXT`, recordá que Google Forms no las calificará automáticamente; deberás revisarlas en la pestaña de respuestas.
* **Escalabilidad:** Podés modificar el array `listaGrupos` para adaptar el examen a los diferentes cursos que tengas a cargo en el año lectivo.

---
**Autor:** [Tu Nombre/GitHub]
**Contexto:** Herramienta de apoyo para la labor docente en UTU - Uruguay.
