# Flexifit AI

## Overview

Flexifit AI is an AI-powered web application that provides workout programs, tracks reps, and guides users through exercises using real-time webcam feedback. The app aims to make fitness accessible to busy individuals by offering quick and effective workout routines that can be performed anywhere.

### Problem

Many people struggle to find time to work out due to their busy schedules and sedentary lifestyles, often exacerbated by working long hours on their laptops. Flexifit AI addresses this issue by offering a convenient solution that fits into their limited free time, helping them stay active and healthy.

### User Profile

Flexifit AI is designed for busy professionals and individuals who spend a lot of time on their laptops and find it challenging to allocate time for exercise. Users can easily access the app through their web browser and dedicate 5-10 minutes of their day to follow guided workouts and stretching routines.

### Features

- **Personalized Workout Programs**: Tailored workout routines based on user preferences and fitness levels.
- **Real-Time Rep Counting**: Uses webcam and AI to count reps and ensure proper form.
- **Form Feedback**: Provide detailed feedback on user form and suggestions for improvement.
- **User Accounts**: Allows users to sign up, log in, and save their workout history and preferences.

## Implementation

### Tech Stack

- **Frontend**:
  - React
  - Sass
  - HTML
  - CSS
  - React-webcam

- **Backend**:
  - Node.js

- **AI/ML**:
  - TensorFlow.js
  - Posenet

### APIs

- **External APIs**:
  - Any other relevant fitness or health-related APIs

### Sitemap

1. **Homepage**: Introduction to Flexifit AI and its features.
2. **Sign Up**: User registration page.
3. **Login**: User authentication page.
4. **Workouts Dashboard**: Main user interface for accessing workout programs and tracking progress.
5. **Programs**:
   - **Workout**: Different workout routines.
   - **Stretching**: Various stretching exercises.

### Mockups

Visuals of the app's screens can be created using Figma or hand-drawn sketches to show the user interface design and layout.

### Data

- **Users**:
  - `user_id`
  - `name`
  - `email`
  - `password`
  - `workout_history`

- **Workouts**:
  - `workout_id`
  - `user_id`
  - `type`
  - `date`
  - `duration`
  - `reps`
  - `sets`
  - `form_feedback`

- **Exercises**:
  - `exercise_id`
  - `name`
  - `description`
  - `target_muscles`
  - `instructions`

### Endpoints

- **User Endpoints**:
  - `POST /signup`: Register a new user.
  - `POST /login`: Authenticate a user.
  - `GET /user/:id`: Retrieve user details.

- **Workout Endpoints**:
  - `GET /workouts`: Retrieve all workouts.
  - `POST /workout`: Add a new workout.
  - `GET /workout/:id`: Retrieve workout details.

### Auth

Flexifit AI includes user authentication and authorization features, allowing users to sign up, log in, and manage their profiles securely.

## Roadmap

### Sprint 1
- Set up project structure and development environment.
- Implement user authentication (sign up, log in).
- Design and create the homepage and user dashboard UI.

### Sprint 2
- Integrate TensorFlow.js and Posenet for pose detection.
- Implement real-time rep counting and form feedback.
- Develop the workout and stretching programs page.

### Sprint 3
- Add progress tracking and workout history features.
- Test the application thoroughly for bugs and performance issues.
- Prepare for deployment and final presentation.

## Nice-to-haves

- **Workout Summary Sharing**: Allow users to share their workout summaries on social media or with friends.
- **Additional Exercises**: Expand the exercise library to include more routines like push-ups and planks.
- **Progress Tracking**: Tracks user progress over time, including reps, sets, and improvements in form.
