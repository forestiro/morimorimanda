'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Users, Lightbulb, Building2, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export interface GroupCardProps {
  id: string | number;
  name: string;
  description: string;
  image: string;
  university: string;
  area: string;
  field: string;
  activityStyle: string;
}

const GroupCard = ({
  id,
  name,
  description,
  image,
  university,
  area,
  field,
  activityStyle,
}: GroupCardProps) => {
  return (
    <Link href={`/groups/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 cursor-pointer"
      >
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-500">
              <Building2 className="w-4 h-4 mr-2 text-primary" />
              <span>{university}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              <span>{area}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Lightbulb className="w-4 h-4 mr-2 text-primary" />
              <span>{field}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MessageSquare className="w-4 h-4 mr-2 text-primary" />
              <span>{activityStyle}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default GroupCard; 