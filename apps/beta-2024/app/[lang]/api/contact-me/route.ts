import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const request = await req.json();
	const { name, email, subject, message } = request.body;

	const transporter = nodemailer.createTransport({
		host: "smtp.jliciaga.dev",
		port: 587,
		secure: false, // Use TLS
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	try {
		await transporter.sendMail({
			from: email,
			to: process.env.PERSONAL_EMAIL,
			subject: `${name}: ${subject}`,
			text: message,
		});

		return NextResponse.json({ status: "Email sent" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: "Email not sent" }, { status: 500 });
	}
}
