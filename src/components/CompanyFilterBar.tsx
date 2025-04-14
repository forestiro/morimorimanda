'use client';

import { motion } from 'framer-motion';

interface CompanyFilterBarProps {
  selectedFilters: string[];
  setSelectedFilters: (filters: string[]) => void;
}

const filterCategories = {
  industry: [
    'IT・テクノロジー',
    '金融',
    '不動産',
    '教育',
    'メディア',
    'コンサルティング',
  ],
  location: [
    '東京都',
    '大阪府',
    '愛知県',
    '福岡県',
    '北海道',
    'その他',
  ],
  supportType: [
    '金銭的支援',
    '技術支援',
    'メンタリング',
    '場所提供',
    'イベント協力',
  ],
  scale: [
    '大手企業',
    '中堅企業',
    'ベンチャー企業',
  ],
};

export default function CompanyFilterBar({
  selectedFilters,
  setSelectedFilters,
}: CompanyFilterBarProps) {
  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">業種</h3>
          <div className="flex flex-wrap gap-2">
            {filterCategories.industry.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedFilters.includes(filter)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">地域</h3>
          <div className="flex flex-wrap gap-2">
            {filterCategories.location.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedFilters.includes(filter)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">支援タイプ</h3>
          <div className="flex flex-wrap gap-2">
            {filterCategories.supportType.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedFilters.includes(filter)
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">企業規模</h3>
          <div className="flex flex-wrap gap-2">
            {filterCategories.scale.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedFilters.includes(filter)
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {selectedFilters.length > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-600 hover:text-gray-900"
          onClick={() => setSelectedFilters([])}
        >
          フィルターをクリア
        </motion.button>
      )}
    </div>
  );
} 