import React from "react";
import Aux from "../../containers/hoc/Aux";
import "./Layout.css";
const Layout = props => (
  <Aux>
    <div>ToolBar,SideDrawer</div>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default Layout;
