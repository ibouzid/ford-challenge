import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AddAuthor from './Components/AddAuthor/AddAuthor';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';

const App = () =>{
	return (
		<div className='main'>
			<Header />
			<Routes>
				<Route path='/' exact element={<MainPage />} />
				<Route path='/add-new-author' exact element={<AddAuthor />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
