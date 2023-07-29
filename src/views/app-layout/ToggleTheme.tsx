import { BulbFilled, BulbOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useContext, useEffect } from "preact/hooks";
import { ThemeContext } from "../../App";
import { AppSiderCollapsedContext } from "./AppLayout";

export function ToggleTheme() {
	const themeContext = useContext(ThemeContext);
	const { collapsed } = useContext(AppSiderCollapsedContext);
	const darkMode = themeContext.theme === "dark";

	useEffect(() => {
		document.body.classList.toggle("dark", darkMode);
	}, [darkMode]);

	return (
		<Button
			icon={darkMode ? <BulbFilled /> : <BulbOutlined />}
			className="border-none shadow-none"
			onClick={() => themeContext.setTheme(darkMode ? "light" : "dark")}
		>
			{collapsed ? "" : darkMode ? "Dark Mode" : "Light Mode"}
		</Button>
	);
}
