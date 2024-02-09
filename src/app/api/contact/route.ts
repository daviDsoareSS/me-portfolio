import { Email } from '@/sendEmail/email';
import { NextResponse } from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(request: Request) {
  const { name, subject } = await request.json();
  try{
    const data = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
      to: ['davidsoares2156@gmail.com'],
      subject: 'Bem vindo ai',
      react: Email({ name: name, subject: subject})
    })

    return NextResponse.json({ success: true, message: 'E-mail enviado com sucesso!' });
 
  } catch(error) {
    return NextResponse.json({ error });
  }
}