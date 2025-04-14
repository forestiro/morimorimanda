'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

// 日本の大学リスト（一部抜粋）
const universities = [
  '東京大学',
  '京都大学',
  '大阪大学',
  '名古屋大学',
  '東北大学',
  '九州大学',
  '北海道大学',
  '一橋大学',
  '東京工業大学',
  '早稲田大学',
  '慶應義塾大学',
  '上智大学',
  '明治大学',
  '立教大学',
  '中央大学',
  '法政大学',
  // 必要に応じて追加
];

interface UniversitySearchProps {
  onSelect: (university: string) => void;
}

export default function UniversitySearch({ onSelect }: UniversitySearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredUniversities, setFilteredUniversities] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filtered = universities.filter(uni =>
      uni.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUniversities(filtered);
  }, [searchTerm]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (university: string) => {
    setSearchTerm(university);
    onSelect(university);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="大学名を入力"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <AnimatePresence>
        {isOpen && filteredUniversities.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 w-full mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm"
          >
            {filteredUniversities.map((university) => (
              <motion.div
                key={university}
                whileHover={{ backgroundColor: '#F3F4F6' }}
                className="cursor-pointer select-none relative py-2 px-3"
                onClick={() => handleSelect(university)}
              >
                {university}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 