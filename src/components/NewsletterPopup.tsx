// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// interface NewsletterPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }
// const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
//   const [email, setEmail] = useState('');
//   const handleSubmit = () => {
//     if (email && email.includes('@')) {
//       console.log('Subscribed:', email);
//       onClose();
//     }
//   };
//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter') {
//       handleSubmit();
//     }
//   };
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, y: 50 }}
//           className="fixed bottom-4 left-4 bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4 z-[1000]"
//           style={{ borderTop: '4px solid #B0C2B0' }}
//         >
//           <button
//             onClick={onClose}
//             className="absolute top-2 right-2 text-[#595959] hover:text-[#262626] text-2xl font-light"
//           >
//             ×
//           </button>
//           <h2 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#262626' }}>
//             Subscribe to our Newsletter
//           </h2>
//           <p className="mb-4 text-xs sm:text-sm" style={{ color: '#595959' }}>
//             Get exclusive beauty tips and special offers delivered to your inbox
//           </p>
//           <div>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Enter your email address"
//               className="w-full p-2 sm:p-3 mb-3 border-2 rounded-lg text-xs sm:text-sm"
//               style={{ borderColor: '#E2DBDF', color: '#262626' }}
//               required
//             />
//             <button
//               onClick={handleSubmit}
//               className="w-full text-white p-2 sm:p-3 rounded-lg font-semibold transition-colors text-xs sm:text-sm"
//               style={{ backgroundColor: '#595959' }}
//               onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#262626'}
//               onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#595959'}
//             >
//               Subscribe
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };
// export default NewsletterPopup;
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const mailchimpUrl = 'https://gmail.us3.list-manage.com/subscribe/post?u=54b361c731e48a9f02daf5f08&id=6d31763a68&f_id=0008c0e5f0';
      const formData = new FormData();
      formData.append('EMAIL', email);

      const response = await fetch(mailchimpUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4 z-[1000]"
          style={{ borderTop: '4px solid #B0C2B0' }}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-[#595959] hover:text-[#262626] text-2xl font-light"
          >
            ×
          </button>
          <h2 className="text-center text-lg sm:text-xl font-bold mb-2" style={{ color: '#262626' }}>
            Join the AVYA community
          </h2>
          <p className="mb-4 text-xs sm:text-sm" style={{ color: '#595959' }}>
            Get exclusive beauty tips and special offers delivered to your inbox
          </p>
          {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
          {success && <p className="text-green-500 text-xs mb-2">Thank you for subscribing!</p>}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your email address"
              className="w-full p-2 sm:p-3 mb-3 border-2 rounded-lg text-xs sm:text-sm"
              style={{ borderColor: '#E2DBDF', color: '#262626' }}
              required
            />
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full text-white p-2 sm:p-3 rounded-lg font-semibold transition-colors text-xs sm:text-sm"
              style={{ backgroundColor: isSubmitting ? '#7a7a7a' : '#595959' }}
              onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#262626')}
              onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#595959')}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
