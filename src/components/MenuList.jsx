
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreAddOutlined,
  AreaChartOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
   
    <Menu.Item key="home" icon={<HomeOutlined />} >   
    <Link to={`/home`}> Home </Link>
      </Menu.Item>
   


 <Menu.Item key="activity" icon={<AppstoreAddOutlined />}>
 <Link to={`/activity`}>  Activity </Link>
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
