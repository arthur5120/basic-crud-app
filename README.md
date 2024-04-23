# ☑️ About the Application

## 1. Description

Using Node.js, React, TypeScript, and MongoDB, this succinct full-stack application facilitates CRUD operations for managing user data, including name, age, and description. It features an intuitive user interface to achieve that, with some CSS animations as well. The app is divided into two parts and incorporates server-side validation, sanitization, and other related functionalities.

## 2. Technologies and Dependencies

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

## 3. Features and Practices Implemented

| Feature | Description |
| :----: | :----: |
| Temporary Notification Messages | Brief messages to inform users of the result of their operations, styled according to its status, therefore enhancing user experience. |
| Load Spinnners | Provides visual feedback to users during data retrieval or processing. |
| Error Pages | Design error pages for feedback if rendering fails. |
| Atomic Model Folder Structure | Better scalability, reusability and maintenance. |
| Semantic Tags | To improve *SEO* and enhance accessibility for all users. |
| Code Splitting | For organizational purposes and improved performance. |
| Data Sanitization and Validation | Helps in preventing security vulnerabilities and ensures data integrity. |

## 4. Possible Improvements and Corrections 

| Enhancement | Description |
| :----: | :----: |
| Idempotency | Ensure each request has a unique *ID* to prevent duplication and maintain data integrity. |
| Optimization | Implement techniques such as **Virtualization**, **Debouncing**, **Throttling** to enhance performance and user experience further. |
| React Features | Incorporate lazy Loading, suspense, useCallback, useMemo and React.memo for example, to optimize rendering and improve efficiency. |
| Additional Security Measures | **Encryption** methods and **authentication** mechanisms specifically. |
| Additional Technologies | Integrate technologies like **Sequelize** or **Prisma** for ORM, **Axios** for HTTP requests and **React Toastify** for messages. |

-----------------------------------------------------------------------------------------------------------------

# ☑️ How to Run it

The following tutorial provides a brief guide on installing dependencies and running the app using **npm**, which can be easily adapted for other package managers like Yarn or PNPM for example. 

## 1. Getting the Application Files

| Direct Download |
| :---        |

It is possible to acquire the app files by downloading them directly. To do this, click the green "Code" button in the top-right corner, then click "Download ZIP". Finally, extract the downloaded ZIP file to a directory of your preference.
 
| Git Destkop |
| :---        |

Alternatively, you can clone the repository using GitHub Desktop. To do this, click "File" > "Clone Repository". Then paste the repository URL, choose a local folder, and click "Clone".

| Git Bash |
| :---        |

If you are using Git Bash, you can also clone the repository by navigating to the folder you chose and executing the following command, followed by the repository **URL** (Replace **REPOSITORY-URL** with the actual **URL** of the repository) 🔽

~~~~
git clone REPOSITORY-URL
~~~~

## 2. Setting up the Frontend
Now open the terminal and navigate to the directory you chose, where the application folder is located, then to initialize the project using Vite with the React template and TypeScript support, as well as add routing functionality with the React Router DOM and install remaining packages, run the following 🔽

~~~
cd mern-stack-crud-app
npm install
~~~

## 3. Setting up the Backend

To install the necessary packages and initialize the TypeScript configuration, along with adding its dependencies and type definitions, execute the commands bellow 🔽

~~~
cd backend
npm install
~~~

## 4. Configuring the Enviromental Variables

In the same backend folder, create a *.env* file using a text editor or by renaming a regular *.txt* file and changing the extension. Then, add the following content, replacing the placeholders with the server PORT (The default here is 3001) and the connection string for your MongoDB database 🔽
 
~~~
PORT="PORT-PLACEHOLDER"
STR="CONNECTION-STRING"
~~~

## 5. Changing the Default Port for the Backend

The app is preconfigured to work with the port **3001**, but you can change that by replacing the port values in the **useFetch.ts** in the following directory 🔽

~~~
\src\utils\hooks\useFetch.ts
~~~

## 6. Executing the App

1. Open the terminal and navigate to the root directory, usually named **mern-stack-crud-app**, then run on the console 🔽
~~~
npm run dev
~~~
2. In a separate terminal window, go to the **backend** folder inside the root directory and run the command 🔽
~~~
npm start
~~~
3. That's it, then you just have to open a web browser and navigate to **http://localhost:5173** to view the app.
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
