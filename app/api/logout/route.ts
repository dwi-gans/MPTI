import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logout berhasil' });

  // Ini akan menghapus cookie token dengan menyetelnya ke kosong dan expired
  response.cookies.set('token', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0), // agar langsung kedaluwarsa
  });

  return response;
}
