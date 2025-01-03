// Tawk.to configuration
export const TAWK_PROPERTY_ID = 'YOUR_PROPERTY_ID';
export const TAWK_WIDGET_ID = 'YOUR_WIDGET_ID';

export const loadTawkTo = (): void => {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://embed.tawk.to/' + TAWK_PROPERTY_ID + '/' + TAWK_WIDGET_ID;
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  document.head.appendChild(script);
};