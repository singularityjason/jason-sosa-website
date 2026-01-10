import { ContactFormValues } from "../schema/contactFormSchema";
import { toast } from "sonner";

// Simple input sanitization function to prevent potential XSS
const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
};

// Rate limiting using localStorage with longer cooldown
const RATE_LIMIT_SECONDS = 30;
const MAX_SUBMISSIONS_PER_HOUR = 5;

const isRateLimited = (): boolean => {
  const now = Date.now();

  // Check short-term rate limit (30 seconds between submissions)
  const lastSubmissionTime = localStorage.getItem("lastContactSubmission");
  if (lastSubmissionTime && now - parseInt(lastSubmissionTime) < RATE_LIMIT_SECONDS * 1000) {
    return true;
  }

  // Check hourly submission limit
  const hourlySubmissions = JSON.parse(localStorage.getItem("hourlySubmissions") || "[]") as number[];
  const oneHourAgo = now - 3600000;
  const recentSubmissions = hourlySubmissions.filter(time => time > oneHourAgo);

  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
    return true;
  }

  // Update tracking
  localStorage.setItem("lastContactSubmission", now.toString());
  localStorage.setItem("hourlySubmissions", JSON.stringify([...recentSubmissions, now]));

  return false;
};

// Browser fingerprint check (basic bot detection)
const isSuspiciousBrowser = (): boolean => {
  // Check for headless browser indicators
  if (navigator.webdriver) return true;
  if (!navigator.languages || navigator.languages.length === 0) return true;

  return false;
};

export const sendContactEmail = async (data: ContactFormValues): Promise<boolean> => {
  // Check honeypot - if filled, silently "succeed" without sending
  if (data.honeypot) {
    // Delay to simulate real submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Message sent successfully!", {
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    return true;
  }

  // Check for suspicious browser
  if (isSuspiciousBrowser()) {
    toast.error("Unable to send message", {
      description: "Please try using a different browser.",
    });
    return false;
  }

  // Check rate limiting
  if (isRateLimited()) {
    toast.error("Please wait before submitting again", {
      description: "You can submit another message in a few moments.",
    });
    return false;
  }

  try {
    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      subject: sanitizeInput(data.subject),
      message: sanitizeInput(data.message),
      timestamp: new Date().toISOString(),
    };

    // Validate email format server-side style
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      toast.error("Invalid email address");
      return false;
    }

    // Send to Google Apps Script endpoint
    // Note: This endpoint should have its own rate limiting and validation
    const response = await fetch(
      import.meta.env.VITE_CONTACT_FORM_ENDPOINT ||
      "https://script.google.com/macros/s/AKfycbxxV2EWvcJ33KIoBA80u3kBQ32nnUFeW2jyy20Ej0oFfCtV8kSrTqetVflfDGUEBQ7H/exec",
      {
        mode: "no-cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedData),
      },
    );

    toast.success("Message sent successfully!", {
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    return true;
  } catch (error) {
    // Don't log error details to console in production
    toast.error("Failed to send message", {
      description: "Please try again or contact us directly.",
    });
    return false;
  }
};
