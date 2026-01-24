import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type BookingFormData = {
	bookingType: string;
	bookingPeriod: string;
	duration: number;
	cleanLevel: string;
	selectedAddons: string[];
	contactPreferences: string[];
	bathrooms: number;
	toilets: number;
	customerDetails: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		address: string;
		city: string;
		postalCode: string;
		notes: string;
	};
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
		const bookingData: BookingFormData = req.body;

		// Validate required fields
		if (!bookingData.customerDetails.firstName || !bookingData.customerDetails.email) {
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

		const { customerDetails } = bookingData;
		const fullName = `${customerDetails.firstName} ${customerDetails.lastName}`;

		// Format booking type for display
		const formatBookingType = (type: string) => {
			return type
				.split("-")
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");
		};

		// HTML email template for business
		const businessEmail = `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>New Booking Request</title>
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
			max-width: 650px;
			margin: 20px auto;
			background-color: #ffffff;
			border-radius: 8px;
			overflow: hidden;
			box-shadow: 0 2px 8px rgba(0,0,0,0.1);
		}
		.header {
			background: linear-gradient(135deg, #10b981 0%, #059669 100%);
			padding: 35px 20px;
			text-align: center;
		}
		.header h1 {
			color: #ffffff;
			margin: 0;
			font-size: 26px;
			font-weight: 600;
		}
		.header p {
			color: #d1fae5;
			margin: 8px 0 0 0;
			font-size: 15px;
		}
		.content {
			padding: 30px;
		}
		.section {
			margin-bottom: 30px;
		}
		.section-title {
			font-size: 18px;
			font-weight: 600;
			color: #1e293b;
			margin-bottom: 15px;
			padding-bottom: 8px;
			border-bottom: 2px solid #e2e8f0;
		}
		.info-grid {
			display: grid;
			gap: 12px;
		}
		.info-row {
			background-color: #f8fafc;
			padding: 12px 15px;
			border-radius: 6px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.label {
			font-weight: 600;
			color: #475569;
			font-size: 14px;
		}
		.value {
			color: #1e293b;
			font-weight: 500;
		}
		.badge {
			display: inline-block;
			padding: 6px 14px;
			background-color: #dcfce7;
			color: #166534;
			border-radius: 20px;
			font-size: 13px;
			font-weight: 600;
		}
		.addon-list {
			list-style: none;
			padding: 0;
			margin: 10px 0;
		}
		.addon-item {
			padding: 8px 12px;
			background-color: #f0f9ff;
			border-left: 3px solid #3b82f6;
			margin-bottom: 6px;
			border-radius: 4px;
			color: #1e40af;
		}
		.notes-box {
			background-color: #fef3c7;
			border-left: 4px solid #f59e0b;
			padding: 15px;
			border-radius: 4px;
			margin-top: 15px;
		}
		.footer {
			background-color: #f1f5f9;
			padding: 25px;
			text-align: center;
			font-size: 13px;
			color: #64748b;
		}
		.highlight {
			background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
			border-radius: 8px;
			padding: 20px;
			margin: 20px 0;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="header">
			<h1>New Booking Request!</h1>
			<p>A customer has submitted a booking through your website</p>
		</div>
		<div class="content">
			<div class="highlight">
				<div style="font-size: 16px; color: #1e40af; font-weight: 600; margin-bottom: 8px;">Service Type</div>
				<div class="badge">${formatBookingType(bookingData.bookingType)}</div>
			</div>

			<div class="section">
				<div class="section-title">Booking Details</div>
				<div class="info-grid">
					<div class="info-row">
						<span class="label">Booking Period:</span>
						<span class="value">${formatBookingType(bookingData.bookingPeriod || "Not specified")}</span>
					</div>
					${
						bookingData.duration
							? `<div class="info-row">
						<span class="label">Duration:</span>
						<span class="value">${bookingData.duration} hour${bookingData.duration > 1 ? "s" : ""}</span>
					</div>`
							: ""
					}
					${
						bookingData.cleanLevel
							? `<div class="info-row">
						<span class="label">Clean Level:</span>
						<span class="value">${formatBookingType(bookingData.cleanLevel)}</span>
					</div>`
							: ""
					}
					${
						bookingData.bathrooms
							? `<div class="info-row">
						<span class="label">Bathrooms:</span>
						<span class="value">${bookingData.bathrooms}</span>
					</div>`
							: ""
					}
					${
						bookingData.toilets
							? `<div class="info-row">
						<span class="label">Toilets:</span>
						<span class="value">${bookingData.toilets}</span>
					</div>`
							: ""
					}
				</div>

				${
					bookingData.selectedAddons && bookingData.selectedAddons.length > 0
						? `
				<div style="margin-top: 20px;">
					<div style="font-weight: 600; color: #1e293b; margin-bottom: 10px;">Additional Services:</div>
					<ul class="addon-list">
						${bookingData.selectedAddons.map(addon => `<li class="addon-item">${addon}</li>`).join("")}
					</ul>
				</div>
				`
						: ""
				}
			</div>

			<div class="section">
				<div class="section-title">Customer Information</div>
				<div class="info-grid">
					<div class="info-row">
						<span class="label">Name:</span>
						<span class="value">${fullName}</span>
					</div>
					<div class="info-row">
						<span class="label">Email:</span>
						<span class="value"><a href="mailto:${customerDetails.email}" style="color: #3b82f6; text-decoration: none;">${customerDetails.email}</a></span>
					</div>
					<div class="info-row">
						<span class="label">Phone:</span>
						<span class="value"><a href="tel:${customerDetails.phone}" style="color: #3b82f6; text-decoration: none;">${customerDetails.phone}</a></span>
					</div>
					<div class="info-row">
						<span class="label">Address:</span>
						<span class="value">${customerDetails.address}</span>
					</div>
					<div class="info-row">
						<span class="label">City:</span>
						<span class="value">${customerDetails.city}</span>
					</div>
					${
						customerDetails.postalCode
							? `<div class="info-row">
						<span class="label">Postal Code:</span>
						<span class="value">${customerDetails.postalCode}</span>
					</div>`
							: ""
					}
				</div>

				${
					bookingData.contactPreferences && bookingData.contactPreferences.length > 0
						? `
				<div style="margin-top: 15px;">
					<span class="label">Preferred Contact:</span>
					<span class="value"> ${bookingData.contactPreferences.join(", ")}</span>
				</div>
				`
						: ""
				}

				${
					customerDetails.notes
						? `
				<div class="notes-box">
					<div style="font-weight: 600; color: #92400e; margin-bottom: 8px;">Special Notes:</div>
					<div style="color: #78350f;">${customerDetails.notes}</div>
				</div>
				`
						: ""
				}
			</div>
		</div>
		<div class="footer">
			<p style="margin: 0; font-weight: 600;">PrimeTouch Cleaning Services</p>
			<p style="margin: 8px 0 0 0;">Automated booking notification from your website</p>
		</div>
	</div>
</body>
</html>
		`;

		// Send email to business (multiple recipients)
		const businessEmails = process.env.BUSINESS_EMAILS || process.env.EMAIL_USER;
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: businessEmails, // Can be comma-separated list: "email1@example.com, email2@example.com"
			subject: `New Booking: ${formatBookingType(bookingData.bookingType)} - ${fullName}`,
			html: businessEmail
		});

		// Customer confirmation email
		const customerEmail = `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Booking Confirmation</title>
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
			box-shadow: 0 2px 8px rgba(0,0,0,0.1);
		}
		.header {
			background: linear-gradient(135deg, #10b981 0%, #059669 100%);
			padding: 45px 20px;
			text-align: center;
		}
		.header h1 {
			color: #ffffff;
			margin: 0 0 10px 0;
			font-size: 30px;
			font-weight: 600;
		}
		.header p {
			color: #d1fae5;
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
		.info-box {
			background-color: #f0fdf4;
			border-left: 4px solid #10b981;
			padding: 20px;
			margin: 25px 0;
			border-radius: 4px;
		}
		.info-title {
			font-weight: 600;
			color: #166534;
			margin-bottom: 12px;
			font-size: 16px;
		}
		.info-item {
			color: #14532d;
			margin: 8px 0;
			padding-left: 20px;
			position: relative;
		}
		.info-item:before {
			content: "";
			position: absolute;
			left: 0;
			color: #10b981;
			font-weight: bold;
		}
		.next-steps {
			background-color: #eff6ff;
			border-radius: 8px;
			padding: 25px;
			margin: 25px 0;
		}
		.step {
			display: flex;
			margin-bottom: 15px;
			align-items: flex-start;
		}
		.step-number {
			background-color: #3b82f6;
			color: white;
			width: 28px;
			height: 28px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 600;
			font-size: 14px;
			flex-shrink: 0;
			margin-right: 12px;
		}
		.step-text {
			color: #1e40af;
			padding-top: 3px;
		}
		.footer {
			background-color: #f1f5f9;
			padding: 30px;
			text-align: center;
		}
		.footer-brand {
			font-size: 22px;
			font-weight: 600;
			color: #1e293b;
			margin-bottom: 8px;
		}
		.footer-tagline {
			color: #64748b;
			font-size: 14px;
			margin: 5px 0;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="header">
			<h1>Booking Received!</h1>
			<p>We're excited to help you sparkle</p>
		</div>
		<div class="content">
			<p class="greeting">Hi ${customerDetails.firstName},</p>
			<p>Thank you for choosing PrimeTouch Cleaning Services! We've received your booking request and are thrilled to serve you.</p>

			<div class="info-box">
				<div class="info-title">Your Booking Summary</div>
				<div class="info-item">Service: <strong>${formatBookingType(bookingData.bookingType)}</strong></div>
				${bookingData.bookingPeriod ? `<div class="info-item">Period: <strong>${formatBookingType(bookingData.bookingPeriod)}</strong></div>` : ""}
				${bookingData.duration ? `<div class="info-item">Duration: <strong>${bookingData.duration} hour${bookingData.duration > 1 ? "s" : ""}</strong></div>` : ""}
				<div class="info-item">Location: <strong>${customerDetails.address}, ${customerDetails.city}</strong></div>
			</div>

			<div class="next-steps">
				<h3 style="margin-top: 0; color: #1e40af;">What happens next?</h3>
				<div class="step">
					<div class="step-number">1</div>
					<div class="step-text">Our team will review your booking details</div>
				</div>
				<div class="step">
					<div class="step-number">2</div>
					<div class="step-text">We'll contact you within 24 hours to confirm your appointment</div>
				</div>
				
			</div>

			<p style="color: #475569; margin-top: 25px;">If you have any questions or need to make changes, please reply to this email with your request.</p>
			
			<p style="margin-top: 30px; color: #475569;">Looking forward to serving you!<br><strong>The PrimeTouch Team</strong></p>
		</div>
		<div class="footer">
			<div class="footer-brand">PrimeTouch Cleaning</div>
			<p class="footer-tagline">The perfect touch for every space</p>
			<p class="footer-tagline" style="margin-top: 15px; font-size: 12px;">This is an automated confirmation email.</p>
		</div>
	</div>
</body>
</html>
		`;

		// Send confirmation to customer
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: customerDetails.email,
			subject: "Booking Confirmation - PrimeTouch Cleaning Services",
			html: customerEmail
		});

		return res.status(200).json({
			success: true,
			message: "Booking submitted successfully"
		});
	} catch (error) {
		console.error("Error processing booking:", error);
		return res.status(500).json({
			success: false,
			message: "Failed to process booking. Please try again later."
		});
	}
}
