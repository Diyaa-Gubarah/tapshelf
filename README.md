# Tabshelf - React TypeScript Project

Tabshelf is a React TypeScript project for managing inventory.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- npm (Node Package Manager) or yarn installed

### Installing

Follow these steps to get the development environment set up:

1. Clone the repository:

   ```bash
   git clone https://github.com/Diyaa-Gubarah/tabshelf.git

2. Navigate into the project directory:
  
   ```bash
   cd tabshelf

3. Install dependencies:

   ```bash
   npm install

4. Running the Project

   ```bash
   npm run dev

#### Best Practices

In this project, I adhere to several best practices for building React applications:

- Custom Components: I utilize custom components such as Box, Text, Input, and Button to maintain consistency and reusability throughout the application.

- Styled Components: I use styled-components library for styling my components. This allows us to write CSS directly within my JavaScript/TypeScript files, keeping styles scoped to the component and improving maintainability.

- Hooks: I make extensive use of React hooks, such as useState, useEffect, etc., to manage state and side effects within my components.

- Custom Hooks: I implement custom hooks, such as useModal, to encapsulate logic and share it between components, promoting code reusability and organization.

- Composition: I practice composition over inheritance to create complex UI components by combining simpler components together.

- State Management with Zustand: I use Zustand as my state management library to manage global state in a simple and efficient way. Zustand provides a lightweight and easy-to-use solution for managing state in React applications.

- Consistent Naming Conventions: I use a consistent naming convention for variables, functions, and components. This makes it easier to understand my code by giving meaningful names to different parts.


## Evaluation Criteria

### Fidelity of the Design

The design of the Tabshelf application closely adheres to the provided model. I utilized modern UI design principles, including consistent spacing, typography, and color schemes, to ensure a visually pleasing and user-friendly interface. Components such as `Box`, `Text`, `Input`, and `Button` were designed to match the provided design model, providing a consistent look and feel throughout the application.

### Successful Implementation of Add and Remove Items Feature

I successfully implemented the add and remove items feature using Zustand for state management. A global store was created using Zustand to manage the state of products, including adding and removing items from the product list. I created a custom hook `useProductStore` to provide access to the store's state and actions across different components. The `useProductStore` hook exposes functions such as `addItem` and `removeItem`, allowing components to interact with the product store seamlessly.
