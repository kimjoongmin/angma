// import React from "react";
// import dummy from "../db/data.json";
// import { useParams } from "react-router-dom";

// export default function Day() {
//     //dummy.word
//     // const day = 1;
//     // const a = useParams();
//     // console.log('a: ', a);
//     const { day } = useParams();
//     const wordList = dummy.words.filter(word => word.day === Number(day));
//     // console.log("wordList: ", wordList);

//     return (
//         <>
//             <h2>Day {day}</h2>
//             <table>
//                 <tbody>
//                     {wordList.map(word => (
//                         // {dummy.words.map(word => (
//                         <tr key={word.id}>
//                             <td>{word.eng}</td>
//                             <td>{word.kor}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );
// }

// import React from "react";
// import dummy from "../db/data.json";
// import { useParams } from "react-router-dom";
// import Word from "./Word";

// export default function Day() {
//     // let day = 1;
//     const { day } = useParams();
//     const wordList = dummy.words.filter(word => word.day === Number(day));
//     // Number(day) 오류가 안나네;;
//     return (
//         <div>
//             <h2>Day {day}</h2>
//             <table>
//                 <tbody>
//                     {wordList.map(word => (
//                         <Word word={word} key={word.id} />
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Word from "./Word";

// export default function Day() {
//     // let day = 1;
//     const [words, setWords] = useState([]);
//     const { day } = useParams();
//     // const wordList = words.filter(word => word.day === Number(day));
//     useEffect(() => {
//         fetch(`http://localhost:3001/words?day=${day}`)
//             .then(res => res.json())
//             .then(data => setWords(data));
//     }, [day]);
//     return (
//         <>
//             <h2>Day {day}</h2>
//             <table>
//                 <tbody>
//                     {words.map(word => (
//                         <Word word={word} key={word.id} />
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );
// }

import Word from "./Word";
import { useParams } from "react-router-dom";
import UseFetch from "../Hooks/UseFetch";

export default function Day() {
    const { day } = useParams();
    const words = UseFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
