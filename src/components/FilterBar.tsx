'use client';

import { useState, useEffect, useRef } from 'react';
import { X, MapPin, Building2, Lightbulb, Users, MessageSquare, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterCategory {
  id: string;
  label: string;
  icon: any;
  options: {
    id: string;
    label: string;
  }[];
}

interface FilterBarProps {
  selectedFilters: string[];
  setSelectedFilters: (filters: string[]) => void;
}

const filterCategories: FilterCategory[] = [
  {
    id: 'field',
    label: '団体分野',
    icon: Lightbulb,
    options: [
      { id: 'キャリア', label: 'キャリア' },
      { id: 'ビジネス', label: 'ビジネス' },
      { id: '環境', label: '環境' },
      { id: '教育', label: '教育' },
      { id: '国際', label: '国際' },
    ]
  },
  {
    id: 'activity',
    label: '活動ジャンル',
    icon: Users,
    options: [
      { id: 'イベント', label: 'イベント' },
      { id: 'ボランティア', label: 'ボランティア' },
      { id: 'スポーツ', label: 'スポーツ' },
    ]
  },
  {
    id: 'university',
    label: '大学orインカレ',
    icon: Building2,
    options: [
      { id: '特定の大学', label: '特定の大学' },
      { id: 'インカレ', label: 'インカレ' },
    ]
  },
  {
    id: 'area',
    label: '活動地域',
    icon: MapPin,
    options: [
      { id: '全国', label: '全国' },
      { id: '各地方', label: '各地方' },
    ]
  },
  {
    id: 'style',
    label: '活動スタイル',
    icon: MessageSquare,
    options: [
      { id: 'オンライン', label: 'オンライン' },
      { id: 'オフライン', label: 'オフライン' },
      { id: 'ハイブリッド', label: 'ハイブリッド' },
    ]
  },
];

const FilterBar = ({ selectedFilters, setSelectedFilters }: FilterBarProps) => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const filterRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activePopup) {
        const activeFilterRef = filterRefs.current[activePopup];
        if (activeFilterRef && !activeFilterRef.contains(event.target as Node)) {
          setActivePopup(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePopup]);

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setActivePopup(null);
  };

  // 各カテゴリーの選択数を計算する関数
  const getSelectedCount = (categoryId: string) => {
    const category = filterCategories.find(cat => cat.id === categoryId);
    if (!category) return 0;
    return category.options.filter(option => selectedFilters.includes(option.id)).length;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-b relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <motion.div
            className="flex items-center space-x-4"
            animate={{ x: selectedFilters.length > 0 ? 0 : -10 }}
          >
            <span className="text-sm text-gray-600">
              {selectedFilters.length}件のフィルターが適用中
            </span>
            <AnimatePresence>
              {selectedFilters.length > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={clearFilters}
                  className="text-sm text-primary hover:text-primary-dark flex items-center transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-4 h-4 mr-1" />
                  すべてクリア
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="flex flex-wrap gap-4">
          {filterCategories.map((category) => {
            const Icon = category.icon;
            const selectedCount = getSelectedCount(category.id);
            const hasSelectedOptions = selectedCount > 0;
            return (
              <div 
                key={category.id} 
                className="relative"
                ref={el => filterRefs.current[category.id] = el}
              >
                <motion.button
                  onClick={() => setActivePopup(activePopup === category.id ? null : category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm border transition-all duration-200 relative
                    ${hasSelectedOptions
                      ? 'bg-primary text-white border-primary shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary hover:shadow-sm'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className={`w-4 h-4 mr-2 ${hasSelectedOptions ? 'text-white' : ''}`} />
                  <span>{category.label}</span>
                  {selectedCount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary-dark text-white text-xs flex items-center justify-center ${hasSelectedOptions ? 'border border-white' : ''}`}
                    >
                      {selectedCount}
                    </motion.div>
                  )}
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${activePopup === category.id ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {activePopup === category.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200"
                    >
                      {category.options.map((option) => {
                        const isSelected = selectedFilters.includes(option.id);
                        return (
                          <motion.button
                            key={option.id}
                            onClick={() => toggleFilter(option.id)}
                            className={`w-full px-4 py-2 text-sm text-left transition-colors duration-200 flex items-center justify-between
                              ${isSelected ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'}`}
                            whileHover={{ x: 5 }}
                          >
                            <span>{option.label}</span>
                            {isSelected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 rounded-full bg-primary"
                              />
                            )}
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default FilterBar; 