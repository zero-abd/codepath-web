import React from 'react';

const Flashcard = ({ card, isFlipped, onClick, isCorrect }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-content">
        {isFlipped ? (
          <div className={`card-back ${card.category} ${isCorrect !== null ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
            <h2>{card.answer}</h2>
            {isCorrect !== null && (
              <div className="feedback-badge">
                {isCorrect ? '✓ Correct!' : '✗ Try Again!'}
              </div>
            )}
            {card.answerImage && (
              <img 
                src={card.answerImage} 
                alt="Answer illustration" 
                className="card-image"
              />
            )}
            {card.answerDetails && (
              <p className="card-details">{card.answerDetails}</p>
            )}
          </div>
        ) : (
          <div className={`card-front ${card.category}`}>
            <h3>{card.question}</h3>
            {card.questionImage && (
              <img 
                src={card.questionImage} 
                alt="Question illustration" 
                className="card-image"
              />
            )}
            <div className="card-prompt">Guess the answer here!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flashcard; 