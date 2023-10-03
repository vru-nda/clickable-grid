import React, {useState} from 'react';
import './style.css';

const ROWS = 8;
const COLS = 8;

const ClickableGrid = () => {
  const [isRedCell, setIsRedCell] = useState('');

  return (
    <div className='grid-container'>
      {Array(ROWS)
        .fill(false)
        .map((_, rowIndex) =>
          Array(COLS)
            .fill(false)
            .map((_, colIndex) => (
              <div
                key={`${rowIndex}_${colIndex}`}
                className={`grid-item ${
                  (rowIndex + colIndex) % 2 === 0 ? 'black' : ''
                } ${
                  isRedCell.includes(`${rowIndex}_${colIndex}`) ? 'red' : ''
                }`}
                onClick={() => setIsRedCell(`${rowIndex}_${colIndex}`)}
              ></div>
            ))
        )}
    </div>
  );
};

export default ClickableGrid;
