# EmailJS Setup Guide

This portfolio includes a contact form that can send real emails to your Gmail account using EmailJS. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended for personal use)
4. Follow the instructions to connect your Gmail account
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use these template variables in your email content:

```
Subject: New Contact Form Message from {{from_name}}

Hello Abhisek,

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Set the "To Email" to your Gmail address: `abhisekbehera506@gmail.com`
5. Set "Reply To" to `{{from_email}}`
6. Save the template and note down the **Template ID** (e.g., `template_xyz456`)

## Step 4: Get Your User ID (Public Key)

1. Go to "Account" → "General" in your EmailJS dashboard
2. Find your **User ID** (Public Key) - it looks like `user_abc123xyz`

## Step 5: Update Your Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual IDs:

```javascript
export const emailJSConfig = {
  serviceId: 'service_abc123', // Your actual service ID
  templateId: 'template_xyz456', // Your actual template ID
  userId: 'user_abc123xyz' // Your actual user ID
};
```

## Step 6: Test the Contact Form

1. Start your development server: `npm start`
2. Navigate to the contact section
3. Fill out the form and click "Send Message"
4. Check your Gmail inbox for the test message

## Troubleshooting

- Make sure all IDs are correct and properly copied
- Check your browser's console for any error messages
- Verify your Gmail account is properly connected to EmailJS
- Check your EmailJS dashboard for delivery status

## Security Note

The configuration only contains public keys that are safe to include in your frontend code. Your Gmail credentials are never exposed.

## EmailJS Free Tier Limits

- 200 emails per month
- Perfect for a personal portfolio contact form
- Upgrade available if you need more emails

That's it! Your contact form should now send real emails to your Gmail account.
