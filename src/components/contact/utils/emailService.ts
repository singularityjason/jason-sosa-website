import emailjs from "@emailjs/browser";
import { ContactFormValues } from "../schema/contactFormSchema";
import { toast } from "sonner";

// EmailJS configuration
const serviceId = "service_un5jcyv";
const templateId = "template_rcmukr8";
const publicKey = "vuKz6uieX8PflAZUH"; // Public key is allowed in client-side code

// Simple input sanitization function to prevent potential XSS
const sanitizeInput = (input: string): string => {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").trim();
};

// Basic rate limiting using localStorage
const isRateLimited = (): boolean => {
  const lastSubmissionTime = localStorage.getItem("lastContactSubmission");
  const now = Date.now();

  // If submitted in the last 10 seconds, limit the request
  if (lastSubmissionTime && now - parseInt(lastSubmissionTime) < 10000) {
    return true;
  }

  // Update the submission time
  localStorage.setItem("lastContactSubmission", now.toString());
  return false;
};

export const sendContactEmail = async (data: ContactFormValues) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxxV2EWvcJ33KIoBA80u3kBQ32nnUFeW2jyy20Ej0oFfCtV8kSrTqetVflfDGUEBQ7H/exec",
      {
        mode: "no-cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );

    toast.success("Message sent successfully!", {
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    return true;
  } catch (error) {
    console.error(error);
    toast.error("Failed to send message", {
      description: "Please try again or contact us directly.",
    });
    return false;
  }
};

export const sendContactEmail_deprecated = async (data: ContactFormValues) => {
  // Check honeypot - if it contains anything, silently accept without sending
  if (data.honeypot) {
    // Silent acceptance - no logging to avoid revealing anti-bot measures
    // Still show success to avoid revealing it's a honeypot
    toast.success("Form submitted successfully!");
    return true;
  }

  // Check rate limiting
  if (isRateLimited()) {
    toast.error("Please wait a moment before submitting again");
    return false;
  }

  try {
    // Sanitize inputs to prevent XSS if displayed elsewhere
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      subject: sanitizeInput(data.subject),
      message: sanitizeInput(data.message),
    };

    // Prepare template parameters
    const templateParams = {
      to_email: "jason@jasonsosa.com", // This will be hidden in the EmailJS template
      from_name: sanitizedData.name,
      from_email: sanitizedData.email,
      subject: sanitizedData.subject,
      message: sanitizedData.message,
      // Add timestamp to help prevent CSRF attacks
      timestamp: new Date().toISOString(),
    };

    // Send email using EmailJS - removing the restrictOrigin property as it's not supported
    await emailjs.send(serviceId, templateId, templateParams, publicKey);

    // Success message
    toast.success("Message sent successfully!", {
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    return true;
  } catch (error) {
    // Safely log errors without exposing sensitive details
    console.error("Error sending email: Email service unavailable");

    toast.error("Failed to send message", {
      description: "Please try again or contact us directly.",
    });
    return false;
  }
};
