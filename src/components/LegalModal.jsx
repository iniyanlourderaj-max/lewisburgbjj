import React from "react";

const LegalModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  // 🔒 YOUR OFFICIAL GENERATED PRIVACY POLICY DATA LINKED TO THE STATE HOOK
  const privacyText = `PRIVACY POLICY
Last updated: June 06, 2026

This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.


INTERPRETATION AND DEFINITIONS

Interpretation
The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

Definitions
For the purposes of this Privacy Policy:
• Account means a unique account created for You to access our Service or parts of our Service.
• Company (referred to as either "the Company", "We", "Us" or "Our") refers to Lewisburg Brazilian Jiu Jutsu, 1722 W Market St, Lewisburg, PA 17837.
• Cookies are small files that are placed on Your computer or mobile device by a website, containing details of Your browsing history.
• Personal Data is any information that relates to an identified or identifiable individual.
• Service refers to the Website.
• Service Provider means any natural or legal person who processes data on behalf of the Company (such as Gymdesk).
• Website refers to Lewisburg BJJ, accessible from your local and production domains.
• You means the individual accessing or using the Service.


COLLECTING AND USING YOUR PERSONAL DATA

Types of Data Collected:
• Email address
• First name and last name
• Phone number

Usage Data & Cookies:
Usage Data is collected automatically when using the Service (such as IP addresses, browser type, and time spent on pages). We use standard Necessary, Notification Acceptance, and Functionality Cookies to ensure an optimized website experience.

Use of Your Personal Data:
The Company may use Personal Data to provide and maintain our Service, to contact You via emails or text alerts regarding schedule updates, and to attend and manage your membership inquiry submissions. 

Data Retention:
The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy, securely deleting or anonymizing records when retention cycles expire.


CHILDREN'S PRIVACY
Our Service does not knowingly collect personally identifiable information from anyone under the age of 16 without parental verification. If an adult or parent submits inquiries regarding youth programs, that data is processed securely under standard parental management.


CONTACT US
If you have any questions about this Privacy Policy, You can contact us:
• By email: ben@one-healthwellness.com`;

  // 🥋 STANDARD ACADEMY TERMS OF USE TEMPLATE
  const termsText = `TERMS OF USE
Last updated: June 06, 2026

Welcome to Lewisburg Brazilian Jiu Jitsu. By utilizing our informational website and submitting digital entry fields, you agree to comply with standard platform usage agreements.

1. ACADEMY PARTICIPATION & SIGNUP
All onboarding infrastructures, official membership processing schedules, billing tracking, and digital liability waiver executions are handled directly via our third-party gym management system, Gymdesk, tomorrow. 

2. AUTOMATED RECURRING CYCLE RATES
Selecting a membership path authorizes standard automated billing cycles to your linked card profile on Gymdesk until cancelled formally in writing according to standard contract agreements.

3. PHYSICAL MAT SAFETY LIABILITY
Martial arts training (Jiu Jitsu / Combat Sports) carries inherent physical risks. A signed liability waiver profile uploaded through Gymdesk is strictly mandatory before accessing the academy mats.

CONTACT US
If you have any questions about these operational Terms, contact us at:
• By email: ben@one-healthwellness.com`;

  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Use";
  const rawText = isPrivacy ? privacyText : termsText;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Black Translucent Blurred Backdrop Grid */}
      <div 
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Interface Card */}
      <div className="relative bg-zinc-900 border border-zinc-800 w-full max-w-2xl rounded-3xl p-6 md:p-8 max-h-[75vh] flex flex-col justify-between shadow-2xl z-10">
        
        {/* Header Block Row */}
        <div className="flex justify-between items-start border-b border-zinc-800 pb-4 mb-6">
          <div>
            <h3 className="text-lg md:text-xl uppercase tracking-widest font-semibold text-white">
              {title}
            </h3>
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block mt-1 font-medium">
              Lewisburg Brazilian Jiu Jitsu
            </span>
          </div>
          <button 
            onClick={onClose}
            className="size-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors text-xl font-light cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Scrollable Legal Prose Content Box */}
        <div className="text-zinc-400 text-xs md:text-sm leading-relaxed space-y-4 font-light overflow-y-auto pr-2 whitespace-pre-line scrollbar-thin scrollbar-thumb-zinc-800">
          {rawText}
        </div>

        {/* Dismissal Trigger */}
        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-zinc-800 hover:bg-white hover:text-zinc-950 text-white rounded-full text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

export default LegalModal;