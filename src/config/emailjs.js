// EmailJS Configuration
// Please follow these steps to setup email functionality:
// 1. Go to https://emailjs.com and create an account
// 2. Create a service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your User ID from the dashboard
// 5. Add your credentials to the .env file in the root directory

export const emailJSConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  userId: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

// Validate that environment variables are loaded
if (!emailJSConfig.serviceId || !emailJSConfig.templateId || !emailJSConfig.userId) {
  console.warn('EmailJS configuration is incomplete. Please check your .env file.');
}

// Example template variables you should use in your EmailJS template:
// {{from_name}} - The name from the form
// {{from_email}} - The email from the form
// {{subject}} - The subject from the form
// {{message}} - The message from the form
// {{to_name}} - Your name (you can set this as a default value)
// {{reply_to}} - The user's email for replies (set to {{from_email}})
