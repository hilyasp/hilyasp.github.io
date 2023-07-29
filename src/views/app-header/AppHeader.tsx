import { Typography, theme } from "antd";
import logo from "../../assets/logo.svg";
const { Title } = Typography;

export function AppHeader() {
	const { token } = theme.useToken();

	return (
		<div class="flex justify-left px-4 py-2">
			<img
				src={logo}
				class="h-9 px-3"
				style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
			></img>
			<Title>Xiller228</Title>
		</div>
	);
}
