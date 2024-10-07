import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Root />  == <Layout />
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
