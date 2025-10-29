import React from 'react';
import { Button } from '@/components/ui/button';
import { useNewsletterPopup } from '@/hooks/useNewsletterPopup';

const NewsletterTestControls: React.FC = () => {
  const { openPopup, resetSubscription } = useNewsletterPopup();

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-2">
      <Button
        onClick={openPopup}
        variant="outline"
        size="sm"
        className="bg-white shadow-lg"
      >
        Test Newsletter Popup
      </Button>
      <Button
        onClick={resetSubscription}
        variant="outline"
        size="sm"
        className="bg-white shadow-lg"
      >
        Reset Subscription
      </Button>
    </div>
  );
};

export default NewsletterTestControls;




