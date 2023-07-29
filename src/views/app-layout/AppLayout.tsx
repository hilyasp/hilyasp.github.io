import { Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { createContext } from "preact";
import { useState } from "preact/hooks";
import { AppHeader } from "../app-header/AppHeader";
import { AppContent } from "../content/AppContent";
import { AppSider } from "./AppSider";

export const AppSiderCollapsedContext = createContext({ collapsed: false });

export function AppLayout() {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout>
			<Header style={{ background: colorBgContainer }}>
				<AppHeader />
			</Header>

			<Layout>
				<Sider
					collapsible
					style={{ background: colorBgContainer }}
					collapsedWidth="10%"
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
				>
					<AppSiderCollapsedContext.Provider value={{ collapsed }}>
						<AppSider />
					</AppSiderCollapsedContext.Provider>
				</Sider>
				<Layout class="p-4">
					<Content class="p-20">
						<div class="h-screen">
							<AppContent />
						</div>
					</Content>
				</Layout>
			</Layout>
			<Footer>
				<div class="text-center">Footer</div>
			</Footer>
		</Layout>
	);
}

