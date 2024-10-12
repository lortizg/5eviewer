import './App.css';
import axios from 'axios';

function App() {
	const logeo = async () => {
		const response = await axios.get('https://5e.tools/data/feats.json');
		console.log(response.data);
	}
	return (
		<div className="App">
			<button
				onClick={logeo}
			>hola</button>
		</div>
	);
}

export default App;
