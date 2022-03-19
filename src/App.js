import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Exchange from "./pages/Exchange";
import Home from "./pages/Home";
import styled from "styled-components";

const Section = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;

function App() {
    return (
        <Section>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/exchanges/:id" element={<Exchange />} />
                </Routes>
            </BrowserRouter>
        </Section>
    );
}

export default App;
