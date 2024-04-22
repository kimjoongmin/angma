import React from "react";
import UseFetch from "../Hooks/UseFetch";
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
    const days = UseFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    async function addDay() {
        try {
            const res = await fetch("http://localhost:3001/days", {
                method: "POST",
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day: days.length + 1,
                }),
            });
            if (res.ok) {
                alert("생성이 완료 되었습니다.");
                navigate("/");
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }
    //삭제 기능 추가..
    async function minusDay() {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            try {
                const lastDayId = days[days.length - 1].id; // 마지막 일자의 ID를 가져옴
                const res = await fetch(`http://localhost:3001/days/${lastDayId}`, {
                    method: "DELETE",
                });
                if (res.ok) {
                    navigate("/");
                }
            } catch (error) {
                console.error("Error: ", error);
            }
        }
    }

    return (
        <>
            <div>
                <h3>현재 일수 : {days.length}</h3>
                <button onClick={addDay}>Day 추가</button>
                <button onClick={minusDay} className="btn_del">
                    Day 삭제
                </button>
            </div>
        </>
    );
}
