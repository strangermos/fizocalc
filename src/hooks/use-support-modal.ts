// hooks/use-support-modal.ts
'use client'

import { create } from 'zustand'

interface SupportModalStore {
	isOpen: boolean
	open: () => void
	close: () => void
}

export const useSupportModal = create<SupportModalStore>(set => ({
	isOpen: false,
	open: () => set({ isOpen: true }),
	close: () => set({ isOpen: false }),
}))
