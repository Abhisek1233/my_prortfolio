// EmailJS Configuration
// Please follow these steps to setup email functionality:
// 1. Go to https://emailjs.com and create an account
// 2. Create a service (Gmail, Outlook, etc.)service_65chs7x
// 3. Create an email template
// 4. Get your User ID from the dashboard
// 5. Replace the values below with your actual EmailJS credentials

export const emailJSConfig = {
  serviceId: 'service_eyfi0s9', // Replace with your EmailJS service ID
  templateId: 'template_kzokdhb', // Replace with your EmailJS template ID
  userId: 'CZckSvK8BFs8AaL5o' // Replace with your EmailJS user ID (public key)
};

// Example template variables you should use in your EmailJS template:
// {{from_name}} - The name from the form
// {{from_email}} - The email from the form
// {{subject}} - The subject from the form
// {{message}} - The message from the form
// {{to_name}} - Your name (you can set this as a default value)
// {{reply_to}} - The user's email for replies (set to {{from_email}})
