import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactFormData = {
	name: string;
	email: string;
	phone: string;
	serviceType: string;
	message: string;
};

type ResponseData = {
	success: boolean;
	message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	if (req.method !== "POST") {
		return res.status(405).json({ success: false, message: "Method not allowed" });
	}

	try {
		const { name, email, phone, serviceType, message }: ContactFormData = req.body;

		// Validate required fields
		if (!name || !email || !message) {
			return res.status(400).json({ success: false, message: "Missing required fields" });
		}

		// Create transporter (you'll add credentials later)
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER, // Add your Gmail address
				pass: process.env.EMAIL_APP_PASSWORD // Add your Gmail app password
			}
		});

		// HTML email template
		const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>New Contact Form Submission</title>
	<style>
		body {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			line-height: 1.6;
			color: #333;
			background-color: #f4f4f4;
			margin: 0;
			padding: 0;
		}
		.container {
			max-width: 600px;
			margin: 20px auto;
			background-color: #ffffff;
			border-radius: 8px;
			overflow: hidden;
			box-shadow: 0 2px 4px rgba(0,0,0,0.1);
		}
		.header {
			background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
			padding: 30px 20px;
			text-align: center;
		}
		.header h1 {
			color: #ffffff;
			margin: 0;
			font-size: 24px;
			font-weight: 600;
		}
		.content {
			padding: 30px 20px;
		}
		.info-section {
			background-color: #f8fafc;
			border-left: 4px solid #3b82f6;
			padding: 15px 20px;
			margin-bottom: 20px;
			border-radius: 4px;
		}
		.info-row {
			margin-bottom: 12px;
		}
		.label {
			font-weight: 600;
			color: #1e293b;
			display: inline-block;
			min-width: 120px;
		}
		.value {
			color: #475569;
		}
		.message-box {
			background-color: #fff;
			border: 1px solid #e2e8f0;
			border-radius: 6px;
			padding: 20px;
			margin-top: 20px;
		}
		.message-label {
			font-weight: 600;
			color: #1e293b;
			margin-bottom: 10px;
			display: block;
		}
		.message-text {
			color: #475569;
			white-space: pre-wrap;
			word-wrap: break-word;
		}
		.footer {
			background-color: #f1f5f9;
			padding: 20px;
			text-align: center;
			font-size: 12px;
			color: #64748b;
		}
		.badge {
			display: inline-block;
			padding: 4px 12px;
			background-color: #dbeafe;
			color: #1e40af;
			border-radius: 12px;
			font-size: 13px;
			font-weight: 500;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="header">
			<h1>📧 New Contact Form Submission</h1>
		</div>
		<div class="content">
			<p style="margin-top: 0; color: #475569;">You have received a new enquiry from your website contact form.</p>
			
			<div class="info-section">
				<div class="info-row">
					<span class="label">Name:</span>
					<span class="value">${name}</span>
				</div>
				<div class="info-row">
					<span class="label">Email:</span>
					<span class="value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></span>
				</div>
				<div class="info-row">
					<span class="label">Phone:</span>
					<span class="value">${phone || "Not provided"}</span>
				</div>
				<div class="info-row">
					<span class="label">Service Type:</span>
					<span class="value">${serviceType || "General Enquiry"}</span>
				</div>
			</div>

			<div class="message-box">
				<span class="message-label">Message:</span>
				<div class="message-text">${message}</div>
			</div>
		</div>
		<div class="footer">
			<p style="margin: 0;">PrimeTouch Cleaning Services</p>
			<p style="margin: 5px 0 0 0;">This is an automated notification from your website contact form.</p>
		</div>
	</div>
</body>
</html>
		`;

		// Send email to business
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER, // Your business email
			subject: `New Contact Form Submission from ${name}`,
			html: htmlEmail
		});

		// Send confirmation email to customer
		const confirmationEmail = `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Thank You for Contacting Us</title>
	<style>
		body {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			line-height: 1.6;
			color: #333;
			background-color: #f4f4f4;
			margin: 0;
			padding: 0;
		}
		.container {
			max-width: 600px;
			margin: 20px auto;
			background-color: #ffffff;
			border-radius: 8px;
			overflow: hidden;
			box-shadow: 0 2px 4px rgba(0,0,0,0.1);
		}
		.header {
			background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
			padding: 40px 20px;
			text-align: center;
		}
		.header h1 {
			color: #ffffff;
			margin: 0 0 10px 0;
			font-size: 28px;
			font-weight: 600;
		}
		.header p {
			color: #e0f2fe;
			margin: 0;
			font-size: 16px;
		}
		.content {
			padding: 40px 30px;
		}
		.greeting {
			font-size: 18px;
			color: #1e293b;
			margin-bottom: 20px;
		}
		.highlight-box {
			background-color: #f0f9ff;
			border-left: 4px solid #3b82f6;
			padding: 20px;
			margin: 20px 0;
			border-radius: 4px;
		}
		.footer {
			background-color: #f1f5f9;
			padding: 30px 20px;
			text-align: center;
		}
		.footer-brand {
			font-size: 20px;
			font-weight: 600;
			color: #1e293b;
			margin-bottom: 10px;
		}
		.footer-text {
			font-size: 14px;
			color: #64748b;
			margin: 5px 0;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="header">
			<h1>Thank You! ✨</h1>
			<p>We've received your message</p>
		</div>
		<div class="content">
			<p class="greeting">Hi ${name},</p>
			<p>Thank you for reaching out to PrimeTouch Cleaning Services! We've received your enquiry and appreciate you taking the time to contact us.</p>
			
			<div class="highlight-box">
				<p style="margin: 0 0 10px 0; font-weight: 600; color: #1e293b;">⏱️ What happens next?</p>
				<p style="margin: 0; color: #475569;">Our team will review your message and get back to you within <strong>24 hours</strong>. We look forward to helping you with your cleaning needs!</p>
			</div>

			<p style="color: #475569; margin-top: 25px;">In the meantime, if you have any urgent questions, feel free to call us or check out our website for more information about our services.</p>
			
			<p style="margin-top: 30px; color: #475569;">Best regards,<br><strong>The PrimeTouch Team</strong></p>
		</div>
		<div class="footer">
			<div class="footer-brand">PrimeTouch Cleaning</div>
			<p class="footer-text">Making every space sparkle</p>
			<p class="footer-text" style="margin-top: 15px; font-size: 12px;">This is an automated confirmation email.</p>
		</div>
	</div>
</body>
</html>
		`;

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: email,
			subject: "Thank You for Contacting PrimeTouch Cleaning",
			html: confirmationEmail
		});

		return res.status(200).json({
			success: true,
			message: "Contact form submitted successfully"
		});
	} catch (error) {
		console.error("Error sending contact form email:", error);
		return res.status(500).json({
			success: false,
			message: "Failed to send email. Please try again later."
		});
	}
}
