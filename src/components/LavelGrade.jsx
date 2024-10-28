import { Alert, Col, Row } from 'antd'

export default function LavelGrade({ title, description, typeColor }) {
	return (
		<>
			<Row
				gutter={[10, 0]}
				style={{
					width: '100%',
					paddingBottom: '10px',
				}}
			>
				<Col style={{}} span={18}>
					<Alert message={title} type={typeColor} />
				</Col>
				<Col
					style={{
						textAlign: 'center',
					}}
					span={6}
				>
					<Alert message={description} type={typeColor} />
				</Col>
			</Row>
		</>
	)
}
