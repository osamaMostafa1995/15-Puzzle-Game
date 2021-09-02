import {useState, useEffect } from "react";

const Board = () => {
    const Board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const [randomBoard, setRandomBoard] = useState([]);
    ////////////////////////////////////////////////
    function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }
/////////////////////////////////////////////////
useEffect(()=>{
    setRandomBoard(()=>shuffle(Board));
},[]);
///////////////////////////////////////////
function swap(valIndex, zeroIndex) {
    let tempArray = [...randomBoard];
    tempArray[zeroIndex] = randomBoard[valIndex];
    tempArray[valIndex] = 0;
    setRandomBoard(() => [...tempArray]);
  };
  ///////////////////////////////////////////////
  function moveSquare(val) {
    let zeroIndex = randomBoard.indexOf(0);
    let valIndex = randomBoard.indexOf(val);
    console.log(zeroIndex, valIndex);
    /////////// transform top && bottom/////////////////////
    if (valIndex + 4 === zeroIndex || valIndex - 4 === zeroIndex) {
      swap(valIndex, zeroIndex);
    }
    //////////////transform right///////////////////
    else if (valIndex + 1 === zeroIndex && zeroIndex % 4 !== 0) {
      swap(valIndex, zeroIndex);
    }
    ///////////////////transform left/////////////////////
     else if (valIndex - 1 === zeroIndex && (zeroIndex + 1) % 4 !== 0) {
      swap(valIndex, zeroIndex);
    }
  }
    return ( 
        <div className="Board">
        {randomBoard.map((value) => {
        return (
          <div key={value} className="BoardSqr">
            <div className={value === 0 ? 'Empty' : 'tile'} onClick={() => moveSquare(value)}>
            {value}
        </div>
          </div>
        );
      })}
        </div>
     );
}
 
export default Board;