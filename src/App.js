import { BrowserRouter, Routes, Route } from "react-router-dom";
import DarkPage from "./pages/DarkPage";
import styled from "styled-components";
import ExitPage from "./pages/ExitPage";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import AddStockPage from "./pages/AddStockPage";
import StockPage from "./pages/StockPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
	return (
		<Container>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<DarkPage />} />
					<Route path="/exit" element={<ExitPage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/:category" element={<CategoryPage />} />
					<Route path="/:category/:item" element={<ItemPage />} />
					<Route path="/van/stock" element={<AddStockPage />} />
					<Route path="/van" element={<StockPage/>} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
`;
