# Car.Park – Smart Parking Management System

🚗 **Car.Park** es un sistema de gestión de parqueaderos que utiliza un **sensor ultrasónico y Arduino** para detectar la ocupación de los espacios de estacionamiento en tiempo real. La información es enviada a un **servidor backend con Node.js y Express.js**, el cual actualiza dinámicamente una **interfaz web interactiva** creada con **HTML, CSS y JavaScript**.

## 📌 Características
✅ **Detección en tiempo real** de espacios ocupados/libres mediante un sensor ultrasónico conectado a un **Arduino**.  
✅ **Servidor backend con Node.js y Express.js** para recibir y procesar los datos del sensor.  
✅ **API REST** para la comunicación entre el Arduino y el backend.  
✅ **Interfaz web dinámica** que muestra el estado del estacionamiento en tiempo real.  
✅ **Optimización de latencia** para mejorar la eficiencia del sistema.  
✅ **Pruebas y debugging exhaustivos** para garantizar la precisión de la detección y la fiabilidad de la transmisión de datos.  

## 🛠️ Tecnologías Usadas
- **Arduino** – Para la detección de ocupación con sensor ultrasónico.
- **Node.js + Express.js** – Para el backend y API.
- **JavaScript, HTML, CSS** – Para la interfaz web interactiva.

## 🚀 Instalación y Uso

### 1️⃣ Clonar el Repositorio
```bash
git clone https://github.com/jespanap/Car.Park.git
cd Car.Park