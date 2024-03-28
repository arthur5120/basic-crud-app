# ☑️ About the Application

## 1. Description

Using Node.js, React, TypeScript, and MongoDB, this succinct full-stack application facilitates CRUD operations for managing user data, including name, age, and description. It features an intuitive user interface to achieve that, with some CSS animations as well. The app is divided into two parts and incorporates server-side validation, sanitization, and other related functionalities.

## 3. Technologies and Dependencies

| Frontend |
| :---        |

  - Vite
  - React
  - React Router Dom
  - Typescript
  - Font Awesome

| Backend |
| :---        |

  - Express 
  - Express Validator 
  - CORS 
  - Dotenv 
  - Mongoose 
  - TS-Node 
  - Typescript 
  - CORS, Express and Node Types 

## 4. Features and Practices Implemented

| Feature | Description |
| :----: | :----: |
| Temporary Notification Messages | Brief messages to inform users of the result of their operations, styled according to its status, therefore enhancing user experience. |
| Load Spinnners | Provides visual feedback to users during data retrieval or processing. |
| Error Pages | Design error pages for feedback if rendering fails. |
| Atomic Model Folder Structure | Better scalability, reusability and maintenance. |
| Semantic Tags | To improve *SEO* and enhance accessibility for all users. |
| Code Splitting | For organizational purposes and improved performance. |
| Data Sanitization and Validation | Helps in preventing security vulnerabilities and ensures data integrity. |

## 5. Possible Improvements and Corrections 

| Enhancement | Description |
| :----: | :----: |
| Idempotency | Ensure each request has a unique *ID* to prevent duplication and maintain data integrity. |
| Optimization | Implement techniques such as **Virtualization**, **Debouncing**, **Throttling** to enhance performance and user experience further. |
| React Features | Incorporate lazy Loading, suspense, useCallback, useMemo and React.memo for example, to optimize rendering and improve efficiency. |
| Additional Security Measures | **Encryption** methods and **authentication** mechanisms specifically. |
| Additional Technologies | Integrate technologies like **Sequelize** for ORM, **Axios** for HTTP requests or **Toast** for messages. |

-----------------------------------------------------------------------------------------------------------------

# ☑️ How to Run it

The following tutorial provides a brief guide on installing dependencies and running the app using npm, which can be easily adapted for other package managers like Yarn or PNPM for example.


## 1. Setting up the Frontend

In a directory of your preference, to initialize the project using Vite with the React template and TypeScript support, as well as add routing functionality with the React Router DOM and install remaining packages, run the following commands 🔽

~~~
mkdir BasicCRUD
npm create vite@latest .\BasicCRUD\ -- --template react-swc-ts
cd BasicCRUD
npm install
npm install react-router-dom
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
~~~

## 2. Setting up the Backend

To install the necessary packages and initialize the TypeScript configuration, along with adding its dependencies and type definitions, execute the commands bellow 🔽

~~~
mkdir backend
cd backend
npm init
npm install express express-validator mongoose dotenv cors
npx tsc --init
npm install typescript ts-node @types/cors @types/express @types/node
~~~

## 3. Configuring the Enviromental Variables

In the same backend folder, create a *.env* file using a text editor or by renaming a regular *.txt* file and changing the extension. Then, add the following content, replacing the placeholders with the server PORT and the connection string for your MongoDB database 🔽
 
~~~
PORT="PORT-PLACEHOLDER"
STR="MONGOOSE-CONNECTION-STRING"
~~~

## 4. Executing the App

1. After downloading the files, paste them in the BasicCRUD folder, replacing the existing ones.
3. Now in the root directory, run on the console : **npm run dev**
4. Then navigate to the backend folder and run the command : **npm start**

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

## 2. Folder Structure Description

~~~
src/ 
+-- docs/			       	# Contains useful information and project documentation.
¦
+-- assets/			     	# Resources utilized on the project.
¦   +-- icons/		   	# Icons used on buttons, the favicon etc.
¦   +-- images/ 	  	# Background images and pictures used in the project.
¦
+-- components/
¦   +-- atoms/			   # Basic and independent building blocks.
¦   +-- molecules/		# Reusable components, more complex than atoms.
¦   +-- organisms/		# Larger components combining molecules and atoms.
¦   +-- pages/		   	# Components representing pages or routes, the main component is located here.
¦   +-- templates/		# Components defining the overall layout structure.
¦
+-- styles/			     	# Global styles, media-queries, keyframes etc.
¦
+-- utils/
¦   +-- hooks/		   	# Custom React hooks used across the project.
~~~

## 3. Known Bugs

Currently, there's a minor delay in receiving the first message from the server, which disappears shortly thereafter, making it nearly instantaneous for any subsequent ones. Fortunately, implementing optimization techniques will fix that issue.

## 4. License

MIT © 2024 Arthur Silva dos Santos
