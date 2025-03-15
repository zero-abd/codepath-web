# Web Development Project - *CodeQuiz: Computer Science Trivia Flashcards*

Submitted by: **Abdullah Al Mahmud**

This web app: **An interactive flashcard application designed to test and improve your knowledge of computer science concepts with engaging trivia questions.**

Time spent: **13** hours spent in total

## Required Features

The following **required** functionality is completed:

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

The following **optional** features are implemented:

- [x] **Card Randomization**
  - [x] A shuffle button allows users to get a random card from the deck
  
- [x] **Fuzzy Answer Matching**
  - [x] Answers are matched using a fuzzy algorithm that allows for slight differences
  - [x] The matching system considers partial answers if they're specific enough

The following **additional** features are implemented:

* [x] Modern dark mode interface with tech-inspired design
* [x] Visual feedback for correct/incorrect answers
* [x] Color-coded cards by category
* [x] Detailed explanations provided with each answer

## Video Walkthrough

Here's a walkthrough of implemented features:

![App Walkthrough](https://imgur.com/a/eujmIbR.gif)

## Notes

Some challenges I encountered while building this app:
- Implementing the fuzzy matching algorithm for answer validation
- Creating an effective streak tracking system
- Designing a responsive and intuitive UI for the flashcards
- Managing state across different components for navigation and tracking

## License

    Copyright [2023] [Abdullah Al Mahmud]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

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

## Acknowledgments

- Illustrations from Unsplash
- Inspired by technical interview preparation resources
