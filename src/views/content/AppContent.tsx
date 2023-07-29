import { Button, DatePicker } from "antd";
import { useState } from "preact/hooks";

export function AppContent() {
	const [count, setCount] = useState(0);

	return (
		<div class="p-5">
			<div>
				<Button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</Button>
				<p>Test app, all content coming soon!</p>
			</div>
			<DatePicker />
		</div>
	);
}
