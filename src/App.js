import { BrowserRouter, Routes, Route } from "react-router-dom";
import DarkPage from "./pages/DarkPage";
import styled from "styled-components";
import ExitPage from "./pages/ExitPage";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

export default function App() {
	return (
		<Container>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<DarkPage />} />
					<Route path="/exit" element={<ExitPage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
`;
