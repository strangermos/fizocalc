import { Layout, Button, Form, Input, Select, Space, Col, Row } from 'antd';
import Typography from 'antd/es/typography/Typography';

const footerStyle = {
    textAlign: 'center',
    backgroundColor: '#fff',
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


export default function AppFooter() {
    return (
      <Layout.Footer style={footerStyle}>
      <div style={ container }>
      <Row>
      <Col span={4}>
      </Col>
        <Col span={16}>
          <a href="https://www.garant.ru/products/ipo/prime/doc/406972208/"
                    style={{
                      textAlign: 'center'
                    }}>        
            <Typography.Text

            >
              Приказ Министра обороны РФ от 20 апреля 2023 г. № 230 "Об утверждении Наставления по физической подготовке в Вооруженных Силах Российской Федерации"
            </Typography.Text>
          </a>
        </Col>
        <Col span={4}>
          <a href='mailto:fizocalc@mail.ru'>
          <img style={{
            width: 30,
            textAlign: 'center',
            marginRight: 10,
          }} src="/mail.png">
          </img>
          </a>
          <a href='https://t.me/+6txwtyawVv42ZDk6'>

                  <img style={{
            width: 30,
            textAlign: 'center',
            marginRight: 10,


          }} src="/telegram.png">

          </img>
        </a>
        </Col>
      </Row>
      </div>
      </Layout.Footer>
    )
}