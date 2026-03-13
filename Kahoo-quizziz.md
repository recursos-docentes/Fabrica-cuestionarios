# 🎮 Extensión: Generación para Kahoot! y Quizizz

Además de exámenes formales en Google Forms, podés usar esta metodología para crear juegos de repaso rápidos. Estas plataformas no permiten scripts directos tan fácilmente, por lo que usaremos el método de **Importación por Excel**.

## 📝 Prompt Maestro para la IA

Copiá y pegá el siguiente mensaje en Gemini o tu IA preferida para obtener la tabla de datos lista para copiar y pegar:

> "Actuá como experto en **[INSERTAR TEMA AQUÍ]**. Necesito generar un banco de preguntas para importar a Kahoot! y Quizizz.
> 
> Por favor, presentame una tabla con las siguientes columnas exactas:
> 1. **Question**: La pregunta (máximo 120 caracteres).
> 2. **Answer 1**: Opción de respuesta (máximo 75 caracteres).
> 3. **Answer 2**: Opción de respuesta (máximo 75 caracteres).
> 4. **Answer 3**: Opción de respuesta (máximo 75 caracteres).
> 5. **Answer 4**: Opción de respuesta (máximo 75 caracteres).
> 6. **Time limit**: Tiempo en segundos (usar 30).
> 7. **Correct answer**: Número de la respuesta correcta (del 1 al 4).
> 
> Generá 15 preguntas de nivel medio para estudiantes técnicos y entregá el resultado en formato de tabla."

## 🚀 Pasos para la Carga

1.  **Obtener la Plantilla:**
    * En **Kahoot!**: Creá un nuevo Kahoot y hacé clic en "Importar hoja de cálculo" (abajo a la izquierda) para descargar su Excel oficial.
    * En **Quizizz**: Creá un nuevo cuestionario y seleccioná "Importar desde Excel".

2.  **Cargar los Datos:**
    * Copiá la tabla que te dio la IA.
    * Pegá los datos en la plantilla de Excel a partir de la fila correspondiente (cuidando que las columnas coincidan).

3.  **Subir y Revisar:**
    * Cargá el archivo guardado en la plataforma.
    * Revisá que ninguna pregunta haya quedado cortada por exceder el límite de caracteres.

## ⚠️ Diferencias con el Script Maestro

| Característica | Google Forms (Script) | Kahoot! / Quizizz |
| :--- | :--- | :--- |
| **Numeración Correcta** | Empieza en **0**. | Empieza en **1**. |
| **Extensión de Texto** | Ilimitada (ideal para código). | Limitada (75-120 caracteres). |
| **Formato de Salida** | Formulario automático. | Tabla de Excel para subir. |
| **Uso Sugerido** | Evaluaciones y Parciales. | Repasos y Gamificación. |

---
**Tip Docente:** Para temas de Robótica o Java con mucho código, se recomienda sacar una captura de pantalla del código o del circuito e insertarla como imagen directamente en la web de Kahoot! una vez subido el Excel.
