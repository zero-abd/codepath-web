import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  const [cards] = useState([
    {
      id: 1,
      question: "What color are most plant leaves?",
      answer: "Green",
      category: "facts",
      answerDetails: "Leaves are green because of chlorophyll, which plants use for photosynthesis."
    },
    {
      id: 2,
      question: "Do plants need water to survive?",
      answer: "Yes",
      category: "care",
      answerDetails: "Plants need water for photosynthesis and to transport nutrients throughout the plant."
    },
    {
      id: 3,
      question: "What do plants need to grow?",
      answer: "Sunlight, water, and soil",
      category: "care",
      answerDetails: "Plants convert sunlight into energy, use water to transport nutrients, and get minerals from soil."
    },
    {
      id: 4,
      question: "What type of plant is this?",
      answer: "Spider Plant",
      category: "indoor",
      questionImage: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?q=80&w=500&auto=format&fit=crop",
      answerDetails: "Spider plants produce long stems with baby plants (spiderettes) that can be rooted to grow new plants."
    },
    {
      id: 5,
      question: "What type of plant is this?",
      answer: "Succulent",
      category: "succulent",
      questionImage: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?q=80&w=500&auto=format&fit=crop",
      answerDetails: "Succulents need very little water and store water in their thick, fleshy leaves."
    }
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCardIndex(randomIndex);
    setIsFlipped(false);
  };

  const currentCard = cards[currentCardIndex];

  return (
    <div className="App">
      <div className="background-decoration"></div>
      <div className="header">
        <h1>The Ultimate Plant Parent!</h1>
        <h3>How good of a plant parent are you? Test all of your planty knowledge here!</h3>
        <p>Number of cards: {cards.length}</p>
      </div>

      <div className="card-container">
        <Flashcard 
          card={currentCard}
          isFlipped={isFlipped}
          onClick={flipCard}
        />
      </div>

      <div className="controls">
        <button className="next-button" onClick={getRandomCard}>🔄</button>
        <button className="flip-button" onClick={flipCard}>↪️</button>
      </div>
    </div>
  )
}

export default App
