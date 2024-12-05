import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Users from './components/User/Users'
import Cities from './components/City/Cities'
import Persons from './components/Person/Persons'
import CityForm from './components/City/CityForm'
import AddNewCity from './components/City/AddNewCity'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path:'/cities', element: <Cities /> },
        { path:'/city/add', element: <AddNewCity /> },
        { path: '/city/:id', element: <CityForm /> },
        { path: 'persons', element: <Persons /> },
        { path:'/users', element: <Users /> }
      ]
    }
  ])
  
  return (
    <>
      <RouterProvider router={router} />      
    </>
  )
}

export default App
