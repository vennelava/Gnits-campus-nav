// import { useState } from "react";

// const gridSize = 5; // 5x5 grid for example

// function App() {
//   const [start, setStart] = useState([0, 0]);
//   const [end, setEnd] = useState([4, 4]);
//   const [path, setPath] = useState([]);

//   const findShortestPath = () => {
//     const directions = [
//       [1, 0],
//       [-1, 0],
//       [0, 1],
//       [0, -1],
//     ];
//     const queue = [[...start, []]];
//     const visited = new Set();

//     while (queue.length > 0) {
//       const [x, y, p] = queue.shift();
//       const key = `${x},${y}`;
//       if (visited.has(key)) continue;
//       visited.add(key);
//       const newPath = [...p, [x, y]];
//       if (x === end[0] && y === end[1]) {
//         setPath(newPath);
//         return;
//       }
//       for (const [dx, dy] of directions) {
//         const nx = x + dx;
//         const ny = y + dy;
//         if (nx >= 0 && ny >= 0 && nx < gridSize && ny < gridSize) {
//           queue.push([nx, ny, newPath]);
//         }
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
//       <h1 className="text-3xl font-bold mb-6">Campus Shortest Path 🏫</h1>

//       <div className="grid grid-cols-5 gap-2 mb-6">
//         {[...Array(gridSize)].map((_, i) =>
//           [...Array(gridSize)].map((_, j) => {
//             const isStart = i === start[0] && j === start[1];
//             const isEnd = i === end[0] && j === end[1];
//             const inPath = path.some(([x, y]) => x === i && y === j);
//             return (
//               <div
//                 key={`${i}-${j}`}
//                 className={`w-12 h-12 flex items-center justify-center rounded-md ${
//                   isStart
//                     ? "bg-green-500"
//                     : isEnd
//                     ? "bg-red-500"
//                     : inPath
//                     ? "bg-yellow-400"
//                     : "bg-white/20"
//                 }`}
//               >
//                 {isStart ? "S" : isEnd ? "E" : ""}
//               </div>
//             );
//           })
//         )}
//       </div>

//       <button
//         onClick={findShortestPath}
//         className="px-4 py-2 bg-black/30 hover:bg-black/50 rounded-lg"
//       >
//         Find Shortest Path
//       </button>
//     </div>
//   );
// }

// export default App;

import './App.css'
import CampusNavigator from './CampusNavigator'

function App() {
  return (
    <div className="app-container">
      <CampusNavigator />
    </div>
  )
}

export default App