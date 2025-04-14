'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import PartnerLogos from '@/components/PartnerLogos';
import FilterBar from '@/components/FilterBar';
import GroupCard from '@/components/GroupCard';
import UserIcon from '@/components/UserIcon'

const iconImages = [
  '/images/icon/union.jpg',
  '/images/icon/inno-meet.jpg',
  '/images/icon/プレビュー 2025-03-29 17.49.44.png',
  '/images/icon/プレビュー 2025-03-29 17.49.40.png',
  '/images/icon/プレビュー 2025-03-29 17.49.36.png',
  '/images/icon/プレビュー 2025-03-29 17.49.33.png',
  '/images/icon/プレビュー 2025-03-29 17.49.29.png',
  '/images/icon/プレビュー 2025-03-29 17.49.26.png',
  '/images/icon/プレビュー 2025-03-29 17.49.23.png',
  '/images/icon/プレビュー 2025-03-29 17.49.20.png',
  '/images/icon/プレビュー 2025-03-29 17.49.17.png',
  '/images/icon/プレビュー 2025-03-29 17.49.15.png',
];

// ランダムに画像を選択する関数
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * iconImages.length);
  return iconImages[randomIndex];
};

const dummyGroups = [
  {
    id: 1,
    name: '環境保護団体Eco',
    description: '持続可能な社会の実現に向けて、環境保護活動を行っています。',
    image: getRandomImage(),
    university: '東京大学',
    area: '全国',
    field: '環境',
    activityStyle: 'オンライン',
  },
  {
    id: 2,
    name: '国際交流サークル',
    description: '留学生との交流を通じて、グローバルな視点を養います。',
    image: getRandomImage(),
    university: 'インカレ',
    area: '各地方',
    field: '国際',
    activityStyle: 'ハイブリッド',
  },
  {
    id: 3,
    name: 'テック研究会',
    description: '最新のテクノロジーについて研究し、実践的なプロジェクトを行います。',
    image: getRandomImage(),
    university: '早慶（早稲田大学・慶應義塾大学）',
    area: '全国',
    field: 'キャリア',
    activityStyle: 'オフライン',
  },
  {
    id: 4,
    name: '福祉ボランティア',
    description: '地域の福祉施設でのボランティア活動を通じて、社会貢献を行います。',
    image: getRandomImage(),
    university: 'インカレ',
    area: '各地方',
    field: 'ボランティア',
    activityStyle: 'ハイブリッド',
  },
  {
    id: 5,
    name: '教育支援団体',
    description: '教育格差の解消を目指し、学習支援活動を展開しています。',
    image: getRandomImage(),
    university: 'MARCH（明治大学・青山学院大学）',
    area: '全国',
    field: '教育',
    activityStyle: 'オンライン',
  },
  {
    id: 6,
    name: '環境保護団体Eco',
    description: '持続可能な社会の実現に向けて、環境保護活動を行っています。',
    image: getRandomImage(),
    university: 'インカレ',
    area: '各地方',
    field: 'ビジネス',
    activityStyle: 'オフライン',
  },
  {
    id: 7,
    name: '国際交流サークル',
    description: '留学生との交流を通じて、グローバルな視点を養います。',
    image: getRandomImage(),
    university: '日東駒専（日本大学・東洋大学）',
    area: '全国',
    field: 'スポーツ',
    activityStyle: 'ハイブリッド',
  },
  {
    id: 8,
    name: 'テック研究会',
    description: '最新のテクノロジーについて研究し、実践的なプロジェクトを行います。',
    image: getRandomImage(),
    university: 'インカレ',
    area: '各地方',
    field: 'イベント',
    activityStyle: 'オンライン',
  },
];

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterGroups = () => {
    if (selectedFilters.length === 0) return dummyGroups;

    return dummyGroups.filter(group => {
      return selectedFilters.some(filter => 
        group.field === filter ||
        group.activityStyle === filter ||
        group.area === filter ||
        group.university === filter
      );
    });
  };

  const filteredGroups = filterGroups();

  return (
    <div className="min-h-screen bg-gray-50">
      <UserIcon />
      <Header />
      <PartnerLogos />
      <FilterBar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredGroups.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              選択されたフィルターに一致する団体が見つかりませんでした。
            </p>
            <p className="text-gray-400 mt-2">
              フィルターを変更して再度お試しください。
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group) => (
              <GroupCard key={group.id} {...group} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 