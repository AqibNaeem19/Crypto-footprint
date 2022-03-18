import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const Homepage = () => {
  return (
    <React.Fragment>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Cryptocurrencies" value="5" /></Col>
        <Col span={12}><Statistic title="Exchanges" value="5" /></Col>
        <Col span={12}><Statistic title="Market Cap" value="5" /></Col>
        <Col span={12}><Statistic title="24h Volume" value="5" /></Col>
        <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
      </Row>
    </React.Fragment>
  )
}

export default Homepage