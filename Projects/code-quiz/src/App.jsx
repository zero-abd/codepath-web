import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  const [cards] = useState([
    {
      id: 1,
      question: "What does CPU stand for?",
      answer: "Central Processing Unit",
      category: "hardware",
      answerDetails: "The CPU is the primary component of a computer that performs most of the processing inside a computer."
    },
    {
      id: 2,
      question: "What programming language is known for its use in web browsers?",
      answer: "JavaScript",
      category: "languages",
      answerDetails: "JavaScript is a scripting language that enables interactive web pages and is an essential part of web applications."
    },
    {
      id: 3,
      question: "What does HTML stand for?",
      answer: "Hypertext Markup Language",
      category: "web",
      answerDetails: "HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
      id: 4,
      question: "Which data structure operates on a LIFO principle?",
      answer: "Stack",
      category: "datastructures",
      questionImage: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=500&auto=format&fit=crop",
      answerDetails: "A stack is a linear data structure that follows the Last In, First Out (LIFO) principle."
    },
    {
      id: 5,
      question: "What is the time complexity of binary search?",
      answer: "O(log n)",
      category: "algorithms",
      answerDetails: "Binary search is an efficient algorithm with logarithmic time complexity, making it much faster than linear search for large datasets."
    },
    {
      id: 6,
      question: "Who is considered the father of computer science?",
      answer: "Alan Turing",
      category: "history",
      questionImage: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=500&auto=format&fit=crop",
      answerDetails: "Alan Turing was a British mathematician and computer scientist who formalized the concepts of algorithm and computation with the Turing machine."
    },
    {
      id: 7,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      category: "databases",
      answerDetails: "SQL is a domain-specific language used for managing and manipulating relational databases."
    },
    {
      id: 8,
      question: "What is the purpose of DNS in networking?",
      answer: "Domain Name System",
      category: "networking",
      answerDetails: "DNS translates human-readable domain names (like www.example.com) to machine-readable IP addresses."
    },
    {
      id: 9,
      question: "What is recursion in programming?",
      answer: "A function that calls itself",
      category: "concepts",
      answerDetails: "Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller, similar sub-problems."
    },
    {
      id: 10,
      question: "What encryption algorithm is commonly used for secure web connections?",
      answer: "SSL/TLS",
      category: "security",
      answerDetails: "SSL (Secure Sockets Layer) and its successor TLS (Transport Layer Security) are cryptographic protocols that provide secure communication over networks."
    }
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCardIndex(randomIndex);
    resetCardState();
  };

  const handleGuessChange = (event) => {
    setUserGuess(event.target.value);
  };

  const checkGuess = () => {
    // Simple fuzzy matching by converting to lowercase and trimming whitespace
    const normalizedGuess = userGuess.toLowerCase().trim();
    const normalizedAnswer = cards[currentCardIndex].answer.toLowerCase().trim();
    
    // Check if the guess is similar to the answer
    const isGuessCorrect = normalizedGuess === normalizedAnswer || 
                          (normalizedAnswer.includes(normalizedGuess) && normalizedGuess.length > 2) ||
                          (normalizedGuess.includes(normalizedAnswer));
    
    setIsCorrect(isGuessCorrect);
    
    if (isGuessCorrect) {
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setCurrentStreak(0);
    }
    
    // Flip the card to reveal the answer
    setIsFlipped(true);
  };

  const moveToNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0);
    }
    resetCardState();
  };

  const moveToPreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    } else {
      setCurrentCardIndex(cards.length - 1);
    }
    resetCardState();
  };

  const resetCardState = () => {
    setIsFlipped(false);
    setUserGuess('');
    setIsCorrect(null);
  };

  const shuffleCards = () => {
    getRandomCard();
  };

  const currentCard = cards[currentCardIndex];

  return (
    <div className="App">
      <div className="background-decoration"></div>
      <div className="header">
        <h1>CodeQuiz: Computer Science Trivia</h1>
        <h3>How well do you know your computer science fundamentals? Test your tech knowledge!</h3>
        <p>Number of cards: {cards.length}</p>
        <p>Current Streak: {currentStreak}, Longest Streak: {longestStreak}</p>
      </div>

      <div className="card-container">
        <Flashcard 
          card={currentCard}
          isFlipped={isFlipped}
          onClick={flipCard}
          isCorrect={isCorrect}
        />
      </div>

      <div className="guess-container">
        <input 
          type="text" 
          placeholder="Type your answer here..." 
          value={userGuess}
          onChange={handleGuessChange}
          disabled={isFlipped}
          className="guess-input"
        />
        <button 
          className="submit-guess" 
          onClick={checkGuess}
          disabled={isFlipped || userGuess.trim() === ''}
        >
          Submit Guess
        </button>
      </div>

      <div className="controls">
        <button className="back-button" onClick={moveToPreviousCard}>⬅</button>
        <button className="shuffle-button" onClick={shuffleCards}>🔄 Shuffle Cards</button>
        <button className="next-button" onClick={moveToNextCard}>➡</button>
      </div>
    </div>
  )
}

export default App
