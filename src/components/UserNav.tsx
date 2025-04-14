'use client';

import { Bell, User } from 'lucide-react';

export default function UserNav() {
  return (
    <div className="fixed top-4 right-4 flex items-center space-x-4 z-50">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Bell className="w-6 h-6 text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <User className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
} 