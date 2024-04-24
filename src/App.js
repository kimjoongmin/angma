import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Day from './components/Day'
import DayList from './components/DayList'
import EmptyPage from './components/EmptyPage'
import Headers from './components/Header'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Headers/>
        <Routes>
            <Route path='/' element={DayList} />
            <Route path='/day' element={Day} />
            <Route path='*' element={EmptyPage} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
