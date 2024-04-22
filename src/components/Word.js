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

// import React, { useState } from "react";

// export default function Word({ word: w }) {
//     const [word, setWord] = useState(w);
//     const [isShow, setIsShow] = useState(false);
//     const [isDone, setIsDone] = useState(word.isDone);
//     function toggleShow() {
//         setIsShow(!isShow);
//     }
//     // function toggleDone() {
//     //     // setIsDone(!isDone);
//     //     //데이터를 변경 유지
//     //     fetch(`http://localhost:3001/words/${word.id}`, {
//     //         method: "PUT",
//     //         header: {
//     //             "Content-Type": "application/json",
//     //         },
//     //         body: JSON.stringify({
//     //             ...word,
//     //             isDone: !isDone,
//     //         }),
//     //     }).then(res => {
//     //         if (res.ok) setIsDone(!isDone);
//     //     });
//     // }

//     ///async await
//     async function toggleDone() {
//         try {
//             const res = await fetch(`http://localhost:3001/words/${word.id}`, {
//                 method: "PUT",
//                 header: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     ...word,
//                     isDone: !isDone,
//                 }),
//             });
//             if (res.ok) {
//                 setIsDone(!isDone);
//             }
//         } catch (error) {
//             console.log("Error:", error);
//         }
//     }

//     // function del() {
//     //     if (window.confirm("삭제하시겠습니까?")) {
//     //         fetch(`http://localhost:3001/words/${word.id}`, {
//     //             method: "DELETE",
//     //         }).then(res => {
//     //             if (res.ok) {
//     //                 setWord({ id: 0 });
//     //             }
//     //         });
//     //     }
//     // }
//     // if (word.id === 0) {
//     //     return null;
//     // }
//     // //삭제 후 리렌더링

//     async function del() {
//         try {
//             if (window.confirm("정말 삭제하시겠습니까?")) {
//                 const res = await fetch(`http://localhost:3001/words/${word.id}`, {
//                     method: "DELETE",
//                 });
//                 if (res.ok) {
//                     setWord({ id: 0 });
//                 }
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     }
//     if (word.id === 0) {
//         return null;
//     }

//     return (
//         <>
//             <tr className={isDone ? "off" : ""}>
//                 <td>
//                     <input type="checkbox" checked={isDone} onChange={toggleDone} />
//                 </td>
//                 <td>{word.eng}</td>
//                 {/* <td>{isShow ? word.kor : ""}</td> */}
//                 <td>{isShow && word.kor}</td>
//                 <td>
//                     <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
//                     <button onClick={del} className="btn_del">
//                         삭제
//                     </button>
//                 </td>
//             </tr>
//         </>
//     );
// }

import React, { useState } from "react";

export default function Word({ word: w }) {
    //삭제 후 리렌더링으로 인한 상태 필요
    const [word, setWord] = useState(w); //word가 위에 props와 이름 충돌 해결을 위해 : w해줌 그리고 상단으로 위치 변경

    const [isDone, setIsDone] = useState(word.isDone);
    const [isShow, setIsShow] = useState(false);

    //async 로 체크박스 PUT 기능
    async function toggleDone() {
        // setIsDone(!isDone);
        try {
            const res = await fetch(`http://localhost:3001/words/${word.id}`, {
                method: "PUT",
                header: {
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
            console.error("Error:", error);
        }
    }
    function toggleShow() {
        setIsShow(!isShow);
    }
    //삭제 기능 추가 DELETE
    async function del() {
        //다른 기능과 다르게 받올 데이터가 없음
        if (window.confirm("정말 삭제하시겠습니까?")) {
            try {
                const res = await fetch(`http://localhost:3001/words/${word.id}`, {
                    method: "DELETE",
                });
                if (res.ok) {
                    // word.id = 0; //삭제 되고 리렌더링이 안됨. 상태관리 필요함
                    setWord({ id: 0 });
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }
    //null을 반환해서 아무것도 안하게 만들어줌
    // if (word.id === 0) {
    //     return null;
    // }
    return (
        <>
            <tr className={isDone ? "off" : ""}>
                <td>
                    <input type="checkbox" checked={isDone} onChange={toggleDone} />
                </td>
                <td>{word.eng}</td>
                <td>{isShow && word.kor}</td>
                <td>
                    <button type="button" onClick={toggleShow}>
                        뜻 {isShow ? "숨기기" : "보기"}
                    </button>
                    <button type="button" className="btn_del" onClick={del}>
                        삭제
                    </button>
                </td>
            </tr>
        </>
    );
}
