import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreAddOutlined,
  AreaChartOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import ReactIcon from '../assets/reactSVGicon/logo-react';
import ComponetIcon from '../assets/reactSVGicon/component-icon';
import { FiLayout, FiMinusSquare  } from "react-icons/fi";
import { GrInstallOption } from "react-icons/gr";

import { Link } from "react-router-dom";
import Installation from "../pages/Installation";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
                       mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to={`/home`}> Home </Link>
      </Menu.Item>
      <Menu.Item key="react" icon={<ReactIcon />}>
        <Link to={`/react-info`}> React কি? </Link>
      </Menu.Item>
      <Menu.Item key="ins" icon={<GrInstallOption />}>
        <Link to={`/installation`}> Installation </Link>
      </Menu.Item>
      {/* <Menu.Item key="component" icon={<ComponetIcon />}>
        <Link to={`/component`}> Component </Link>
      </Menu.Item> */}
      <Menu.SubMenu key="component" title="Component" icon={<ComponetIcon />}>
        <Menu.Item key="component-1">
        <Link to={`/component-short`}> সংক্ষেপ </Link>
          </Menu.Item>
          <Menu.Item key="component-2">
        <Link to={`/component-long`}> বিস্তারিত </Link>
          </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="jsx" icon={<FiLayout />}>
        <Link to={`/jsx`}> JSX </Link>
      </Menu.Item>
      <Menu.Item key="props" icon={<FiMinusSquare />}>
        <Link to={`/props`}> Props </Link>
      </Menu.Item>
      <Menu.SubMenu key="subtasks" title="Tasks" icon={<BarsOutlined />}>
        <Menu.Item key="task-1">Task 1</Menu.Item>
        <Menu.Item key="task-2">Task 2</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
