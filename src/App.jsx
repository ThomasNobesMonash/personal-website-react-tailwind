import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
        <Toaster />
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="*" element={<NotFound />}/>  /* MUST be the LAST route */
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
