import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const { Title } = Typography
const { Item } = Menu

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }

  }, [screenSize])

  return (
    <div className='nav-container'>
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Title level={2} className="logo" >
          <Link to="/">Crypto</Link>
        </Title>
        <button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </button>
      </div>

      {activeMenu && (
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
      )}

    </div>
  )
}

export default Navbar
