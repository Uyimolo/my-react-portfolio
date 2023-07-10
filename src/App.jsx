import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
