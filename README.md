# ☑️ About the Application

## 1. Description

Using Node.js, React, TypeScript, and MongoDB, this application facilitates CRUD operations for managing user data, including name, age, and description. It features an intuitive user interface to achieve that, with some CSS animations as well. The application is divided into two parts and incorporates server-side validation, sanitization, and other related functionalities.

## 2. Dependencies Summary

### **Frontend Dependencies**
 - React 
 - React Router Dom 
 - Typescript 
 - Font Awesome

### **Backend Dependencies** 
 - Express 
 - Express Validator 
 - CORS 
 - Dotenv 
 - Mongoose 
 - TS-Node 
 - Typescript 
 - CORS, Express and Node Types 

## 3. Features and Practices

- Temporary Notification Message
- Atomic Mode Folder Structure 
- Semantic Tags for *SEO* and Acessibility
- Load Spinnners and Error Pages
- Code Splitting for Organizational Purposes
- Data Sanitization and Validation

## 4. Room for Improvements 

| Improvement | Description |
| :----: | :----: |
| Idempotency | ensure each request has a unique *ID* to prevent duplication. |
| Optimization | Implement techniques such as **Virtualization**, **Debouncing**, **Throttling** etc. |
| React Features | Incorporate lazy Loading, suspense, useCallback, useMemo and React.memo for example. |
| Security Measures | **encryption** and **authentication** specifically. |
| Additional Technologies | Integrate technologies like **Sequelize**, **Axios** or **Toast** for messages. |

-----------------------------------------------------------------------------------------------------------------

# ☑️ How to Run it

## 1. Setting up Dependencies

The following tutorial provides a brief guide on installing dependencies and running the app using npm, which can be easily adapted for other package managers like Yarn or PNPM for example.
In a directory of your preference, to initialize the project with Vite and React template and install dependencies, run the following commands 🔽

~~~
mkdir BasicCRUD
npm create vite@latest .\BasicCRUD\ -- --template react-swc-ts
cd BasicCRUD
npm install
npm install react-router-dom
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
~~~

To set up the backend, in the same directory run 🔽

~~~
mkdir backend
cd backend
npm init
npm install express express-validator mongoose dotenv cors
npx tsc --init
npm install typescript ts-node @types/cors @types/express @types/node
~~~

## 2. Executing the App

1. In the root directory, type on the console : "**npm run dev**" with no quotes and press enter.
2. Get in the backend folder and then run the command : "**npm start**".

-----------------------------------------------------------------------------------------------------------------

# ☑️ Others

## 1. Validation Rules

| Name |
| :---        |

 - Only alphabetic characters and spaces allowed.
 - It must contain at least 3 alphabetic characters.
 - It can't exceed 20 characters in length.
 - Leading and trailing whitespace will be trimmed.
 - It cannot be empty.

| Age |
| :---        |

 - It must be an integer.
 - It must fall between 0 and 200.
 - It cannot be empty.

| Description |
| :---        |

 - Only alphanumberic characters and spaces allowed.
 - It can't exceed 250 characters in length.
 - Leading and trailing whitespace will be trimmed.