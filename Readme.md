# DropIt

## Overview

This repository contains a file-sharing application built using Next.js, Firebase, and Tailwind CSS. The application allows users to upload, share, and manage files efficiently.

## Features

- **File Upload**: Users can upload files of various formats.
- **File Sharing**: Generate shareable links for uploaded files.
- **User Authentication**: Secure user login and registration using Firebase Authentication.
- **Real-time Updates**: Sync file changes in real-time with Firebase.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Firebase**: Backend as a Service (BaaS) for authentication and real-time database.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vercel**: Hosting platform for seamless deployment.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/praneeth622/file-sharing-app.git
   cd file-sharing-app/file-sharing-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Firebase:
   - Create a Firebase project in the Firebase Console.
   - Add your Firebase configuration to `firebaseConfig.js`.

### Running the Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## File Structure

- `app/`: Contains the main application code.
- `public/`: Static files.
- `react-email-starter/`: Starter templates for emails.
- `firebaseConfig.js`: Firebase configuration.
- `tailwind.config.js`: Tailwind CSS configuration.
- `next.config.mjs`: Next.js configuration.

## Deployment

The application can be deployed on Vercel for optimal performance and scalability. Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Docker Push

To push the Docker image to the repository, use the following command:

```bash
docker push praneeth0331/dropit:tagname
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

---

For more information, visit the [GitHub repository](https://github.com/praneeth622/file-sharing-app/tree/main/file-sharing-app).
