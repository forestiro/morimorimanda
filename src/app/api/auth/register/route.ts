import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, university, faculty, department } = body;

    // TODO: ここに実際のデータベース処理を実装
    // 現時点ではダミーのレスポンスを返す
    return NextResponse.json(
      { message: '登録が完了しました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: '登録に失敗しました' },
      { status: 500 }
    );
  }
} 