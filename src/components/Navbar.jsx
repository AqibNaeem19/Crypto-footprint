import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
  const { Title } = Typography
  const { Item } = Menu
  return (
    <div className='nav-container'>
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Title level={2} className="logo" >
          <Link to="/">Crypto</Link>
        </Title>

      </div>
      <Menu theme="dark">
        <Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Crypto Coins</Link>
        </Item>
        <Item icon={<MoneyCollectOutlined />}>
          <Link to="/cryptoexchanges">Exchanges</Link>
        </Item>
        <Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Item>
      </Menu>
    </div>
  )
}

export default Navbar
