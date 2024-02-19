import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import prodPage from "./pages/ProdsPage";
import { AuthContextProvider } from "./context/AutContext";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage/>} />
          <Route path="/sign-up" element={<SignUpPage/>} />
          <Route path="/products/new" element={<prodPage/>} />
        </Routes>
      </BrowserRouter>    
    </AuthContextProvider>
  );
};

export default App;
