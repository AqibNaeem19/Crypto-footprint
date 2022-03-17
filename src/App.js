import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {
	Navbar,
	Homepage,
	Exchanges,
	Cryptocurrencies,
	CryptoDetails,
	News
} from './components/index'
import './styles/App.css'

const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>

			<div className="main">
				<Layout>
					<div className="routes">

						<Routes>
							<Route exact path="/" element={<Homepage />} />
							<Route exact path="/cryptoexchanges" element={<Exchanges />} />
							<Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
							<Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
							<Route exact path="/news" element={<News />} />
						</Routes>

					</div>
				</Layout>
			</div>
			
			<div className="footer">

			</div>

		</div>
	)
}

export default App