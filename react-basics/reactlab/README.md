# React Calculator App

A simple, functional calculator built with React that performs basic arithmetic operations with a running total display.

## 🧮 Features

- **Basic Arithmetic Operations**: Add, subtract, multiply, and divide
- **Running Total**: Displays the current result that persists across operations
- **Input Management**: Clear input field independently
- **Result Reset**: Reset the running total back to zero
- **Responsive Design**: Clean, simple interface
- **Real-time Updates**: Immediate calculation results

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone this repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

## 📖 How to Use

1. **Enter a number** in the input field
2. **Choose an operation**:
   - Click **"add"** to add the number to the current total
   - Click **"subtract"** to subtract the number from the current total
   - Click **"multiply"** to multiply the current total by the number
   - Click **"divide"** to divide the current total by the number
3. **View the result** displayed above the input field
4. **Continue calculating** by entering new numbers and selecting operations
5. **Reset as needed**:
   - **"reset input"** - Clears only the input field
   - **"reset result"** - Resets the total back to 0

## 🛠️ Built With

- **React 18.2.0** - Frontend framework
- **React Hooks** - useState and useRef for state management
- **CSS** - Basic styling
- **Create React App** - Project setup and build tools

## 📁 Project Structure

```
reactlab/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main calculator component
│   ├── App.css         # Styling
│   └── index.js        # Entry point
├── package.json
└── README.md
```

## 🎯 Key React Concepts Demonstrated

- **Functional Components** - Modern React component pattern
- **State Management** - Using `useState` hook for result tracking
- **Refs** - Using `useRef` for direct DOM element access
- **Event Handling** - Button click handlers with preventDefault
- **Controlled Components** - Managing input values

## 🧪 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🤝 Contributing

This is a learning project created as part of the Meta React Native Specialization. Feel free to fork and experiment with additional features!

## 📝 License

This project is for educational purposes.

## 🎓 Learning Objectives

This calculator app demonstrates:
- React functional components and hooks
- State management with useState
- DOM manipulation with useRef
- Event handling in React
- Form handling and prevention of default behavior
- Basic arithmetic operations in JavaScript
- Component lifecycle and re-rendering

---

*Created as part of the Meta React Native Specialization course*