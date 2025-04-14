'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import GroupCard from '@/components/GroupCard';

const mockGroups = [
  {
    id: '1',
    name: 'テックサークル',
    description: '最新のテクノロジーについて学び、プロジェクトを通じて実践的なスキルを身につけるサークルです。',
    image: '/images/icon/preview_2025-03-29_17.49.17.png',
    university: '東京大学',
    area: '関東',
    field: 'IT・テクノロジー',
    genre: 'プロジェクト',
    universityType: '特定の大学',
    activityArea: '関東',
    activityStyle: 'ハイブリッド',
    memberCount: 50,
    establishedYear: 2020
  },
  {
    id: '2',
    name: 'ビジネス研究会',
    description: 'ビジネスケースの分析やスタートアップの立ち上げなど、実践的なビジネススキルを学ぶ団体です。',
    image: '/images/icon/preview_2025-03-29_17.49.20.png',
    university: '慶應義塾大学',
    area: '関東',
    field: 'ビジネス',
    genre: '研究',
    universityType: '特定の大学',
    activityArea: '関東',
    activityStyle: 'オフライン',
    memberCount: 30,
    establishedYear: 2019
  },
  {
    id: '3',
    name: '国際交流サークル',
    description: '留学生との交流を通じて異文化理解を深め、グローバルな視点を養うサークルです。',
    image: '/images/icon/preview_2025-03-29_17.49.26.png',
    university: 'インカレサークル',
    area: '関東',
    field: '国際',
    genre: 'コミュニティ',
    universityType: 'インカレ',
    activityArea: '関東',
    activityStyle: 'ハイブリッド',
    memberCount: 100,
    establishedYear: 2018
  }
];

const filterOptions = {
  field: ['すべて', 'IT・テクノロジー', 'ビジネス', '環境', '教育', '国際', 'スポーツ', '文化・芸術'],
  genre: ['すべて', 'イベント', 'ボランティア', 'プロジェクト', '研究', 'コミュニティ'],
  universityType: ['すべて', '特定の大学', 'インカレ'],
  activityArea: ['すべて', '全国', '北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州'],
  activityStyle: ['すべて', 'オンライン', 'オフライン', 'ハイブリッド']
};

export default function GroupsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    field: 'すべて',
    genre: 'すべて',
    universityType: 'すべて',
    activityArea: 'すべて',
    activityStyle: 'すべて'
  });

  const filteredGroups = useMemo(() => {
    return mockGroups.filter(group => {
      const matchesSearch = !searchQuery || 
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesField = filters.field === 'すべて' || group.field === filters.field;
      const matchesGenre = filters.genre === 'すべて' || group.genre === filters.genre;
      const matchesUniversityType = filters.universityType === 'すべて' || group.universityType === filters.universityType;
      const matchesActivityArea = filters.activityArea === 'すべて' || group.activityArea === filters.activityArea;
      const matchesActivityStyle = filters.activityStyle === 'すべて' || group.activityStyle === filters.activityStyle;

      return matchesSearch && matchesField && matchesGenre && 
             matchesUniversityType && matchesActivityArea && matchesActivityStyle;
    });
  }, [searchQuery, filters]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-6">学生団体一覧</h1>
        
        <div className="space-y-4 mb-6">
          {/* 検索バー */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="団体名、説明で検索"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* フィルターセクション */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 団体分野 */}
            <div>
              <label htmlFor="field" className="block text-sm font-medium text-gray-700 mb-1">
                団体分野
              </label>
              <select
                id="field"
                value={filters.field}
                onChange={(e) => handleFilterChange('field', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {filterOptions.field.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* 活動ジャンル */}
            <div>
              <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
                活動ジャンル
              </label>
              <select
                id="genre"
                value={filters.genre}
                onChange={(e) => handleFilterChange('genre', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {filterOptions.genre.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* 大学orインカレ */}
            <div>
              <label htmlFor="universityType" className="block text-sm font-medium text-gray-700 mb-1">
                大学orインカレ
              </label>
              <select
                id="universityType"
                value={filters.universityType}
                onChange={(e) => handleFilterChange('universityType', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {filterOptions.universityType.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* 活動地域 */}
            <div>
              <label htmlFor="activityArea" className="block text-sm font-medium text-gray-700 mb-1">
                活動地域
              </label>
              <select
                id="activityArea"
                value={filters.activityArea}
                onChange={(e) => handleFilterChange('activityArea', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {filterOptions.activityArea.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* 活動スタイル */}
            <div>
              <label htmlFor="activityStyle" className="block text-sm font-medium text-gray-700 mb-1">
                活動スタイル
              </label>
              <select
                id="activityStyle"
                value={filters.activityStyle}
                onChange={(e) => handleFilterChange('activityStyle', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {filterOptions.activityStyle.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>

      {filteredGroups.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          検索条件に一致する団体が見つかりませんでした。
        </div>
      )}
    </div>
  );
} 