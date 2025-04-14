'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Building2, CalendarDays, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: '学生団体を探す', icon: LayoutGrid, href: '/groups' },
    { name: '企業を探す', icon: Building2, href: '/companies' },
    { name: 'イベント', icon: CalendarDays, href: '/events' },
    { name: 'お気に入り', icon: Heart, href: '/favorites' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg pt-20">
      <div className="flex flex-col space-y-2 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative"
            >
              <motion.div
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                  ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-6 h-6" />
                <span className="font-medium">{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 