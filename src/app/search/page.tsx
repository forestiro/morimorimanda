'use client'

import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import GroupCard from '@/components/GroupCard'
import { useState, useEffect } from 'react'

// 仮のデータ
const mockGroups = [
  {
    id: '1',
    name: '技術革新サークル',
    description: 'テクノロジーを通じて社会に貢献する',
    image: 'https://placehold.co/600x400',
    university: '東京大学',
    area: '東京都',
    field: 'テクノロジー',
    activityStyle: 'オンライン',
    rating: 4.5,
    memberCount: 30
  },
  {
    id: '2',
    name: 'エコロジー推進団体',
    description: '環境問題に取り組む学生団体',
    image: 'https://placehold.co/600x400',
    university: '京都大学',
    area: '京都府',
    field: '環境',
    activityStyle: 'オフライン',
    rating: 4.2,
    memberCount: 25
  },
  {
    id: '3',
    name: 'グローバル交流会',
    description: '国際交流を促進する学生団体',
    image: 'https://placehold.co/600x400',
    university: '大阪大学',
    area: '大阪府',
    field: '国際',
    activityStyle: 'ハイブリッド',
    rating: 4.8,
    memberCount: 40
  },
  {
    id: '4',
    name: 'ビジネス研究会',
    description: '起業やビジネスについて学ぶ団体',
    image: 'https://placehold.co/600x400',
    university: '早稲田大学',
    area: '東京都',
    field: 'ビジネス',
    activityStyle: 'ハイブリッド',
    rating: 4.6,
    memberCount: 35
  },
  {
    id: '5',
    name: '地域活性化プロジェクト',
    description: '地域の課題解決に取り組む',
    image: 'https://placehold.co/600x400',
    university: '名古屋大学',
    area: '愛知県',
    field: '地域貢献',
    activityStyle: 'オフライン',
    rating: 4.4,
    memberCount: 28
  }
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [filteredGroups, setFilteredGroups] = useState(mockGroups)

  useEffect(() => {
    if (query) {
      const searchTerms = query.toLowerCase().split(/\s+/);
      const filtered = mockGroups.filter(group => {
        const searchableText = [
          group.name,
          group.description,
          group.university,
          group.field,
          group.area,
          group.activityStyle
        ].map(text => text.toLowerCase()).join(' ');
        
        return searchTerms.every(term => searchableText.includes(term));
      });
      setFilteredGroups(filtered);
    } else {
      setFilteredGroups(mockGroups);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>戻る</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              「{query}」の検索結果
            </h1>
          </div>
          <p className="text-gray-600">
            {filteredGroups.length}件の結果が見つかりました
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredGroups.map((group) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <GroupCard {...group} />
            </motion.div>
          ))}
        </motion.div>

        {filteredGroups.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600">
              検索条件に一致する結果が見つかりませんでした。
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
} 