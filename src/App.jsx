import Entry from "./pages/Entry";
import "./App.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
