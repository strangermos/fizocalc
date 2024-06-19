import { Layout, Spin} from 'antd';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';

export default function AppLayout() {
    const {loading} = useContext(CryptoContext)

    if (loading) {
        return <Spin fullscreen/>
    }

    return (
        <Layout>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </Layout>
    )
}