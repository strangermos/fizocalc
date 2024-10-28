import { Layout, Spin } from 'antd'
import { useContext } from 'react'
import CryptoContext from '../../context/crypto-context'
import AppContent from './AppContent'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'

export default function AppLayout() {
	const { loading } = useContext(CryptoContext)

	if (loading) {
		return <Spin fullscreen />
	}

	return (
		<Layout>
			<AppHeader />
			<AppContent />
			<AppFooter />
		</Layout>
	)
}
