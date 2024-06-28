import ShineBorderComponent from '@magicui/ShineBorder'
import React from 'react'

interface ShindeBorderProps {
	children: React.ReactNode
}

export function ShineBorder({ children }: ShindeBorderProps) {
	return (
		<ShineBorderComponent className="capitalize" color={['#A07CFE', '#FE8FB5', '#FFBE7B']}>
			{children}
		</ShineBorderComponent>
	)
}
