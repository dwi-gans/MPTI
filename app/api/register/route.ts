import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { nama, nomorHp, email, password } = await req.json();

  if (!nama || !nomorHp || !email || !password) {
    return NextResponse.json({ error: 'Semua field wajib diisi' }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: 'Email sudah terdaftar' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      nama,
      nomorHp,
      email,
      password: hashedPassword,
      role: 'user',
    },
  });

  return NextResponse.json({ user });
}
