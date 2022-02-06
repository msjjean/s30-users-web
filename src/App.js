import { Routes, Route } from 'react-router-dom';
import Navbar from './components/globals/Navbar';
import Home from './components/Home';
import NewUser from './components/users/NewUser';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<Routes>
					<Route path="/" element={ <Home /> } />
					<Route path="/new-user" element={ <NewUser /> } />
				</Routes>
			</div>
		</div>
	);
}

export default App;
