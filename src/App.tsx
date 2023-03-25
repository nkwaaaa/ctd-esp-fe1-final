import { Route, Routes } from "react-router-dom";
import "./App.css";
import Encabezado from "./componentes/layout/encabezado.componente";
import PaginaDetalle from "./paginas/Detalle.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaInicio from "./paginas/Inicio.pagina";

function App() {
	return (
		<div className="App">
			<Encabezado />
			<Routes>
				<Route path="/" element={<PaginaInicio />} />
				<Route path="favoritos" element={<PaginaFavoritos />} />
				<Route path="detalle" element={<PaginaDetalle />} />
			</Routes>
		</div>
	);
}

export default App;
