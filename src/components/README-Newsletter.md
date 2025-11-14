# Newsletter Popup Feature

## Overview
A sophisticated newsletter subscription popup that tracks user subscription status and prevents showing the popup to already subscribed users.

## Features

### Smart Tracking
- **Subscription Status**: Tracks if user is already subscribed
- **Dismissal Tracking**: Remembers if user dismissed the popup
- **Time-based Logic**: Won't show popup if seen within 7 days
- **Dismissal Limit**: Stops showing after 3 dismissals
- **Development Controls**: Test buttons for development environment

### User Experience
- **Delayed Appearance**: Shows after 3 seconds to avoid interrupting initial page load
- **Beautiful Design**: Gradient backgrounds, animations, and modern UI
- **Success State**: Special confirmation screen with welcome gift message
- **Responsive**: Works on all screen sizes
- **Accessible**: Proper ARIA labels and keyboard navigation

### Technical Implementation
- **localStorage**: Persistent tracking across sessions
- **React Hooks**: Custom hook for state management
- **Radix UI**: Accessible dialog components
- **Tailwind CSS**: Modern styling with animations
- **TypeScript**: Full type safety

## Files

### Components
- `NewsletterPopup.tsx` - Main popup component
- `NewsletterTestControls.tsx` - Development testing controls

### Hooks
- `useNewsletterPopup.ts` - Custom hook for popup logic

### Integration
- `App.tsx` - Integrated into main app component

## Usage

The popup automatically appears based on the tracking logic. For development testing, use the test controls in the bottom-left corner.

### Testing
1. Open browser dev tools
2. Use "Test Newsletter Popup" to manually trigger
3. Use "Reset Subscription" to clear all tracking data

### Customization
- Modify timing in `useNewsletterPopup.ts`
- Update styling in `NewsletterPopup.tsx`
- Change tracking logic as needed

## localStorage Keys
- `newsletterSubscribed` - Boolean subscription status
- `newsletterEmail` - Subscribed email address
- `newsletterSubscribedDate` - Subscription timestamp
- `newsletterPopupSeen` - Boolean if popup was seen
- `newsletterPopupSeenDate` - Last seen timestamp
- `newsletterPopupDismissCount` - Number of dismissals






