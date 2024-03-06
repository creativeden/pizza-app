import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
	return (
		<>
			<Button onClick={() => console.log()}>Кнопка</Button>
			<Button appearence='big' onClick={() => console.log()}>Кнопка</Button>
			<Input placeholder='Email' />
		</>
	);
}

export default App;
