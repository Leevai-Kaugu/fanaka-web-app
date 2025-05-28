import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name = 'N/A',
      email = 'N/A',
      phoneNumber = 'N/A',
      expectedReturn = 'N/A',
      loanAmount = 'N/A',
    } = body;

    // Validate required fields (optional)
    if (!name || !email || !phoneNumber || !expectedReturn || !loanAmount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

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
      to: 'info@fanakatech.com',
      subject: '📩 New Partner Application – Fanaka Website',
      text: `
Investor Name or Organization: ${name}
Email: ${email}
Phone Number: ${phoneNumber}
Expected Return (% p.a.): ${expectedReturn}
Debt Investment Amount (USD): ${loanAmount}
      `,
    });
    console.log(expectedReturn, loanAmount);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Email send error:', error.message || error);
    
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
