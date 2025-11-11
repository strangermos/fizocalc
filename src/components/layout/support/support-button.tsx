// src/components/support/support-button.jsx
import { CreditCard } from 'lucide-react'
import { useSupportModal } from '../../../hooks/use-support-modal'
// УДАЛИТЬ эту строку:
import './SupportButton.css'

export const SupportButton = () => {
	const { open } = useSupportModal()

	return (
		<div onClick={open} className='support-button'>
			<CreditCard size={20} />
			<span className='support-text'>Поддержать</span>
		</div>
	)
}
