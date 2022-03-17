import React from 'react'
import { Button, Menu, Typography, Avator } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
  const { Title } = Typography
  return (
    <div classname="nav-container">
      <div classname="logo-container">
        <Avatar src={icon} size="large"/>
        <Title level={2} classname="logo" >
            <Link to="/">Crypto</Link>
        </Title>
        {/* <Button classname="menu-control-container">

        </Button> */}
      </div>
    </div>
  )
}

export default Navbar
