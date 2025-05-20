import './App.css';
import BackendAPI from './components/BackendApi';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>YouTube Transcript Summarizer</h1>
				<pre><div class="line"></div></pre>
				<BackendAPI />
			</header>
			{/* <footer className="footer">
				Made by - Rohith Siliveri
			</footer> */}
		</div>
	);
}

export default App;
