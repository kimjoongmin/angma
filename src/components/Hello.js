import React, { useState } from "react";

export default function Hello({ age }) {
    const [name, setName] = useState("mike");
    const [stateAge, setAge] = useState(age);
    const msg = stateAge > 19 ? "성인입니다." : "미성년자입니다";
    function changeName() {
        const newName = name === "mike" ? "jane" : "mike";
        setName(newName);
        setAge(stateAge + 1);
    }
    return (
        <div>
            <h2>
                {name} ({stateAge}) : {msg}
            </h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
}
