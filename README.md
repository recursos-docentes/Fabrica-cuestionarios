# 🛠️ Generador de Cuestionarios Automatizado (Google Apps Script)
 
Este proyecto permite crear cuestionarios automáticamente en **Google Forms** usando **Google Apps Script**. Está pensado para docentes que quieren generar evaluaciones rápidas, reutilizables y sin perder tiempo armando formularios manualmente.
 
## 🚀 Características
 
- Genera formularios automáticamente desde código
- Permite organizar preguntas por niveles: Básico, Intermedio y Avanzado
- Mezcla preguntas de forma aleatoria
- Incluye identificación del estudiante (nombre y grupo)
- El formulario se crea directamente en la raíz de Google Drive
 
## 📋 Cómo usar
 
1. Ir a Google Drive
2. Crear un nuevo proyecto: **Nuevo → Más → Google Apps Script**
3. Copiar el contenido de `Codigo.gs` en el editor
4. Ejecutar la función:
 
```js
generarMultiplesExamenes()
```
 
5. Aceptar los permisos solicitados
 
👉 El formulario se crea automáticamente en tu Drive con el nombre **"Cuestionario"**
 
## ✏️ Cómo agregar preguntas
 
Editar los bancos de preguntas en el código:
 
```javascript
var bancoBasico = [ ... ];
var bancoIntermedio = [ ... ];
var bancoAvanzado = [ ... ];
```
 
Puedes usar solo uno o varios niveles según lo que necesites en tu clase.
 
## ⚙️ Configurar el cuestionario
 
En esta sección defines cuántas preguntas incluir de cada nivel:
 
```javascript
cantBasicas: 3,
cantIntermedias: 2,
cantAvanzadas: 1
```
 
👉 Si no quieres usar un nivel, simplemente ponlo en `0`:
 
```javascript
cantIntermedias: 0
```
 
## 🧠 Tipos de preguntas
 
- `'MULTIPLE'` → una sola respuesta correcta
- `'CHECKBOX'` → varias respuestas correctas
- `'TEXT'` → respuesta abierta (no autocorregible)
 
## 💡 Concepto clave
 
Las opciones empiezan desde `0`:
 
- `0` → primera opción
- `1` → segunda opción
- `2` → tercera opción
 
Ejemplo:
 
```javascript
crearPregunta('MULTIPLE', 'Pregunta', ['A', 'B', 'C'], 2)
```
 
Respuesta correcta: **C**
 
## ⚠️ Importante
 
- Las preguntas tipo `TEXT` no se corrigen automáticamente
- El formulario se genera listo para usar, pero puedes editarlo después
- Puedes cambiar el nombre y moverlo manualmente en Google Drive
 
## 💡 Sugerencia de uso docente
 
- Usa nivel **básico** para comprensión general
- Usa **intermedio** para aplicación
- Usa **avanzado** para análisis o resolución de problemas
 
También puedes generar cuestionarios distintos para cada grupo sin esfuerzo adicional.
 
---
 
**Autor:** Elizabeth / GitHub
**Uso:** Herramienta de apoyo docente para evaluación automatizada
