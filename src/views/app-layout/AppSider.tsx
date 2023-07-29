import {
	AppstoreOutlined,
	InfoCircleOutlined,
	MailOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useContext, useState } from "react";
import { AppSiderCollapsedContext } from "./AppLayout";
import { ToggleTheme } from "./ToggleTheme";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: any,
	key: string | number,
	icon?: any,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("About", "sub1", <InfoCircleOutlined />, [
		getItem("Artist", "1"),
		getItem("Site", "2"),
	]),
	getItem("Commissions", "sub2", <AppstoreOutlined />, [
		getItem("Pricelist", "5"),
		getItem("Status", "6"),
		getItem("Submenu", "sub3", null, [
			getItem("Option 7", "7"),
			getItem("Option 8", "8"),
		]),
	]),
	getItem("Trades", "sub4", <AppstoreOutlined />, [
		getItem("Level", "9"),
		getItem("Status", "10"),
	]),
	getItem("Contact", "sub5", <MailOutlined />, [
		getItem("Socials", "11"),
		getItem("Mail", "12"),
	]),
];

export function AppSider() {
	const [openKeys, setOpenKeys] = useState(["sub1"]);
	const { collapsed } = useContext(AppSiderCollapsedContext);

	return (
		<div>
			<Menu
				mode="inline"
				openKeys={openKeys}
				onOpenChange={setOpenKeys}
				items={items}
				height="100hv"
				class="shadow-none"
			/>
			<div class={`p-3 flex ${collapsed ? "justify-center" : "justify-left"}`}>
				<ToggleTheme />
			</div>
		</div>
	);
}
