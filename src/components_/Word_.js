// import React, { useState } from "react";

// export default function Word({ word }) {
//     const [isShow, setIsShow] = useState(false);
//     const [isDone, setIsDone] = useState(word.isDone);
//     const toggleShow = () => {
//         setIsShow(!isShow);
//     };
//     const toggleDone = () => {
//         setIsDone(!isDone);
//     };
//     return (
//         <>
//             <tr className={isDone ? "off" : ""}>
//                 <td>
//                     <input type="checkbox" checked={isDone} onChange={toggleDone} />
//                 </td>
//                 <td>{word.eng}</td>
//                 <td>{isShow && word.kor}</td>
//                 <td>
//                     <button onClick={toggleShow}>뜻 {isShow ? " 숨기기" : " 보기"}</button>
//                     <button className="btn_del">삭제</button>
//                 </td>
//             </tr>
//         </>
//     );
// }

// import React, { useState } from "react";

// export default function Word({ word }) {
//     const [isDone, setIsDone] = useState(word.isDone);
//     const [isShow, setIsShow] = useState(false);
//     function toggleDone() {
//         setIsDone(!isDone);
//     }
//     function toggleShow() {
//         setIsShow(!isShow);
//     }
//     return (
//         <>
//             <tr className={isDone ? "off" : ""}>
//                 <td>
//                     <input type="checkbox" checked={isDone} onChange={toggleDone} />
//                 </td>
//                 <td>{word.eng}</td>
//                 <td>{isShow && word.kor}</td>
//                 <td>
//                     <button type="button" onClick={toggleShow}>
//                         뜻 {isShow ? "숨기기" : "보기"}
//                     </button>
//                     <button type="button" className="btn_del">
//                         삭제
//                     </button>
//                 </td>
//             </tr>
//         </>
//     );
// }

import React, { useState } from "react";

export default function Word({ word: w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    function toggleShow() {
        setIsShow(!isShow);
    }
    // function toggleDone() {
    //     // setIsDone(!isDone);
    //     //데이터를 변경 유지
    //     fetch(`http://localhost:3001/words/${word.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             ...word,
    //             isDone: !isDone,
    //         }),
    //     }).then(res => {
    //         if (res.ok) setIsDone(!isDone);
    //     });
    // }

    ///async await
    async function toggleDone() {
        try {
            const res = await fetch(`http://localhost:3001/words/${word.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...word,
                    isDone: !isDone,
                }),
            });
            if (res.ok) {
                setIsDone(!isDone);
            }
        } catch (error) {
            console.log("Error:", error);
        }
    }

    // function del() {
    //     if (window.confirm("삭제하시겠습니까?")) {
    //         fetch(`http://localhost:3001/words/${word.id}`, {
    //             method: "DELETE",
    //         }).then(res => {
    //             if (res.ok) {
    //                 setWord({ id: 0 });
    //             }
    //         });
    //     }
    // }
    // if (word.id === 0) {
    //     return null;
    // }
    // //삭제 후 리렌더링

    async function del() {
        try {
            if (window.confirm("정말 삭제하시겠습니까?")) {
                const res = await fetch(`http://localhost:3001/words/${word.id}`, {
                    method: "DELETE",
                });
                if (res.ok) {
                    setWord({ id: 0 });
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    if (word.id === 0) {
        return null;
    }

    return (
        <>
            <tr className={isDone ? "off" : ""}>
                <td>
                    <input type="checkbox" checked={isDone} onChange={toggleDone} />
                </td>
                <td>{word.eng}</td>
                {/* <td>{isShow ? word.kor : ""}</td> */}
                <td>{isShow && word.kor}</td>
                <td>
                    <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
                    <button onClick={del} className="btn_del">
                        삭제
                    </button>
                </td>
            </tr>
        </>
    );
}
