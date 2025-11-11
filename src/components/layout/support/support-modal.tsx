// src/components/support/support-modal.tsx
'use client'

import { Modal } from 'antd'
import { useSupportModal } from '../../../hooks/use-support-modal' // Исправленный путь
import { SupportForm } from './support-form'

export const SupportModal = () => {
	const { isOpen, close } = useSupportModal()

	return (
		<Modal
			open={isOpen}
			onCancel={close}
			footer={null}
			centered
			width={400}
			destroyOnClose
		>
			<SupportForm onCancel={close} />
		</Modal>
	)
}
