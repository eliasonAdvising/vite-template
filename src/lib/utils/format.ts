// Formatting utility functions
export const formatUtils = {
  // Format currency
  currency(amount: number, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  },

  // Format number with commas
  number(num: number) {
    return new Intl.NumberFormat('en-US').format(num);
  },

  // Format percentage
  percentage(num: number, decimals = 1) {
    return `${(num * 100).toFixed(decimals)}%`;
  },

  // Truncate text
  truncate(text: string, length: number) {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
  },

  // Capitalize first letter
  capitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  },

  // Format file size
  fileSize(bytes: number) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  },
};