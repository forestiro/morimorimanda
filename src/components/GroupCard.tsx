'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Building2, Globe2, Users } from 'lucide-react';
import Link from 'next/link';

export interface GroupCardProps {
  id: string | number;
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
}

const GroupCard = ({
  id,
  name,
  description,
  image,
  university,
  area,
  field,
  genre,
  universityType,
  activityArea,
  activityStyle,
}: GroupCardProps) => {
  return (
    <Link href={`/groups/${id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full border border-gray-100"
      >
        <div className="relative h-48">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-500">
              <Building2 className="w-4 h-4 mr-2 text-primary" />
              <span>{university}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              <span>{activityArea}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Globe2 className="w-4 h-4 mr-2 text-primary" />
              <span>{field}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="w-4 h-4 mr-2 text-primary" />
              <span>{activityStyle}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default GroupCard; 