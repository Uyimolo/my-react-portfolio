
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'

import Home from "./pages/Home"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
<Route index element={<Home />}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
