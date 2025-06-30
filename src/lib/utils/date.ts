// Date utility functions
import { format, formatDistanceToNow, isToday, isYesterday, parseISO } from 'date-fns';

export const dateUtils = {
  // Format date for display
  formatDate(date: string | Date, formatStr = 'MMM d, yyyy') {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatStr);
  },

  // Format relative time
  formatRelativeTime(date: string | Date) {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return formatDistanceToNow(dateObj, { addSuffix: true });
  },

  // Format date with relative context
  formatDateWithContext(date: string | Date) {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    
    if (isToday(dateObj)) {
      return `Today at ${format(dateObj, 'h:mm a')}`;
    }
    
    if (isYesterday(dateObj)) {
      return `Yesterday at ${format(dateObj, 'h:mm a')}`;
    }
    
    return format(dateObj, 'MMM d, yyyy \'at\' h:mm a');
  },

  // Check if date is valid
  isValidDate(date: any): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  },
};