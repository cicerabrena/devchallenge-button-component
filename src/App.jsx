import './App.css';
import GlobalSytle from './theme/globalStyle';
import Button from './components/Button';

function App() {
	return (
		<>
			<GlobalSytle />
			<Button startIcon="star" endIcon="email">
				Default
			</Button>
		</>
	);
}

export default App;
