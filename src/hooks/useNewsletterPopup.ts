import { useState, useEffect } from 'react';

interface NewsletterPopupState {
  isOpen: boolean;
  shouldShow: boolean;
}

export const useNewsletterPopup = () => {
  const [popupState, setPopupState] = useState<NewsletterPopupState>({
    isOpen: false,
    shouldShow: false,
  });

  useEffect(() => {
    // Check if user should see the popup
    const checkShouldShowPopup = () => {
      // Don't show if already subscribed
      const isSubscribed = localStorage.getItem('newsletterSubscribed') === 'true';
      if (isSubscribed) {
        return;
      }

      // Don't show if popup was seen recently (within 7 days)
      const popupSeenDate = localStorage.getItem('newsletterPopupSeenDate');
      if (popupSeenDate) {
        const seenDate = new Date(popupSeenDate);
        const now = new Date();
        const daysSinceSeen = (now.getTime() - seenDate.getTime()) / (1000 * 60 * 60 * 24);
        
        if (daysSinceSeen < 7) {
          return;
        }
      }

      // Don't show if user has dismissed popup multiple times (more than 3 times)
      const dismissCount = parseInt(localStorage.getItem('newsletterPopupDismissCount') || '0');
      if (dismissCount >= 3) {
        return;
      }

      // Show popup after 3 seconds delay
      const timer = setTimeout(() => {
        setPopupState(prev => ({ ...prev, shouldShow: true, isOpen: true }));
      }, 3000);

      return () => clearTimeout(timer);
    };

    const cleanup = checkShouldShowPopup();
    return cleanup;
  }, []);

  const openPopup = () => {
    setPopupState(prev => ({ ...prev, isOpen: true }));
  };

  const closePopup = () => {
    setPopupState(prev => ({ ...prev, isOpen: false }));
    
    // Track dismissal count
    const currentCount = parseInt(localStorage.getItem('newsletterPopupDismissCount') || '0');
    localStorage.setItem('newsletterPopupDismissCount', (currentCount + 1).toString());
    localStorage.setItem('newsletterPopupSeen', 'true');
    localStorage.setItem('newsletterPopupSeenDate', new Date().toISOString());
  };

  const markAsSubscribed = () => {
    localStorage.setItem('newsletterSubscribed', 'true');
    localStorage.setItem('newsletterSubscribedDate', new Date().toISOString());
  };

  const resetSubscription = () => {
    localStorage.removeItem('newsletterSubscribed');
    localStorage.removeItem('newsletterEmail');
    localStorage.removeItem('newsletterSubscribedDate');
    localStorage.removeItem('newsletterPopupDismissCount');
    localStorage.removeItem('newsletterPopupSeen');
    localStorage.removeItem('newsletterPopupSeenDate');
  };

  return {
    isOpen: popupState.isOpen,
    shouldShow: popupState.shouldShow,
    openPopup,
    closePopup,
    markAsSubscribed,
    resetSubscription,
  };
};
