import { ConfigProvider, theme } from "antd";
import { Component, createContext } from "preact";
import ThemeSettings from "./assets/Ant Design Theme.json";
import { AppLayout } from "./views/app-layout/AppLayout";

export type Theme = "dark" | "light";

export const ThemeContext = createContext({
	theme: "dark" as Theme,
	setTheme: (theme: Theme) => {},
});

export class App extends Component {
	state = {
		theme: (window.matchMedia("(prefers-color-scheme: dark)")
			? "dark"
			: "light") as Theme,
	};

	render() {
		return (
			<ThemeContext.Provider
				value={{
					theme: this.state.theme,
					setTheme: (theme) => this.setState({ theme }),
				}}
			>
				<ConfigProvider
					theme={{
						...ThemeSettings,
						algorithm:
							this.state.theme == "dark"
								? theme.darkAlgorithm
								: theme.defaultAlgorithm,
					}}
				>
					<AppLayout />
				</ConfigProvider>
			</ThemeContext.Provider>
		);
	}
}
