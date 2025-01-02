# Travel App Backend

This is the backend server for the Travel App, built with Node.js, Express, TypeScript, and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Setup Instructions

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```

5. Update the `.env` file with your configuration:
   - `PORT`: The port number for the server (default: 5000)
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT token generation
   - `NODE_ENV`: Environment (development/production)

6. Start the development server:
   ```bash
   npm run dev
   ```

## Database Models

The application uses the following MongoDB models:

- **User**: Manages user accounts and preferences
- **City**: Stores city information and details
- **Place**: Contains information about places/attractions
- **Event**: Manages events and activities
- **TravelPlan**: Handles travel itineraries and plans

## API Documentation

The API endpoints will be documented using Swagger/OpenAPI. Documentation will be available at `/api-docs` when the server is running.

## Scripts

- `npm run dev`: Start development server with hot-reload
- `npm run build`: Build the TypeScript code
- `npm start`: Start the production server
- `npm test`: Run tests (to be implemented)

## Error Handling

The application implements comprehensive error handling for:
- Validation errors
- Authentication errors
- Database errors
- General server errors

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## License

ISC 