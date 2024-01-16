
##  Description:
 The aim of this project is to develop a React application , enabling users to input a UI schema on the left side and preview the resulting dynamic form on the right side. The UI schema, represented as a JSON array, contains information crucial for form generation. The application comprises a single screen with two equal sections: a JSON editor on the left for pasting the UI schema and an auto-rendered form on the right based on the provided schema.

The UI schema consists of objects with diverse fields defining form structure and functionalities. Each object includes properties like "sort" for determining section sequence, "label" for displaying section labels, "description" for holding section or field descriptions, "validate" for field validations (e.g., "required" and "immutable"), "jsonKey" for unique field/section keys, "uiType" for specifying form element types (e.g., input, number, group, select, switch), "level" for nesting fields, and "placeholder" for adding hints to form fields.

Various types of form elements are supported within the UI schema, such as text input fields for capturing user input (e.g., pizza name), group fields for nesting multiple fields (e.g., pizza type and toppings), and radio fields for presenting options (e.g., different pizza types).


## Tech Stack

**Frontend:** React, JavaScript,styled-components


## Getting Started
    These instructions will help you set up and run the project on your local machine for development and testing purposes.

## Prerequisites
- Node.js (v16.x.x or higher recommended)
- npm (v8.x.x or higher recommended)

## Installation

    1. Clone the repository

    2. Install dependencies 

    3. Start the development server


    This will run the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.











