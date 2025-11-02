Este proyecto es una demostración de una aplicación de crowdfunding (campañas y talleres) construida con React y un **stack de identidad y escalabilidad Web3** real, utilizando **ENS** y soluciones Layer 2 (L2).

## ✨ Características Principales

* **Identidad Onchain:** Login basado en la conexión de billetera y resolución de nombres ENS.
* **Escalabilidad:** Arquitectura diseñada para liquidar transacciones en redes Layer 2 (Scroll y Arbitrum).
* **Diseño:** Interfaz moderna construida con Tailwind CSS.

## 🛠️ Tecnologías Utilizadas

| Categoría | Herramienta | Papel en el Proyecto |
| :--- | :--- | :--- |
| **Frontend** | `React` | Interfaz de usuario y lógica del componente. |
| **Estilos** | `Tailwind CSS` | Framework de utilidad para el diseño rápido y moderno. |
| **Entorno** | `Create React App (CRA)` | Entorno de desarrollo estable y compatible. |
| **Conexión Web3** | `Wagmi` / `Viem` | Hooks para la conexión de billetera y la interacción con la blockchain. |
| **Identidad** | `@wagmi/connectors` | Gestión de conectores (MetaMask) para el Login. |
| **ENS** | `useEnsName` | Hook crucial para resolver la dirección de la billetera a su nombre ENS real (`usuario.eth`). |
| **L2s (Mocked)** | `Scroll`, `Arbitrum Stylus` | Designados como las capas de liquidación final para las transacciones. |

## 🔑 Implementación de ENS (La Clave)

La función más importante del demo es el uso real del **Ethereum Name Service (ENS)** para la identidad del usuario:

* **¿Qué hace?** Ethereum actúa como el **"Registro Civil Digital"**.
* **¿Cómo?** Al iniciar sesión, la aplicación usa `useEnsName` (de Wagmi) para consultar la red principal de Ethereum, confirmando el nombre asociado a la dirección del usuario. Esto convierte la identidad en **verificable, inmutable y descentralizada**.

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos

Necesitas tener **Node.js** y **npm** instalados, y la billetera **MetaMask** configurada en tu navegador.

### Pasos

1.  **Clonar el repositorio y entrar al directorio:**
    ```bash
    git clone [https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    cd conectao-ens-app-stable 
    ```

2.  **Instalar todas las dependencias (incluyendo Web3):**
    * *Nota: Usamos `--legacy-peer-deps` para evitar conflictos entre las versiones modernas de Wagmi y las dependencias de CRA.*
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Iniciar la aplicación:**
    ```bash
    npm start
    ```

La aplicación se abrirá en tu navegador en `http://localhost:3000/`. Conecta tu billetera para que la aplicación muestre tu nombre ENS real.

# Conectao web app development

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/axolotechmexi-9089s-projects/v0-conectao-web-app-development)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/phhoJJGR1Wm)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/axolotechmexi-9089s-projects/v0-conectao-web-app-development](https://vercel.com/axolotechmexi-9089s-projects/v0-conectao-web-app-development)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/phhoJJGR1Wm](https://v0.app/chat/phhoJJGR1Wm)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
