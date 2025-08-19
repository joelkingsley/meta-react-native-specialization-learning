# Little Lemon Restaurant - Newsletter Subscription App

A React Native mobile application for Little Lemon, a local Mediterranean Bistro, featuring a newsletter subscription system with email validation.

![Little Lemon App Demo](little_lemon.gif)

## 🍋 About Little Lemon

Little Lemon is a charming Mediterranean bistro that combines traditional recipes with modern culinary techniques. This mobile app allows customers to subscribe to their newsletter and stay updated with the latest delicious recipes and restaurant news.

## 📱 Features

- **Welcome Screen**: Beautiful introduction to Little Lemon restaurant with logo and branding
- **Newsletter Subscription**: Simple and elegant subscription form
- **Email Validation**: Real-time email validation with visual feedback
- **Responsive Design**: Optimized for mobile devices
- **Navigation**: Smooth navigation between screens
- **User Feedback**: Success alerts upon subscription

## 🛠️ Technologies Used

- **React Native 0.69.5** - Cross-platform mobile development
- **Expo ~46.0.9** - Development platform and toolchain
- **React Navigation 6** - Screen navigation and routing
- **React 18.0.0** - UI library with hooks
- **JavaScript ES6+** - Modern JavaScript features

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager
- **Expo CLI** (installed automatically as dev dependency)
- **Expo Go app** on your mobile device (optional, for testing)

### Installation

1. **Clone or navigate to the project directory**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Run on specific platforms:**
   ```bash
   npm run android    # Android emulator/device
   npm run ios        # iOS simulator/device
   npm run web        # Web browser
   ```

## 📱 App Structure

### Screens

#### 1. Welcome Screen (`WelcomeScreen.js`)
- Displays the Little Lemon logo and restaurant description
- Features a "Newsletter" button to navigate to subscription
- Clean, centered layout with Mediterranean bistro branding

#### 2. Subscribe Screen (`SubscribeScreen.js`)
- Newsletter subscription form with email input
- Real-time email validation
- Success alert upon subscription
- Disabled submit button for invalid emails

### Components

#### Custom Button (`Button.js`)
- Reusable pressable button component
- Supports disabled state with visual feedback
- Consistent styling across the app

### Navigation

#### Root Navigator (`RootNavigator.js`)
- Stack navigation between Welcome and Subscribe screens
- Clean navigation headers
- Smooth transitions

### Utilities

#### Email Validation (`utils/index.js`)
- Robust email validation using regex
- Real-time validation feedback
- Industry-standard email format checking

## 📂 Project Structure

```
littleLemonRN-main/
├── App.js                  # Main app component with navigation
├── app.json               # Expo configuration
├── package.json           # Dependencies and scripts
├── assets/                # Images and static resources
│   ├── little-lemon-logo.png
│   └── little-lemon-logo-grey.png
├── components/            # Reusable UI components
│   └── Button.js         # Custom button component
├── screens/               # App screens
│   ├── WelcomeScreen.js  # Landing/welcome screen
│   └── SubscribeScreen.js # Newsletter subscription
├── navigators/            # Navigation configuration
│   └── RootNavigator.js  # Stack navigator setup
├── utils/                 # Utility functions
│   └── index.js          # Email validation
└── README.md             # Project documentation
```

## 🎯 Key Features Explained

### Email Validation
- **Real-time validation** as user types
- **Visual feedback** with button state changes
- **Comprehensive regex** pattern for email format
- **Disabled submit** until valid email is entered

### User Experience
- **Intuitive navigation** from welcome to subscription
- **Consistent branding** with Little Lemon colors and logo
- **Responsive design** that works on various screen sizes
- **Clear feedback** with success alerts

### React Native Concepts Demonstrated
- **Screen navigation** with React Navigation
- **Component composition** and reusability
- **State management** with React hooks
- **Form handling** and input validation
- **Conditional rendering** and styling
- **Event handling** for user interactions

## 🎨 Design Principles

### Color Scheme
- **Primary**: `#495E57` (Deep green)
- **Background**: `white`
- **Text**: `#333333` (Dark gray)
- **Disabled**: `grey` with opacity

### Typography
- **Consistent font sizes** across components
- **Bold headings** for emphasis
- **Readable body text** for descriptions

## 📱 Testing

### Development Testing
- **Expo Go**: Test on physical devices
- **iOS Simulator**: Test iOS-specific features
- **Android Emulator**: Test Android-specific features
- **Web Browser**: Quick desktop testing

### Features to Test
- Email validation with various formats
- Navigation between screens
- Button states (enabled/disabled)
- Alert functionality
- Logo and image loading

## 🚀 Deployment

This app can be deployed using:
- **Expo Application Services (EAS)** for app store distribution
- **Expo Web** for web deployment
- **React Native CLI** for custom native builds

## 🤝 Contributing

This project is part of the Meta React Native Specialization learning journey. Feel free to:
- Fork the repository for learning purposes
- Suggest improvements through issues
- Share feedback on the implementation

## 📝 License

This project is for educational purposes as part of the Meta React Native Specialization course.

## 🎓 Learning Objectives

This app demonstrates mastery of:
- React Native fundamentals
- Navigation patterns
- Form handling and validation
- Component architecture
- State management
- Mobile UI/UX principles
- Expo development workflow

---

**🍋 Little Lemon** - Bringing Mediterranean flavors to your mobile device

*Part of the Meta React Native Specialization*
