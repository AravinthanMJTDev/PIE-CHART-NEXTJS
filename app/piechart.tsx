// import React from "react";

// const PieChart = () => {
//   const radius = 15.9155;
//   const center = 18;
//   const data = [
//     { percent: 25, color: "red" },
//     { percent: 25, color: "green" },
//     { percent: 25, color: "blue" },
//     { percent: 25, color: "pink" },
//   ];

//   const total = data.reduce((acc, slice) => acc + slice.percent, 0);

//   const normalizedData = data.map((slice) => ({
//     ...slice,
//     normalizedPercent: (slice.percent / total) * 100,
//   }));
//   console.log("console");
//   const calculatePath = (percent: number, startAngle: number) => {
//     const x1 = center + radius * Math.cos((2 * Math.PI * startAngle) / 100);
//     const y1 = center + radius * Math.sin((2 * Math.PI * startAngle) / 100);
//     const endAngle = startAngle + percent;
//     const x2 = center + radius * Math.cos((2 * Math.PI * endAngle) / 100);
//     const y2 = center + radius * Math.sin((2 * Math.PI * endAngle) / 100);
//     const largeArcFlag = percent > 50 ? 1 : 0;
//     console.log("hiw");
//     console.log(
//       `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`
//     );
//     return `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
//   };

//   const calculateTextPosition = (percent: number, startAngle: number) => {
//     const midAngle = startAngle + percent / 2;
//     const x = center + (radius / 2) * Math.cos((2 * Math.PI * midAngle) / 100);
//     const y = center + (radius / 2) * Math.sin((2 * Math.PI * midAngle) / 100);
//     return { x, y };
//   };

//   let cumulativePercent = 0;

//   return (
//     <div className="flex flex-col justify-center items-center h-[1000px] w-[1000px]">
//       <svg viewBox="0 0 36 36">
//         {normalizedData.map((slice, index) => {
//           const startAngle = cumulativePercent;
//           const pathData = calculatePath(slice.normalizedPercent, startAngle);
//           const textPosition = calculateTextPosition(
//             slice.normalizedPercent,
//             startAngle
//           );
//           cumulativePercent += slice.normalizedPercent;

//           return (
//             <React.Fragment key={index}>
//               <path
//                 d={pathData}
//                 fill={slice.color}
//                 stroke="white"
//                 strokeWidth="0.1"
//               />
//               <text
//                 x={textPosition.x}
//                 y={textPosition.y}
//                 fill="black"
//                 fontSize="2"
//                 textAnchor="middle"
//                 dominantBaseline="middle"
//               >
//                 {slice.percent}%
//               </text>
//             </React.Fragment>
//           );
//         })}
//       </svg>
//       <ul className="flex flex-row justify-around bg-blue-400">
//         {normalizedData.map((slice, index) => (
//           <li key={index}>
//             <span
//               style={{
//                 width: "20px",
//                 height: "20px",
//                 backgroundColor: slice.color,
//               }}
//             ></span>
//             <p>{slice.normalizedPercent.toFixed(2)}%</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PieChart;
