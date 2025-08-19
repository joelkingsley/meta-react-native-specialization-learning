# Little Lemon Menu - Data Management Exercise

A React Native application demonstrating data fetching, SQLite database operations, and advanced filtering capabilities for the Little Lemon restaurant menu system.

## 📋 Exercise Overview

This comprehensive exercise demonstrates advanced data management in React Native through three progressive steps:

### **Exercise 1: Query the REST API**
- **Objective**: Fetch and transform remote JSON data
- **Implementation**: `fetchData()` function in `App.js`
- **Key Skills**: API integration, data transformation, error handling

### **Exercise 2: Displaying the Food Menu via SQLite**  
- **Objective**: Transform database data for SectionList component
- **Implementation**: `getSectionListData()` function in `utils.js`
- **Key Skills**: Data structure transformation, React Native components

### **Exercise 3: Sorting and Filtering the Food Menu**
- **Objective**: Implement advanced SQL queries for search and filtering
- **Implementation**: `filterByQueryAndCategories()` function in `database.js`
- **Key Skills**: Complex SQL operations, combined filtering logic

## 🔄 Complete Data Flow

The application demonstrates a complete data management pipeline:

```
1. API Fetch → 2. Database Storage → 3. Data Transformation → 4. UI Rendering → 5. Dynamic Filtering
```

### **Step-by-Step Data Flow**:

1. **API Fetch** (`fetchData`)
   ```
   Remote JSON → Transformed Objects → Return Array
   ```

2. **Database Storage** (`saveMenuItems`)
   ```
   Array of Objects → SQL INSERT → SQLite Database
   ```

3. **Data Retrieval** (`getMenuItems` / `filterByQueryAndCategories`)
   ```
   SQL Query → Database Rows → Raw Data Array
   ```

4. **UI Transformation** (`getSectionListData`)
   ```
   Raw Data → Grouped Sections → SectionList Format
   ```

5. **Component Rendering** (`SectionList`)
   ```
   Section Data → UI Components → User Interface
   ```

## 🎯 Learning Objectives

Upon completion of all exercises, you will have mastered:

### **React Native Fundamentals**
- **Component Architecture** - SectionList, custom components, hooks
- **State Management** - useState, useEffect, useCallback, useMemo
- **Performance Optimization** - Debouncing, memoization, efficient re-rendering

### **Data Management**
- **REST API Integration** - Fetch, error handling, data transformation
- **SQLite Operations** - Table creation, batch insertion, complex queries
- **Data Structure Design** - Optimized formats for different use cases

### **Advanced SQL Techniques**
- **Dynamic Query Building** - Conditional WHERE clauses
- **Parameterized Queries** - SQL injection prevention
- **Complex Filtering** - Multiple criteria with AND/OR logic
- **Performance Optimization** - Indexed searches, efficient joins

### **Mobile App Patterns**
- **Search Functionality** - Real-time, debounced, case-insensitive
- **Filter Systems** - Multiple selection, toggle states
- **Data Persistence** - Local storage, offline capability
- **User Experience** - Responsive UI, smooth interactions

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

### Step 3: Data Structure Transformation (`getSectionListData` function)

**Location**: `utils.js`

**Purpose**: Transform raw database data into SectionList-compatible format.

**Key Features**:
- Groups menu items by category
- Creates sections with title and data properties
- Ensures consistent data structure for React Native components
- Sorts sections alphabetically for predictable ordering

**Data Transformation Process**:
```javascript
// Input: Raw database array
[
  { id: 1, title: "Pizza", price: "10", category: "Appetizers" },
  { id: 2, title: "Caesar", price: "7", category: "Salads" },
  { id: 3, title: "Hummus", price: "8", category: "Appetizers" }
]

// Output: SectionList format
[
  {
    title: "Appetizers",
    data: [
      { id: "1", title: "Pizza", price: "10" },
      { id: "3", title: "Hummus", price: "8" }
    ]
  },
  {
    title: "Salads", 
    data: [
      { id: "2", title: "Caesar", price: "7" }
    ]
  }
]
```

**Implementation Logic**:
1. **Grouping**: Uses `reduce()` to group items by category
2. **Section Creation**: Creates section objects with `title` and `data` properties
3. **Data Formatting**: Ensures each item has required `id`, `title`, and `price` fields
4. **Sorting**: Alphabetically sorts sections for consistent UI

### Step 4: Advanced Filtering (`filterByQueryAndCategories` function)

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

### Exercise Testing Procedure

Follow this comprehensive testing procedure to verify all functionalities work correctly:

#### **Test 1: All Filters Disabled (Default View)**
- **Action**: Disable all category filters
- **Expected Result**: Display all 12 menu items grouped in 3 categories (4 items each)
- **Categories**: Appetizers, Salads, Beverages
- **Verification**: Should see complete menu with all items

#### **Test 2: Single Category Filter**
- **Action**: Select only "Appetizers" filter
- **Expected Result**: Display only Appetizers category with 4 items
- **Items**: Spinach Artichoke Dip, Hummus, Fried Calamari Rings, Fried Mushroom
- **Verification**: No Salads or Beverages should appear

#### **Test 3: Multiple Category Filter**
- **Action**: Select "Appetizers" + "Beverages" filters
- **Expected Result**: Display Appetizers and Beverages categories only
- **Hidden**: Salads category should not appear
- **Verification**: 8 total items (4 Appetizers + 4 Beverages)

#### **Test 4: All Filters Active**
- **Action**: Activate all three category filters
- **Expected Result**: Display all categories and items (same as Test 1)
- **Verification**: All 12 items visible across 3 categories

#### **Test 5: Search with All Categories**
- **Action**: Type "Sa" in search box (all filters active)
- **Expected Result**: Display 3 items from Salads category
- **Items**: Caesar, Tuna Salad, Grilled Chicken Salad
- **Logic**: Search finds substring "Sa" in "Salad" items

#### **Test 6: Search with Restricted Categories**
- **Action**: Type "Sa" + deselect Salads filter
- **Expected Result**: No items displayed
- **Logic**: Search finds "Sa" but Salads category is filtered out
- **Verification**: Empty list with no sections

#### **Test 7: Cross-Category Search**
- **Action**: Type "Ca" with all filters active
- **Expected Result**: 2 items from different categories
- **Items**: 
  - "Fried Calamari Rings" (Appetizers)
  - "Caesar" (Salads)
- **Logic**: Substring "Ca" found in both items

#### **Test 8: Search with Limited Categories**
- **Action**: Type "Ca" + only Appetizers filter active
- **Expected Result**: Only "Fried Calamari Rings" displayed
- **Hidden**: "Caesar" salad filtered out by category
- **Verification**: 1 item in Appetizers section only

#### **Test 9: Specific Item Search**
- **Action**: Type "Tea" in search box
- **Expected Result**: Only "Iced Tea" from Beverages
- **Logic**: Exact substring match
- **Verification**: Single item result

### Advanced Test Cases

#### **Case A: Empty Search Results**
- **Scenario**: Search term that matches no items
- **Action**: Type "xyz" with any filters
- **Expected**: Empty list, no section headers

#### **Case B: Search + All Categories Disabled**
- **Scenario**: Search with no category filters active
- **Expected**: No results (categories override search)

#### **Case C: Performance Testing**
- **Scenario**: Rapid filter changes and search input
- **Expected**: Smooth performance with debounced search

### SQL Query Validation

The `filterByQueryAndCategories` function should generate these SQL patterns:

```sql
-- Search only: "Sa"
SELECT * FROM menuitems 
WHERE LOWER(title) LIKE '%sa%' 
ORDER BY title;

-- Category only: ["Appetizers", "Beverages"]
SELECT * FROM menuitems 
WHERE category IN ('Appetizers', 'Beverages') 
ORDER BY title;

-- Combined: "Ca" + ["Appetizers"]
SELECT * FROM menuitems 
WHERE LOWER(title) LIKE '%ca%' AND category IN ('Appetizers') 
ORDER BY title;

-- No filters
SELECT * FROM menuitems ORDER BY title;
```

### Data Structure Validation

**Raw Database Format**:
```javascript
[
  { id: 1, uuid: "1", title: "Hummus", price: "10", category: "Appetizers" },
  { id: 5, uuid: "5", title: "Greek", price: "7", category: "Salads" }
]
```

**Expected SectionList Format**:
```javascript
[
  {
    title: "Appetizers",
    data: [{ id: "1", title: "Hummus", price: "10" }]
  },
  {
    title: "Salads", 
    data: [{ id: "5", title: "Greek", price: "7" }]
  }
]
```

## 🎨 UI Components

### SectionList Component

**Location**: `App.js`

The SectionList component is configured to work with the data structure created by `getSectionListData`:

```javascript
<SectionList
  style={styles.sectionList}
  sections={data}                    // Uses transformed data from getSectionListData
  keyExtractor={(item) => item.id}   // Uses id field for performance optimization
  renderItem={({ item }) => (        // Renders individual menu items
    <Item title={item.title} price={item.price} />
  )}
  renderSectionHeader={({ section: { title } }) => (  // Renders category headers
    <Text style={styles.header}>{title}</Text>
  )}
/>
```

**Key Props Explained**:
- **`sections`** - Array of section objects with `title` and `data` properties
- **`keyExtractor`** - Function that returns unique key for each item (uses `id`)
- **`renderItem`** - Function that renders individual menu items
- **`renderSectionHeader`** - Function that renders category section headers

**Data Flow**:
1. Raw database data → `getSectionListData()` → SectionList format
2. SectionList receives sections prop with grouped data
3. Component renders headers for each category
4. Component renders items within each category section

### Searchbar
- Real-time search input
- Debounced for performance
- White text on dark background

### Filter Controls
- Toggle buttons for each category
- Visual feedback for active filters
- Support for multiple selections

### Menu Item Display
- Title and price for each item
- Organized by category sections
- Scrollable interface with headers

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
