# Email Setup for Contact Form

## Overview
This document provides instructions on how to set up the email functionality for the contact form in your portfolio website.

## Configuration

### 1. Environment Variables
The email functionality uses environment variables stored in the `.env` file. These variables include:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=anands2959@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_FROM=anands2959@gmail.com
EMAIL_TO=anands2959@gmail.com
```

### 2. Gmail App Password
For security reasons, Gmail requires an App Password instead of your regular password when using SMTP. Follow these steps to create an App Password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Select "Security" from the left menu
3. Under "Signing in to Google," select "2-Step Verification" (you must have this enabled)
4. At the bottom of the page, select "App passwords"
5. Select "Mail" as the app and "Other (Custom name)" as the device
6. Enter a name like "Portfolio Contact Form"
7. Click "Generate"
8. Copy the 16-character password that appears
9. Replace `your_app_password_here` in the `.env` file with this password

### 3. Email Provider Alternatives
If you prefer not to use Gmail, you can use other email providers by updating the `EMAIL_HOST`, `EMAIL_PORT`, and authentication details in the `.env` file.

## Testing

1. After setting up the environment variables, start the development server:
   ```
   npm run dev
   ```

2. Navigate to the contact form section of your website
3. Fill out the form and submit it
4. Check your email inbox to verify that you received the message

## Troubleshooting

### Common Issues

1. **Email Not Sending**
   - Verify that your app password is correct
   - Check that 2-Step Verification is enabled on your Google account
   - Ensure that "Less secure app access" is turned off

2. **SMTP Connection Error**
   - Check your internet connection
   - Verify that the SMTP server details are correct
   - Ensure your email provider allows SMTP access

3. **Form Submission Error**
   - Check the browser console for error messages
   - Verify that the API route is correctly implemented
   - Ensure all required form fields are filled out

## Security Considerations

1. Never commit your `.env` file to version control
2. Regularly rotate your app password for enhanced security
3. Consider implementing rate limiting to prevent abuse of the contact form

## Production Deployment

When deploying to production:

1. Add the environment variables to your hosting platform (e.g., Vercel, Netlify)
2. Test the contact form in the production environment
3. Consider using environment-specific email configurations for development and production