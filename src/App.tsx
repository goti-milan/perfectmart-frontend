import { RouterProvider } from "react-router-dom";
import Header from "./components/header/header";
import { router } from "./routes";
import Footer from "./components/footer/footer";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
