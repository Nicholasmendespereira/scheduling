import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "../App";



function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/App" element={<App/>}/>
          {/* <Route exact path="/" element={() => {<h1>HOME</h1>}}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;