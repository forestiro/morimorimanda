'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Search, Bell, User } from 'lucide-react';
import Header from '@/components/Header';
import CompanyCard from '@/components/CompanyCard';
import CompanyFilterBar from '@/components/CompanyFilterBar';

// 仮の企業データ
const dummyCompanies = [
  {
    id: 1,
    name: '株式会社リクルート',
    description: '人材サービス、メディア事業を展開するテクノロジーカンパニー',
    logo: '/images/company_logo/recruite.png',
    industry: 'IT・テクノロジー',
    location: '東京都',
    supportType: '金銭的支援',
    scale: '大手企業',
  },
  {
    id: 2,
    name: '株式会社メルカリ',
    description: 'フリマアプリ「メルカリ」を運営するテックカンパニー',
    logo: '/images/company_logo/merucari.png',
    industry: 'IT・テクノロジー',
    location: '東京都',
    supportType: '技術支援',
    scale: '大手企業',
  },
  {
    id: 3,
    name: '株式会社DeNA',
    description: 'モバイル・インターネットサービスを展開する企業',
    logo: '/images/company_logo/DeNA.png',
    industry: 'IT・テクノロジー',
    location: '東京都',
    supportType: 'メンタリング',
    scale: '大手企業',
  },
  {
    id: 4,
    name: '株式会社LIFULL',
    description: '不動産情報サービスを提供する企業',
    logo: '/images/company_logo/lifull.png',
    industry: '不動産',
    location: '東京都',
    supportType: '場所提供',
    scale: '中堅企業',
  },
  {
    id: 5,
    name: 'サイボウズ株式会社',
    description: 'グループウェアを提供するITサービス企業',
    logo: '/images/company_logo/cybozu.png',
    industry: 'IT・テクノロジー',
    location: '大阪府',
    supportType: '技術支援',
    scale: '中堅企業',
  },
];

// フィルターオプション
const filterOptions = {
  industry: ['すべて', 'IT・通信', '不動産', '金融', '小売', '製造', 'サービス', '医療・福祉'],
  location: ['すべて', '東京都', '大阪府', '愛知県', '福岡県', '北海道', '宮城県', '広島県'],
  employeeCount: ['すべて', '300人未満', '300-1000人', '1000人以上'],
  type: ['すべて', '上場企業', '非上場企業', 'スタートアップ']
};

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    industry: 'すべて',
    location: 'すべて',
    employeeCount: 'すべて',
    type: 'すべて'
  });

  const filteredCompanies = useMemo(() => {
    return dummyCompanies.filter(company => {
      const matchesSearch = !searchQuery || 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesIndustry = filters.industry === 'すべて' || company.industry === filters.industry;
      const matchesLocation = filters.location === 'すべて' || company.location === filters.location;
      const matchesEmployeeCount = filters.employeeCount === 'すべて' || company.employeeCount === filters.employeeCount;
      const matchesType = filters.type === 'すべて' || company.type === filters.type;

      return matchesSearch && matchesIndustry && matchesLocation && 
             matchesEmployeeCount && matchesType;
    });
  }, [searchQuery, filters]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">応援企業一覧</h1>
          
          <div className="space-y-4 mb-6">
            {/* 検索バー */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="企業名、説明で検索"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* フィルターセクション */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 業界 */}
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                  業界
                </label>
                <select
                  id="industry"
                  value={filters.industry}
                  onChange={(e) => handleFilterChange('industry', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {filterOptions.industry.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* 所在地 */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  所在地
                </label>
                <select
                  id="location"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {filterOptions.location.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* 従業員数 */}
              <div>
                <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
                  従業員数
                </label>
                <select
                  id="employeeCount"
                  value={filters.employeeCount}
                  onChange={(e) => handleFilterChange('employeeCount', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {filterOptions.employeeCount.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* 企業タイプ */}
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  企業タイプ
                </label>
                <select
                  id="type"
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {filterOptions.type.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredCompanies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                選択されたフィルターに一致する企業が見つかりませんでした。
              </p>
              <p className="text-gray-400 mt-2">
                フィルターを変更して再度お試しください。
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredCompanies.map((company) => (
                <CompanyCard key={company.id} {...company} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 