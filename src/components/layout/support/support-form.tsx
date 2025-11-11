// components/support-form.tsx
'use client'

import { Button, Card } from 'antd'

interface ISupportFormProps {
	onCancel?: () => void
}

export const SupportForm = ({ onCancel }: ISupportFormProps) => {
	const supportLink =
		'https://vtb.paymo.ru/collect-money/qr/?transaction=cdeb25ed-0157-4239-8009-3f0d550367ef'

	return (
		<Card
			title='Финансовая поддержка'
			style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}
		>
			<div style={{ textAlign: 'center', padding: '16px 0' }}>
				<div style={{ marginBottom: '20px' }}>
					<p style={{ color: '#666', lineHeight: '1.5' }}>
						Помогите покрыть расходы на разработку и хостинг
					</p>
				</div>

				<div
					style={{
						backgroundColor: '#f8f9fa',
						padding: '20px',
						borderRadius: '8px',
						marginBottom: '20px',
					}}
				>
					<div style={{ textAlign: 'center', marginBottom: '16px' }}>
						<img
							src='/qr-code.jpeg'
							alt='QR код для поддержки проекта'
							width={200}
							height={200}
							style={{ margin: '0 auto', borderRadius: '8px' }}
						/>
					</div>
					<Button
						type='primary'
						style={{ width: '100%', height: '40px' }}
						onClick={() => window.open(supportLink, '_blank')}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '8px',
							}}
						>
							<svg
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
							>
								<rect x='1' y='4' width='22' height='16' rx='2' ry='2'></rect>
								<line x1='1' y1='10' x2='23' y2='10'></line>
							</svg>
							Поддержать
						</div>
					</Button>
				</div>

				<Button type='default' style={{ width: '100%' }} onClick={onCancel}>
					Закрыть
				</Button>
			</div>
		</Card>
	)
}
