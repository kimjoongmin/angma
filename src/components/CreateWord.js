// import React, { useRef } from "react";
// import UseFetch from "../Hooks/UseFetch";
// import { useNavigate } from "react-router-dom";

// export default function CreateWord() {
//     const days = UseFetch("http://localhost:3001/days");
//     const navigate = useNavigate();
//     const engRef = useRef(null);
//     const korRef = useRef(null);
//     const dayRef = useRef(null);
//     async function onSubmit(e) {
//         e.preventDefault();
//         try {
//             const res = await fetch(`http://localhost:3001/words`, {
//                 method: "POST",
//                 header: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     // day: ref한 곳의 현재입력한값,
//                     // eng: 현재입력한값,
//                     // kor: 현재입력한값,
//                     day: dayRef.current.value,
//                     eng: engRef.current.value,
//                     kor: korRef.current.value,
//                     isDone: false,
//                 }),
//             });
//             if (res.ok) {
//                 alert("생성이 완료 되었습니다.");
//                 navigate(`/day/${dayRef.current.value}`);
//                 // react router v6에서 useHistory hook 대신 useNavigate()사용
//                 // import {useHistory} from "react-router-dom"
//                 // const history = useHistory();
//                 // history.push(`/day/${dayRef.current.value}`);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     }
//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <div className="input_area">
//                     <label>Eng</label>
//                     <input type="text" placeholder="computer" ref={engRef} />
//                 </div>
//                 <div className="input_area">
//                     <label>Kor</label>
//                     <input type="text" placeholder="컴퓨터" ref={korRef} />
//                 </div>
//                 <div className="input_area">
//                     <label>Day</label>
//                     <select ref={dayRef}>
//                         {/* days를 어디서 가져와야하나..custom hooks인 useFetch에서 가져오면됨 */}
//                         {days.map(day => (
//                             <option key={day.id} value={day.day}>
//                                 {day.day}
//                             </option>
//                         ))}
//                     </select>
//                     {/* 저장을 계속 누르면 같은 단어가 계속 생성되는 것을 막기위해 또 추가한 단어를 바로 볼 수 있게 추가된 페이지로 이동이 필요함 useHistory 사용 */}
//                     <button>저장</button>
//                 </div>
//             </form>
//         </>
//     );
// }
import React, { useRef } from "react";
import UseFetch from "../Hooks/UseFetch";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    const days = UseFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3001/words", {
                method: "POST",
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    day: dayRef.current.value,
                    isDone: false,
                }),
            });
            if (res.ok) {
                alert("저장 되었습니다.");
                navigate("/");
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="input_area">
                    <label>Eng</label>
                    <input type="text" placeholder="love" ref={engRef} />
                </div>
                <div className="input_area">
                    <label>Kor</label>
                    <input type="text" placeholder="사랑" ref={korRef} />
                </div>
                <div className="input_area">
                    <label>Day</label>
                    <select ref={dayRef}>
                        {days.map(day => (
                            <option key={day.id} value={day.day}>
                                {day.day}
                            </option>
                        ))}
                    </select>{" "}
                    <button>저장</button>
                </div>
            </form>
        </>
    );
}
