// import React from "react";
// import Header from "./components/Header";
// import DayList from "./components/DayList";
// import Day from "./components/Day";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import EmptyPage from "./components/EmptyPage";
// //Switch 대신 Routes
// //Route에서 component prop 대신 element prop 사용하여 jsx 요소 전달!
// export default function App() {
//     return (
//         <div className="App">
//             <BrowserRouter>
//                 <Header />
//                 <Routes>
//                     <Route path="/" element={<DayList />} />
//                     <Route path="/day/:day" element={<Day />} />
//                     <Route path="*" element={<EmptyPage />} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import EmptyPage from "./components/EmptyPage";
import CreateWord from "./components/CreateWord";
import CreateDay from "./components/CreateDay";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<DayList />} />
                    <Route path="/day/:day" element={<Day />} />
                    <Route path="/createWord" element={<CreateWord />} />
                    <Route path="/createDay" element={<CreateDay />} />
                    <Route path="*" element={<EmptyPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
