import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Users from './components/User/Users'
import Cities from './components/City/Cities'
import People from './components/Person/People'
import UpdateCity from './components/City/UpdateCity'
import AddNewCity from './components/City/AddNewCity'
import AddNewPerson from './components/Person/AddNewPerson'
import UpdatePerson from './components/Person/UpdatePerson'

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
        { path: '/city/:id', element: <UpdateCity /> },

        { path: '/people', element: <People /> },
        { path: '/person/add', element: <AddNewPerson /> },
        { path: '/person/:id', element: <UpdatePerson /> },

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
