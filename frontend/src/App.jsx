import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import DeleteBook from './pages/DeleteBook'
import CreateBook from './pages/CreateBook'
import EditBook from './pages/EditBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/books/create' element={<CreateBook></CreateBook>}></Route>
      <Route path='books/delete/:id' element={<DeleteBook></DeleteBook>}></Route>
      <Route path='books/edit/:id' element={<EditBook></EditBook>}></Route>
      <Route path='books/details/:id' element={<ShowBook></ShowBook>}></Route>
    </Routes>
  )
}

export default App