# AlexBot Chat API

AlexBot Chat API es una aplicación backend construida con Node.js y Express. Utiliza el modelo de lenguaje **llama3** para procesar y responder a los mensajes de los usuarios. Esta API es ideal para agregar funcionalidad de chat a tus aplicaciones.

## Características

- **Modelo de Lenguaje:** Integra el modelo **llama3** para generar respuestas en español.
- **API RESTful:** Endpoints simples y eficientes para manejar interacciones de chat.
- **Configuración de CORS:** Permite solicitudes seguras desde diferentes orígenes.

## Requisitos Previos

- Node.js v14 o superior
- instalacion de ollama en la terminal
- descargar el modelo llama3
- ## Requisitos para usar llama3 localmente

Para ejecutar el modelo llama3 en tu entorno local, asegúrate de cumplir con los siguientes requisitos:

Url para ver los modelos
### 0.https://ollama.com/library

### 1. Hardware

- **CPU**: Se recomienda un procesador moderno de múltiples núcleos (como Intel i7/i9 o AMD Ryzen 7/9 :: minimo ryezen 5 o intel i5 mas recientes) para un rendimiento óptimo..
- **Memoria RAM**: Al menos 8 GB de RAM (se recomienda 16 GB o más para modelos grandes).
- **Almacenamiento**: Espacio suficiente en disco para almacenar el modelo y los datos relacionados (al menos 10 GB).

### 2. Software

- **Sistema Operativo**: Linux o Windows. Se recomienda un entorno basado en Linux para mejor compatibilidad en este caso estoy utilizando window.
- **Node.js**: Versión 14 o superior. Puedes verificar tu versión de Node.js con el comando:
  ```bash
  node -v

- NPM (Node Package Manager)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/alexbot-chat-api.git
