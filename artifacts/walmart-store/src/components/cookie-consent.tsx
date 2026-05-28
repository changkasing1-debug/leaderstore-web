import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[400px] z-50 bg-white border border-[#CFD9E6] rounded-xl shadow-xl p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-sm text-[#07121A] mb-1">Cookie Preferences</h3>
          <p className="text-xs text-[#526880] leading-relaxed mb-3">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-[#001A2E] text-white text-xs font-semibold rounded-lg hover:bg-[#001A2E]/90 transition-all"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-4 py-2 border border-[#CFD9E6] text-[#526880] text-xs font-semibold rounded-lg hover:bg-[#F0F4F8] transition-all"
            >
              Decline
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          className="text-[#526880] hover:text-[#07121A] transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
