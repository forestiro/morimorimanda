'use client';

import Link from 'next/link';
import { Search, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UserIcon from '@/components/UserIcon';

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 bg-white border-b z-50 backdrop-blur-sm bg-white/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center group">
            <motion.span
              className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Japan Student Partners
            </motion.span>
          </Link>

          {/* 検索バー */}
          <motion.form
            onSubmit={handleSearch}
            className="flex-1 max-w-2xl mx-8"
            animate={{ scale: isSearchFocused ? 1.02 : 1 }}
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="大学名、団体名、キーワードで検索"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </motion.form>

          {/* ユーザーメニュー */}
          <div className="flex items-center space-x-4">
            <motion.button
              className="p-2 hover:bg-gray-100 rounded-full relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-primary rounded-full"></span>
            </motion.button>
            <Link href="/user">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                <UserIcon />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 