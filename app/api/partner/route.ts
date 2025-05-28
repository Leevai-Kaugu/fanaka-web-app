// app/api/partner/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, phoneNumber, expectedReturn, loanAmount } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'levi@fanakatech.com',
      subject: 'New Message from Fanaka Website',
      text: `Investor Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nPotential percent return per annum expectation: ${expectedReturn}\nHow much as debt would they lend: ${loanAmount}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log();
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
