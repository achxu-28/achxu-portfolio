// // pages/game.js
// "use client"
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';

// // An object to define the game rules for a win condition.
// // The key beats the value.
// const RULES = {
//   rock: 'scissors',
//   paper: 'rock',
//   scissors: 'paper',
// };

// const RockPaperScissorsPage = () => {
//   // State for game choices
//   const [playerChoice, setPlayerChoice] = useState(null);
//   const [computerChoice, setComputerChoice] = useState(null);

//   // State for game outcomes and scores
//   const [result, setResult] = useState(''); // 'win', 'lose', 'draw'
//   const [scores, setScores] = useState({ player: 0, computer: 0 });
  
//   // State for streaks
//   const [winStreak, setWinStreak] = useState(0);
//   const [loseStreak, setLoseStreak] = useState(0);
//   const [highestWinStreak, setHighestWinStreak] = useState(0);
//   const [highestLoseStreak, setHighestLoseStreak] = useState(0);

//   // State to control the visibility of the results popup
//   const [showModal, setShowModal] = useState(false);

//   // Main game logic function
//   const handlePlayerChoice = (choice) => {
//     // 1. Set the player's choice
//     setPlayerChoice(choice);
    
//     // 2. Generate a random choice for the computer
//     const choices = ['rock', 'paper', 'scissors'];
//     const computersRandomChoice = choices[Math.floor(Math.random() * choices.length)];
//     setComputerChoice(computersRandomChoice);

//     // 3. Determine the winner and update states
//     determineWinner(choice, computersRandomChoice);
    
//     // 4. Show the results popup
//     setShowModal(true);
//   };

//   // This effect hook runs whenever the result changes to update streaks
//   useEffect(() => {
//     if (result === 'win') {
//       const newWinStreak = winStreak + 1;
//       setWinStreak(newWinStreak);
//       setLoseStreak(0); // Reset losing streak
//       if (newWinStreak > highestWinStreak) {
//         setHighestWinStreak(newWinStreak);
//       }
//     } else if (result === 'lose') {
//       const newLoseStreak = loseStreak + 1;
//       setLoseStreak(newLoseStreak);
//       setWinStreak(0); // Reset winning streak
//       if (newLoseStreak > highestLoseStreak) {
//         setHighestLoseStreak(newLoseStreak);
//       }
//     } else if (result === 'draw') {
//       // On a draw, reset both current streaks
//       setWinStreak(0);
//       setLoseStreak(0);
//     }
//   }, [result, scores]); // Dependency array ensures this runs only when result or scores change

//   // Function to determine the winner based on choices
//   const determineWinner = (player, computer) => {
//     if (player === computer) {
//       setResult('draw');
//     } else if (RULES[player] === computer) {
//       setResult('win');
//       setScores({ ...scores, player: scores.player + 1 });
//     } else {
//       setResult('lose');
//       setScores({ ...scores, computer: scores.computer + 1 });
//     }
//   };
  
//   // Function to close the modal and reset for the next round
//   const playAgain = () => {
//     setShowModal(false);
//     setPlayerChoice(null);
//     setComputerChoice(null);
//     setResult('');
//   };

//   // Emojis for choices for a bit of fun!
//   const choiceEmojis = {
//     rock: '✊',
//     paper: '✋',
//     scissors: '✌️',
//   };

//   return (
//     <>
//       <Head>
//         <title>Rock, Paper, Scissors Game</title>
//       </Head>
      
//       {/* Main Game Container */}
//       <div className="container">
//         <h1>Rock, Paper, Scissors</h1>
//         <p>Choose your weapon to challenge the computer!</p>

//         {/* Scoreboard */}
//         <div className="scoreboard">
//           <div className="score">
//             <h2>You</h2>
//             <p>{scores.player}</p>
//           </div>
//           <div className="score">
//             <h2>Computer</h2>
//             <p>{scores.computer}</p>
//           </div>
//         </div>

//         {/* Player Choice Buttons */}
//         <div className="choices">
//           {Object.keys(RULES).map((choice) => (
//             <button key={choice} className="choice-btn" onClick={() => handlePlayerChoice(choice)}>
//               <span className="emoji">{choiceEmojis[choice]}</span>
//               {choice.charAt(0).toUpperCase() + choice.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Results Popup Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             {result === 'win' && <h2>You Win! 🎉</h2>}
//             {result === 'lose' && <h2>You Lose! 😢</h2>}
//             {result === 'draw' && <h2>It's a Draw! 🤝</h2>}
            
//             <div className="modal-choices">
//                 <p>You chose: {choiceEmojis[playerChoice]}</p>
//                 <p>Computer chose: {choiceEmojis[computerChoice]}</p>
//             </div>
            
//             <div className="streaks">
//                 <p><strong>Current Win Streak:</strong> {winStreak}</p>
//                 <p><strong>Current Lose Streak:</strong> {loseStreak}</p>
//                 <hr />
//                 <p><strong>Highest Win Streak:</strong> {highestWinStreak}</p>
//                 <p><strong>Highest Lose Streak:</strong> {highestLoseStreak}</p>
//             </div>

//             <button onClick={playAgain}>Play Again</button>
//           </div>
//         </div>
//       )}

//       {/* Scoped CSS for styling the page */}
//       <style jsx>{`
//         .container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           min-height: 100vh;
//           background-color: #fff;
//           color: #000e;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//             Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
//           text-align: center;
//         }
//         h1 {
//           font-size: 3rem;
//           margin-bottom: 0.5rem;
//         }
//         .scoreboard {
//           display: flex;
//           justify-content: space-around;
//           width: 300px;
//           margin: 2rem 0;
//           border: 2px solid white;
//           border-radius: 10px;
//           padding: 1rem;
//         }
//         .score h2 {
//           margin: 0;
//           font-size: 1.5rem;
//         }
//         .score p {
//           margin: 0;
//           font-size: 2.5rem;
//           font-weight: bold;
//         }
//         .choices {
//           display: flex;
//           gap: 1rem;
//         }
//         .choice-btn {
//           padding: 1rem 2rem;
//           font-size: 1.2rem;
//           border-radius: 10px;
//           border: 2px solid #000;
//           background-color: transparent;
//           color: #000;
//           cursor: pointer;
//           transition: background-color 0.2s, transform 0.2s;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 0.5rem;
//           min-width: 120px;
//         }
//         .choice-btn:hover {
//           background-color: #fff;
//           color: #000;
//           transform: translateY(-5px);
//         }
//         .emoji {
//           font-size: 2.5rem;
//         }

//         /* Modal Styles */
//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0, 0, 0, 0.8);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 1000;
//         }
//         .modal-content {
//           background-color: #f3faff;
//           padding: 2rem;
//           border-radius: 15px;
//           width: 90%;
//           max-width: 400px;
//           text-align: center;
//           border: 2px solid #000;
//         }
//         .modal-content h2 {
//           margin-top: 0;
//           font-size: 2rem;
//         }
//         .modal-choices {
//             display: flex;
//             justify-content: space-around;
//             font-size: 1.5rem;
//             margin: 1rem 0;
//         }
//         .streaks {
//             background-color: #fff;
//             border-radius: 8px;
//             padding: 1rem;
//             margin: 1.5rem 0;
//         }
//         .streaks p {
//             margin: 0.5rem 0;
//             font-size: 1rem;
//         }
//         .streaks hr {
//             border: 1px solid #4a505c;
//             margin: 1rem 0;
//         }
//         .modal-content button {
//           padding: 0.8rem 1.5rem;
//           font-size: 1rem;
//           border-radius: 8px;
//           border: none;
//           background-color: #fff;
//           color: #000;
//           cursor: pointer;
//           font-weight: bold;
//           margin-top: 1rem;
//           transition: background-color 0.2s;
//         }
//         .modal-content button:hover {
//           background-color: #a7eaff;
//         }
//       `}</style>
//     </>
//   );
// };

// export default RockPaperScissorsPage;