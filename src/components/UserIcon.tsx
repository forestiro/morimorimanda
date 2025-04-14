'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function UserIcon() {
  const router = useRouter()

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.push('/user')}
      className="fixed top-20 right-4 z-50 cursor-pointer"
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
        <Image
          src="https://placehold.co/100x100?text=User"
          alt="ユーザーアイコン"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  )
} 