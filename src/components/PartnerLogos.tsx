'use client';

import Image from 'next/image';
import { useState } from 'react';

const partners = [
  { id: 1, name: '株式会社リクルート', logo: '/images/company_logo/recruite.png', description: 'テクノロジー企業' },
  { id: 2, name: '株式会社メルカリ', logo: '/images/company_logo/merucari.png', description: '教育企業' },
  { id: 3, name: '株式会社DeNA', logo: '/images/company_logo/DeNA.png', description: '環境企業' },
  // 他のパートナー企業を追加
];

const PartnerLogos = () => {
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  return (
    <div className="bg-white py-4 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          パートナー企業
        </h2>
        <div className="relative">
          <div className="flex space-x-8 overflow-x-auto pb-4 justify-center">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="relative group"
                onMouseEnter={() => setHoveredPartner(partner.id)}
                onMouseLeave={() => setHoveredPartner(null)}
              >
                <div className="w-32 h-16 relative">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                {hoveredPartner === partner.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                    <p className="font-bold">{partner.name}</p>
                    <p>{partner.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos; 