'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function UserPage() {
  const router = useRouter()

  // 仮のユーザーデータ
  const user = {
    name: '山田太郎',
    email: 'yamada@example.com',
    university: '東京大学',
    faculty: '工学部',
    department: '情報工学科',
    grade: '3年',
    image: 'https://placehold.co/200x200?text=User',
    joinedGroups: [
      {
        id: '1',
        name: 'サークルA',
        image: 'https://placehold.co/100x100?text=GroupA'
      },
      {
        id: '2',
        name: 'サークルB',
        image: 'https://placehold.co/100x100?text=GroupB'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={() => router.back()}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          戻る
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src={user.image}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h2 className="text-lg font-medium text-gray-900">基本情報</h2>
                <dl className="mt-2 space-y-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">大学</dt>
                    <dd className="text-sm text-gray-900">{user.university}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">学部</dt>
                    <dd className="text-sm text-gray-900">{user.faculty}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">学科</dt>
                    <dd className="text-sm text-gray-900">{user.department}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">学年</dt>
                    <dd className="text-sm text-gray-900">{user.grade}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900">所属団体</h2>
                <div className="mt-2 space-y-4">
                  {user.joinedGroups.map((group) => (
                    <motion.div
                      key={group.id}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                        <Image
                          src={group.image}
                          alt={group.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {group.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 