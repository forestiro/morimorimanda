import { NextResponse } from 'next/server';
import { client } from '@/lib/client';
import type { Group } from '@/types/microcms';

export async function GET() {
  try {
    const response = await client.getList<Group>({
      endpoint: 'groups',
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching groups:', error);
    return NextResponse.json(
      { error: 'Failed to fetch groups' },
      { status: 500 }
    );
  }
} 