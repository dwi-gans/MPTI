import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: Request) {
  const cookie = req.headers.get('cookie') || '';
  const token = cookie
    .split('; ')
    .find((row) => row.startsWith('token='))
    ?.split('=')[1];

  if (!token) {
    return NextResponse.json({ isLoggedIn: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.json({ isLoggedIn: true, user: decoded });
  } catch (err) {
    return NextResponse.json({ isLoggedIn: false });
  }
}
