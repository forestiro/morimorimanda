'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, MapPin, Users, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Group {
  id: string;
  name: string;
  description: string;
  image: string;
  university: string;
  area: string;
  field: string;
  genre: string;
  universityType: string;
  activityArea: string;
  activityStyle: string;
  memberCount: number;
  establishedYear: number;
  activities: {
    title: string;
    description: string;
    images: string[];
  }[];
  mission: string;
  vision: string;
  value: string;
  activityDetails: string;
  activityPhilosophy: string;
}

export default function GroupDetailPage() {
  const { id } = useParams();
  const [group, setGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 仮のデータフェッチ
    const fetchGroup = async () => {
      // APIができるまでのモックデータ
      const mockGroup: Group = {
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
        establishedYear: 2020,
        activities: [
          {
            title: 'プログラミング勉強会',
            description: '週1回のプログラミング勉強会を開催しています。初心者から上級者まで、レベルに合わせて学べる環境を用意しています。',
            images: ['/images/icon/preview_2025-03-29_17.49.17.png', '/images/icon/preview_2025-03-29_17.49.20.png', '/images/icon/preview_2025-03-29_17.49.26.png']
          },
          {
            title: 'ハッカソンイベント',
            description: '月1回のハッカソンイベントを開催し、実践的なプロジェクト開発を行っています。',
            images: ['/images/icon/preview_2025-03-29_17.49.33.png', '/images/icon/preview_2025-03-29_17.49.36.png']
          }
        ],
        mission: '技術を通じて社会に貢献する人材を育成する',
        vision: '日本のIT教育を変革する',
        value: '常に学び続ける姿勢を大切にする',
        activityDetails: '週1回のプログラミング勉強会、月1回のハッカソンイベント、オンラインでの日常的な情報共有など、活発に活動しています。',
        activityPhilosophy: '「楽しみながら学ぶ」をモットーに、気軽に参加できる雰囲気づくりを心がけています。'
      };

      setGroup(mockGroup);
      setLoading(false);
    };

    fetchGroup();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!group) {
    return <div>Group not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー画像とタイトル */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[300px] w-full"
      >
        <Image
          src={group.image}
          alt={group.name}
          fill
          className="object-cover"
        />
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 left-4"
        >
          <Link href="/groups" className="flex items-center text-white bg-black/50 px-4 py-2 rounded-full hover:bg-black/70 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            戻る
          </Link>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* メインコンテンツ（左側2/3） */}
          <div className="lg:col-span-2">
            {/* 団体名と説明 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-sm mb-8"
            >
              <h1 className="text-3xl font-bold mb-4">{group.name}</h1>
              <p className="text-gray-600">{group.description}</p>
            </motion.div>

            {/* 活動内容 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-sm mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">活動内容</h2>
              <p className="text-gray-600 mb-8">{group.activityDetails}</p>
              
              <div className="space-y-8">
                {group.activities.map((activity, index) => (
                  <motion.div 
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    <h3 className="text-xl font-semibold mb-4">{activity.title}</h3>
                    <p className="text-gray-600 mb-6">{activity.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {group.activities.map((activity) => 
                  activity.images.map((img, imgIndex) => (
                    <motion.div 
                      key={imgIndex}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * imgIndex }}
                      whileHover={{ scale: 1.05 }}
                      className="relative h-40 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`Activity image ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>

            {/* 活動理念 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg p-8 shadow-sm mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">活動目的</h2>
              <p className="text-gray-600 mb-8">{group.activityPhilosophy}</p>
            </motion.div>

            {/* MVV */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-6">MVV</h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Mission</h3>
                  <p className="text-gray-600">{group.mission}</p>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Vision</h3>
                  <p className="text-gray-600">{group.vision}</p>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Value</h3>
                  <p className="text-gray-600">{group.value}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* 団体概要（右側1/3） */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg p-8 shadow-sm sticky top-8">
              <h2 className="text-2xl font-bold mb-6">団体概要</h2>
              <div className="space-y-4">
                {[
                  { icon: Building2, label: '所属大学', value: group.university },
                  { icon: MapPin, label: '活動エリア', value: group.activityArea },
                  { icon: Users, label: 'メンバー数', value: `${group.memberCount}人` },
                  { icon: Calendar, label: '設立年', value: `${group.establishedYear}年` }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                    className="flex items-center text-gray-600"
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    <span>{item.label}：{item.value}</span>
                  </motion.div>
                ))}
                
                {[
                  { label: '分野', value: group.field },
                  { label: 'ジャンル', value: group.genre },
                  { label: '大学形態', value: group.universityType },
                  { label: '活動形態', value: group.activityStyle }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                    className={index === 0 ? "pt-4 border-t" : ""}
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}