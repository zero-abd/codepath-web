import React from 'react';

const Flashcard = ({ card, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-content">
        {isFlipped ? (
          <div className={`card-back ${card.category}`}>
            <h2>{card.answer}</h2>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Flashcard; 