import { useState } from 'preact/hooks'
import XillerLogo from "./assets/logo.svg";
import "./app.css";

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://xiller228.carrd.co" target="_blank">
					<img src={XillerLogo} class="logo xiller" alt="Xiller228 carrd" />
				</a>
			</div>
			<h1>Xiller228</h1>
			<div class="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>Test app, all content coming soon!</p>
			</div>
		</>
	);
}

