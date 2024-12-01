import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Users from './components/Users'
import Cities from './components/Cities'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path:'/users', element: <Users /> },
        { path:'/cities', element: <Cities /> }
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
