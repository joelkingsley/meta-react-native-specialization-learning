# Little Lemon Menu - Data Management Exercise

A React Native application demonstrating data fetching, SQLite database operations, and advanced filtering capabilities for the Little Lemon restaurant menu system.

## 📋 Exercise Overview

This exercise focuses on querying a REST API and implementing data persistence using SQLite database operations. The app fetches menu data from a remote JSON endpoint, stores it locally, and provides search and filtering functionality.

## 🎯 Learning Objectives

- **REST API Integration** - Fetch data from remote endpoints
- **Data Transformation** - Process and reshape API responses
- **SQLite Database Operations** - Create, insert, and query data
- **Advanced SQL Queries** - Implement complex filtering with multiple criteria
- **React Native Data Management** - Handle asynchronous operations and state management

## 📱 Features

### Core Functionality
- **API Data Fetching** - Retrieves menu items from GitHub endpoint
- **Local Data Storage** - Persists data in SQLite database
- **Search Functionality** - Real-time search with debounced input
- **Category Filtering** - Filter menu items by multiple categories
- **Combined Filtering** - Search and category filters work together

### User Interface
- **Searchbar** - Live search with visual feedback
- **Filter Controls** - Toggle category filters (Appetizers, Salads, Beverages)
- **Section List** - Organized display of menu items by category
- **Responsive Design** - Optimized for mobile devices

## 🛠️ Technologies Used

- **React Native** - Cross-platform mobile development
- **Expo SQLite** - Local database operations
- **React Native Paper** - UI components (Searchbar)
- **Lodash** - Utility functions (debounce)
- **REST API** - Remote data fetching

## 🚀 Implementation Details

### Step 1: REST API Integration (`fetchData` function)

**Location**: `App.js`

**Purpose**: Fetch menu data from the GitHub endpoint and transform the response format.

**Key Features**:
- Fetches data from: `https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json`
- Transforms nested category object to flat string
- Handles network errors gracefully
- Returns properly formatted menu items array

**Data Transformation**:
```javascript
// Input format from API
{
  "id": 1,
  "title": "Pizza",
  "price": "5",
  "category": {
    "title": "Main Dishes"
  }
}

// Output format for database
{
  "id": 1,
  "uuid": "1",
  "title": "Pizza", 
  "price": "5",
  "category": "Main Dishes"
}
```

### Step 2: Database Operations (`saveMenuItems` function)

**Location**: `database.js`

**Purpose**: Store fetched menu data in SQLite database using batch insertion.

**Key Features**:
- Clears existing data before insertion
- Uses single SQL statement for multiple row insertion
- Optimized for performance with batch operations
- Handles all menu items in one transaction

**Database Schema**:
```sql
CREATE TABLE menuitems (
  id INTEGER PRIMARY KEY NOT NULL,
  uuid TEXT,
  title TEXT,
  price TEXT,
  category TEXT
);
```

### Step 3: Advanced Filtering (`filterByQueryAndCategories` function)

**Location**: `database.js`

**Purpose**: Implement complex SQL queries for search and category filtering.

**Key Features**:
- **Text Search**: Case-insensitive substring matching
- **Category Filtering**: Multiple category selection support
- **Combined Filters**: AND logic for simultaneous filtering
- **Dynamic SQL**: Builds queries based on active filters

**SQL Query Examples**:
```sql
-- Search only
SELECT * FROM menuitems WHERE LOWER(title) LIKE '%pizza%' ORDER BY title;

-- Category filter only  
SELECT * FROM menuitems WHERE category IN ('Appetizers', 'Salads') ORDER BY title;

-- Combined search and category
SELECT * FROM menuitems 
WHERE LOWER(title) LIKE '%a%' AND category IN ('Main Dishes') 
ORDER BY title;
```

## 📂 Project Structure

```
m5-lab/
├── App.js                 # Main application component
├── database.js           # SQLite database operations
├── utils.js              # Utility functions and helpers
├── components/           # Reusable UI components
│   └── Filters.js       # Category filter component
├── package.json          # Dependencies and scripts
└── README.md            # This documentation
```

## 🔧 Getting Started

### Prerequisites
- **Node.js** (version 14 or higher)
- **Expo CLI** or **Expo Go** app
- **npm** or **yarn** package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd working-with-data/m5-lab
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Test the application:**
   - Use Expo Go app to scan QR code
   - Run on iOS/Android simulator
   - Open in web browser

## 🧪 Testing the Implementation

### Test Cases

1. **API Fetching**
   - Verify data loads on first app launch
   - Check network error handling
   - Confirm data transformation correctness

2. **Database Operations**
   - Verify menu items are stored correctly
   - Check data persistence across app restarts
   - Confirm batch insertion works

3. **Search Functionality**
   - Test partial word matching
   - Verify case-insensitive search
   - Check debounced input behavior

4. **Category Filtering**
   - Test single category selection
   - Test multiple category combinations
   - Verify "all categories" behavior

5. **Combined Filtering**
   - Test search + category combinations
   - Verify AND logic implementation
   - Check empty result handling

### Expected Data Structure

The API returns menu items in the following categories:
- **Appetizers**: Spinach Artichoke Dip, Hummus, Fried Calamari Rings, Fried Mushroom
- **Salads**: Greek, Caesar, Tuna Salad, Grilled Chicken Salad  
- **Beverages**: Water, Coke, Beer, Iced Tea

## 🎨 UI Components

### Searchbar
- Real-time search input
- Debounced for performance
- White text on dark background

### Filter Controls
- Toggle buttons for each category
- Visual feedback for active filters
- Support for multiple selections

### Section List
- Grouped by categories
- Item title and price display
- Scrollable interface

## 🚀 Performance Optimizations

- **Debounced Search** - Prevents excessive database queries
- **Batch Database Operations** - Efficient data insertion
- **Memoized Callbacks** - Optimized re-rendering
- **Transaction-based Queries** - Atomic database operations

## 🤝 Contributing

This project is part of the Meta React Native Specialization learning journey. The implementation demonstrates:

- REST API integration patterns
- SQLite database best practices
- React Native performance optimization
- Advanced filtering algorithms
- Mobile app data management

## 📝 License

This project is for educational purposes as part of the Meta React Native Specialization course.

## 🎓 Key Learning Outcomes

Upon completion, you will have mastered:

- **API Integration** - Fetching and processing remote data
- **Data Persistence** - SQLite database operations in React Native
- **SQL Query Writing** - Complex filtering and search logic
- **Performance Optimization** - Debouncing and efficient data handling
- **React Native Patterns** - Hooks, state management, and component composition
- **Mobile Database Design** - Schema design and query optimization

---

**🍋 Little Lemon** - Advanced Data Management for Mobile Applications

*Part of the Meta React Native Specialization - Working with Data Module*
