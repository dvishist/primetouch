# Email Setup Guide

This project uses Gmail SMTP to send booking confirmations and contact form emails.

## Setup Instructions

### 1. Create a `.env.local` file

Copy the example file:

```bash
cp .env.local.example .env.local
```

### 2. Set up Gmail App Password

1. **Enable 2-Step Verification** on your Google Account:
   - Go to https://myaccount.google.com/security
   - Click on "2-Step Verification"
   - Follow the steps to enable it

2. **Generate an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other" as the device and name it "PrimeTouch Website"
   - Click "Generate"
   - Copy the 16-character password (no spaces)

3. **Update `.env.local`**:

   ```env
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_APP_PASSWORD=your-16-character-password
   BUSINESS_EMAILS=email1@example.com, email2@example.com, email3@example.com
   ```

   Note: `BUSINESS_EMAILS` can be a comma-separated list of email addresses that will receive booking notifications. If not set, it defaults to `EMAIL_USER`.

### 3. Restart the Development Server

After adding the credentials:

```bash
npm run dev
```

## API Endpoints

### POST /api/contact

Handles contact form submissions.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "0412345678",
  "serviceType": "General Enquiry",
  "message": "I would like to know more about your services"
}
```

**Features:**

- Sends styled HTML email to business
- Sends confirmation email to customer
- Validates required fields

### POST /api/booking

Handles booking wizard submissions.

**Request Body:**

```json
{
  "bookingType": "once-off",
  "bookingPeriod": "once-off",
  "duration": 3,
  "cleanLevel": "standard",
  "selectedAddons": ["Inside windows", "Oven cleaning"],
  "bathrooms": 2,
  "toilets": 2,
  "contactPreferences": ["Email", "Phone"],
  "customerDetails": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "0412345678",
    "address": "123 Main St",
    "city": "Sydney",
    "postalCode": "2000",
    "notes": "Please call before arriving"
  }
}
```

**Features:**

- Sends detailed booking email to business with all service details
- Sends booking confirmation to customer
- Includes all booking details, add-ons, and special notes

## Email Templates

Both endpoints send beautifully styled HTML emails with:

- Responsive design
- Professional branding
- Clear information hierarchy
- Call-to-action elements
- Mobile-friendly layout

## Testing

To test emails locally:

1. Add your credentials to `.env.local`
2. Submit a test form
3. Check both your inbox (business email) and the customer's email

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables to your hosting platform:
   - `EMAIL_USER`
   - `EMAIL_APP_PASSWORD`

2. Make sure to **never commit** your `.env.local` file to Git
   - It's already in `.gitignore`

## Troubleshooting

**"Invalid login" error:**

- Make sure 2-Step Verification is enabled
- Use an App Password, not your regular Gmail password
- Check for typos in email/password

**Emails not sending:**

- Check the server console for error messages
- Verify environment variables are loaded
- Make sure you restarted the dev server after adding credentials

**Emails going to spam:**

- This is normal for development
- In production, consider using a professional email service
- Add SPF/DKIM records to your domain
