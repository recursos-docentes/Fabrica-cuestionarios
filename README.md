# 🛠️ Fábrica de Cuestionarios Automatizada (Google Apps Script)

Este proyecto permite la generación masiva y automática de evaluaciones autogestionadas mediante **Google Forms** y **Google Apps Script**. Está diseñado para el ámbito docente, permitiendo organizar los cuestionarios por niveles de dificultad: **Básico, Intermedio y Avanzado**.

## 🚀 Características Principales

* **Generación Dinámica:** Crea formularios de Google automáticamente desde un bloque de código.
* **Organización por Niveles:** Permite configurar cuántas preguntas de cada nivel debe incluir el cuestionario final.
* **Aleatoriedad:** Mezcla las preguntas de cada nivel para que cada formulario generado sea único.
* **Gestión de Archivos:** Crea automáticamente una carpeta en Google Drive (ej. "Exámenes - Marzo 2026") para organizar los archivos por mes y año.
* **Identificación Obligatoria:** Incluye campos de Nombre, Apellido y selección de Grupo de forma predeterminada.

## 📋 Instrucciones de Configuración

1.  **Crear el Proyecto:**
    * Andá a [Google Drive](https://drive.google.com/).
    * Seleccioná **Nuevo > Más > Google Apps Script**.
    * Nombrá el proyecto (ej. "Generador de Cuestionarios").

2.  **Cargar el Script:**
    * Copiá el contenido del archivo `Codigo.gs` de este repositorio y reemplazá todo el código en el editor de Google.

3.  **Ejecutar:**
    * En la barra superior del editor, seleccioná la función `generarMultiplesCuestionarios`.
    * Hacé clic en **Ejecutar** y otorgá los permisos necesarios a tu cuenta de Google.

## 🤖 Cómo usar la IA para crear nuevas preguntas

Si no querés escribir las preguntas manualmente, podés pedirle a una inteligencia artificial (como Gemini) que las redacte por vos. Solo tenés que copiar el siguiente mensaje y completarlo con tu tema:

> **Mensaje para la IA:**
> "Actuá como un experto en **[Escribí aquí tu materia o tema]**. Necesito que crees un conjunto de preguntas para un cuestionario automatizado.
> 
> Por favor, generá tres **listas de datos** denominadas `bancoBasico`, `bancoIntermedio` y `bancoAvanzado` que sigan estrictamente este formato:
> `crearPregunta('TIPO', 'Pregunta', ['Opción 0', 'Opción 1', 'Opción 2'], POSICIÓN_CORRECTA)`
> 
> **Reglas importantes:**
> 1. **Tipos de pregunta:** Usá 'MULTIPLE' (una sola opción correcta), 'CHECKBOX' (varias opciones correctas; en este caso indicá las posiciones así: `[0, 2]`) o 'TEXT' (para preguntas abiertas; en este caso usá `[], null` al final).
> 2. **Cantidad:** Generá al menos 6 preguntas para cada nivel de dificultad.
> 3. **Idioma:** Español.
> 4. **Numeración:** Es fundamental que la primera opción sea siempre la **número 0**, la segunda la **número 1**, y así sucesivamente."

### Cómo integrar las respuestas en tu proyecto
Una vez que la IA te entregue el texto:
1.  **Copiá el código generado.**
2.  **Pegalo en el Script:** Buscá la zona que dice `BANCOS DE PREGUNTAS` en tu archivo `Codigo.gs` y pegá lo que copiaste, sustituyendo los ejemplos anteriores.
3.  **Ejecutá:** Dale nuevamente al botón **Ejecutar**.

## 💡 Conceptos Clave para el Usuario

### ¿Por qué la numeración de respuestas empieza en 0?
Para que el programa identifique la respuesta correcta, no utiliza letras (A, B, C) sino la posición física en la fila de opciones:
* Si la respuesta correcta es la **primera**, el número es **0**.
* Si la respuesta correcta es la **segunda**, el número es **1**.

### Evaluación de respuestas abiertas
Si utilizás el tipo `TEXT` o la opción "Otra" en preguntas múltiples, recordá que Google Forms no las calificará automáticamente. Deberás ingresar a la pestaña de "Respuestas" del formulario para asignar el puntaje manualmente a esos alumnos.

---
**Autor:** [Elizabeth/GitHub]
**Contexto:** Herramienta de apoyo docente para la enseñanza.
