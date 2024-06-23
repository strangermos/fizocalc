import { Flex, Layout } from 'antd';
import getFontSizes from 'antd/es/theme/themes/shared/genFontSizes';

const headerStyle = {
  color: '#000',
  height: 80,
  backgroundColor: '#fff',
  // borderBottomStyle: 'solid',
  // borderBottomColor: '#999',
  // borderBottomWidth: '1px',
  padding: '1rem',
  paddingTop: 0,
};
const container = {
  maxWidth: '1100px',
  boxSizing: 'content-box',
  marginTop: 0, 
  marginBottom: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  height: 80,
  display: 'flex',
};
const buttonFizo = {
  backgroundColor: '#000',
  color: '#fff',
  height: '100%',
  fontSize: 48,
  fontWeight: 'bold',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '120px'
}
const buttonCalc = {
  color: '#000',
  height: '100%',
  fontSize: 48,
  fontWeight: 'bold',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '110px'
}

export default function AppHeader() {
    return (
      <Layout.Header style={headerStyle}>
        <a href="/" style={ container }>
            <div style={buttonFizo} translate='no'>
              FIZO
            </div>
            <div style={buttonCalc} translate='no'>
              Calc
            </div>

        </a>
      </Layout.Header>
    )
}