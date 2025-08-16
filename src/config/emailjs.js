export const emailJSConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  userId: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

// Validate that environment variables are loaded
if (!emailJSConfig.serviceId || !emailJSConfig.templateId || !emailJSConfig.userId) {
  console.warn('EmailJS configuration is incomplete. Please check your .env file.');
}

