'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, MapPin, Calendar, Users, Globe, Link as LinkIcon } from 'lucide-react';

// 仮のデータ型定義
interface Group {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  genre: string;
  university: string;
  region: string;
  establishedYear: number;
  memberCount: number;
  activityFrequency: string;
  communicationMethod: string;
  sns: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    website?: string;
  };
  keywords: string[];
  leader: {
    name: string;
    description: string;
  };
  activities: {
    description: string;
    images: string[];
  }[];
  mission: string;
  vision: string;
  value: string;
  messageToCompanies: string;
}

export default function GroupDetailPage({ params }: { params: { id: string } }) {
  const [group, setGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: 実際のAPIからデータを取得
    const fetchGroup = async () => {
      try {
        // 仮のデータ
        const mockGroup: Group = {
          id: '1',
          name: 'サークルA',
          description: 'サークルAの説明文です。活動内容や目的について詳しく説明します。',
          image: 'https://placehold.co/600x400',
          category: 'キャリア・ビジネス系',
          genre: 'イベント運営系',
          university: '東京大学',
          region: '東京都',
          establishedYear: 2020,
          memberCount: 30,
          activityFrequency: '週1回',
          communicationMethod: 'Slack, Zoom',
          sns: {
            twitter: 'https://twitter.com/example',
            instagram: 'https://instagram.com/example',
            website: 'https://example.com'
          },
          keywords: ['プログラミング', 'AI', 'Web開発', 'モバイルアプリ'],
          leader: {
            name: '山田太郎',
            description: 'テクノロジーに情熱を持つ学生リーダーです。'
          },
          activities: [
            {
              description: '月に1回、週末にハッカソンを開催しています。',
              images: [
                'https://placehold.co/400x300?text=ハッカソン1',
                'https://placehold.co/400x300?text=ハッカソン2',
                'https://placehold.co/400x300?text=ハッカソン3'
              ]
            },
            {
              description: '週1回、最新のテクノロジーについて学ぶ勉強会を開催しています。',
              images: [
                'https://placehold.co/400x300?text=勉強会1',
                'https://placehold.co/400x300?text=勉強会2'
              ]
            }
          ],
          mission: 'テクノロジーを通じて社会に貢献する',
          vision: '日本を代表する学生テックコミュニティになる',
          value: 'チャレンジ精神、協調性、リーダーシップ',
          messageToCompanies: '学生の新しいアイデアと企業の知見を組み合わせ、革新的なプロジェクトを生み出したいと考えています。'
        };
        setGroup(mockGroup);
      } catch (error) {
        console.error('Error fetching group:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroup();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">団体が見つかりませんでした</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="relative h-96">
        <Image
          src={group.image}
          alt={group.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <motion.button
            onClick={() => window.history.back()}
            className="absolute top-4 left-4 flex items-center text-white hover:text-gray-200 transition-colors"
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            {group.name}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* ヘッダー部分 */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold text-gray-900">{group.name}</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{group.description}</p>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 左カラム */}
          <div className="lg:col-span-2 space-y-6">
            {/* 活動目的セクション */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">活動目的</h2>
              <div className="space-y-6">
                {group.mission ? (
                  <p className="text-gray-600">{group.mission}</p>
                ) : (
                  <p className="text-gray-600">この団体の活動目的についての情報は現在準備中です。</p>
                )}
              </div>
            </motion.div>

            {/* 活動内容 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white shadow sm:rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">活動内容</h2>
              {group.activities.map((activity, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{activity.description}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activity.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`活動写真 ${imgIndex + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* 代表紹介 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow sm:rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">代表紹介</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">{group.leader.name}</h3>
                <p className="text-gray-600">{group.leader.description}</p>
              </div>
            </motion.div>

            {/* 企業向けメッセージ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white shadow sm:rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">企業向けメッセージ</h2>
              <p className="text-gray-600">{group.messageToCompanies}</p>
            </motion.div>
          </div>

          {/* 右カラム */}
          <div className="space-y-6">
            {/* 基本情報 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white shadow sm:rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">基本情報</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">分野</dt>
                  <dd className="mt-1 text-sm text-gray-900">{group.category}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">活動ジャンル</dt>
                  <dd className="mt-1 text-sm text-gray-900">{group.genre}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">所属大学</dt>
                  <dd className="mt-1 text-sm text-gray-900">{group.university}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">地域</dt>
                  <dd className="mt-1 text-sm text-gray-900 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {group.region}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">設立年</dt>
                  <dd className="mt-1 text-sm text-gray-900 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {group.establishedYear}年
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">メンバー数</dt>
                  <dd className="mt-1 text-sm text-gray-900 flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {group.memberCount}人
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">活動頻度</dt>
                  <dd className="mt-1 text-sm text-gray-900">{group.activityFrequency}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">コミュニケーション手段</dt>
                  <dd className="mt-1 text-sm text-gray-900">{group.communicationMethod}</dd>
                </div>
              </dl>
            </motion.div>

            {/* SNS情報 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white shadow sm:rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">SNS</h2>
              <div className="space-y-2">
                {group.sns.twitter && (
                  <a
                    href={group.sns.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-600"
                  >
                    <LinkIcon className="h-4 w-4 mr-1" />
                    Twitter
                  </a>
                )}
                {group.sns.instagram && (
                  <a
                    href={group.sns.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-500 hover:text-pink-600"
                  >
                    <LinkIcon className="h-4 w-4 mr-1" />
                    Instagram
                  </a>
                )}
                {group.sns.website && (
                  <a
                    href={group.sns.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-500 hover:text-gray-600"
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    公式サイト
                  </a>
                )}
              </div>
            </motion.div>

            {/* キーワード */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow sm:rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">キーワード</h2>
              <div className="flex flex-wrap gap-2">
                {group.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}