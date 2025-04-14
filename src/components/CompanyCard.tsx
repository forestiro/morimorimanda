'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CompanyCardProps {
  id: number;
  name: string;
  description: string;
  logo: string;
  industry: string;
  location: string;
  supportType: string;
  scale: string;
}

export default function CompanyCard({
  id,
  name,
  description,
  logo,
  industry,
  location,
  supportType,
  scale,
}: CompanyCardProps) {
  return (
    <Link href={`/companies/${id}`}>
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-48 bg-gray-100">
          <Image
            src={logo}
            alt={`${name}のロゴ`}
            fill
            className="object-contain p-4"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {industry}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              {location}
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              {supportType}
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              {scale}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
} 