// Google Analytics configuration
export const GA_MEASUREMENT_ID = "G-T5QSZY9LV5"; // Replace with your actual Measurement ID

// Initialize Google Analytics
export const initGA = () => {
  // Load gtag script
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });

  // Make gtag available globally
  window.gtag = gtag;
};

// Track page views
export const trackPageView = (page_title, page_location) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_title,
      page_location,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track resume downloads
export const trackResumeDownload = () => {
  trackEvent("download", "resume", "resume_pdf", 1);
};

// Track contact form submissions
export const trackContactForm = () => {
  trackEvent("submit", "contact", "contact_form", 1);
};

// Track external link clicks
export const trackExternalLink = (url) => {
  trackEvent("click", "external_link", url, 1);
};
