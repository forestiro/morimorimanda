'use client'

import { User } from 'lucide-react'

interface UserIconProps {
  className?: string;
}

export default function UserIcon({ className = '' }: UserIconProps) {
  return (
    <div className={`relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 ${className}`}>
      <User className="w-6 h-6 text-gray-600" />
    </div>
  )
} 