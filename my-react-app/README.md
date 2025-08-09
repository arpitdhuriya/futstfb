# My React App

This project is a React application that includes a login page, a user management page, and landing pages for both admin and user roles. It is designed to provide a simple interface for managing users and their roles within the application.

## Features

- **Login Page**: A functional component that allows users to log in with their credentials.
- **User Management Page**: A page for admins to manage users, including adding, editing, and deleting users.
- **Landing Pages**: Separate landing pages for admin and regular users, each tailored to their specific needs.

## Project Structure

```
my-react-app
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── components
│   │   ├── LoginPage.tsx   # Login form component
│   │   ├── UserManagementPage.tsx # User management component
│   │   ├── LandingPageAdmin.tsx    # Admin landing page component
│   │   └── LandingPageUser.tsx     # User landing page component
│   ├── routes
│   │   └── AppRoutes.tsx   # Routing setup for the application
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── types
│       └── index.ts        # TypeScript interfaces and types
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage Guidelines

- Use the login page to authenticate users.
- Admin users can access the user management page to manage user accounts.
- Depending on the role, users will be directed to their respective landing pages after logging in.

## License

This project is licensed under the MIT License.