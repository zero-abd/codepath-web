# CodeQuiz: Computer Science Trivia Flashcards

## Overview
CodeQuiz is an interactive flashcard application designed to test and improve your knowledge of computer science concepts. Whether you're a CS student, preparing for technical interviews, or just curious about technology, CodeQuiz offers an engaging way to learn computer science fundamentals.

### App Walkthrough
![App Walkthrough](https://imgur.com/a/eujmIbR.gif)

## Required Features

- [x] **User Input**
  - [x] Users can enter their guess in a text field before revealing the answer
  - [x] The app provides visual feedback about whether the answer was correct or incorrect
  - [x] Fuzzy matching allows for minor typos or variations in answers

- [x] **Card Navigation**
  - [x] A back button allows users to return to the previous card in sequence
  - [x] A next button allows users to move to the next card in sequence
  - [x] Navigation buttons reset the card state (flips back to question side)

- [x] **Streak Tracking**
  - [x] The app tracks the current streak of correct answers
  - [x] The app tracks the longest streak achieved in the session
  - [x] Streak counter resets to zero when an incorrect answer is given

## Stretch Features

- [x] **Card Randomization**
  - [x] A shuffle button allows users to get a random card from the deck
  
- [x] **Fuzzy Answer Matching**
  - [x] Answers are matched using a fuzzy algorithm that allows for slight differences
  - [x] The matching system considers partial answers if they're specific enough

## Installation and Setup

1. Clone the repository
```
git clone <repository-url>
```

2. Navigate to the project directory
```
cd codequiz
```

3. Install dependencies
```
npm install
```

4. Start the development server
```
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Technologies Used

- React.js - Frontend framework
- Vite - Build tool
- CSS3 - Styling
- JavaScript ES6+ - Programming language

## Features in Detail

### Flashcard System
The app contains a variety of computer science flashcards covering topics like:
- Data structures and algorithms
- Programming languages
- Computer hardware
- Web technologies
- Networking concepts
- Security fundamentals
- Database systems
- CS history

### Interactive UI
- Modern dark mode interface with tech-inspired design
- Visual feedback for correct/incorrect answers
- Color-coded cards by category

### Learning Tools
- Progress tracking with streak counter
- Detailed explanations provided with each answer
- Multiple navigation options to customize your learning experience

## Future Enhancements

- Category filtering to focus on specific areas of computer science
- User accounts to save progress across sessions
- Difficulty levels for beginners to advanced learners
- Ability to add custom flashcards
- Spaced repetition system to optimize learning

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Illustrations from Unsplash
- Inspired by technical interview preparation resources
