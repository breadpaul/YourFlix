// app/privacy/page.tsx
import Link from 'next/link';
import { Shield, Lock, Eye, Database, Cookie, Mail, MessageCircle, FileText, CheckCircle2, UserCheck, Server, Share2, Clock, AlertCircle, Globe  } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | YourFlix IPTV - Data Protection & Cookies',
  description: 'YourFlix IPTV privacy policy explains how we collect, use, and protect your personal information. GDPR compliant. Data encryption. No third-party sharing.',
  keywords: 'YourFlix privacy, IPTV privacy policy, data protection, GDPR, cookies policy, YourFlix legal',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-[#111111] to-[#241900] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFC107]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:42px_42px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFC107]/15 border border-[#FFC107]/30 px-4 py-1.5 text-sm font-bold text-[#FFC107] mb-5">
              <Shield className="w-4 h-4" />
              Privacy & Data Protection
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Your privacy matters to us. Learn how YourFlix collects, uses, and protects your personal information.
            </p>
            <p className="text-neutral-500 text-sm mt-4">Last updated: May 3, 2026</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Quick Summary Card */}
            <div className="bg-[#FFF8E1] border border-[#FFC107]/40 rounded-3xl p-6 md:p-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-[#FFC107] flex items-center justify-center">
                  <Lock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-sm font-black text-black mb-2">Privacy Commitment</p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-black">YourFlix</strong> is committed to protecting your privacy. 
                    We collect only essential information to provide and improve our IPTV service. 
                    We do not sell, trade, or share your personal data with third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Privacy Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h3 className="font-black text-black mb-1">Data Encryption</h3>
                <p className="text-xs text-gray-500">All data transmitted securely</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <UserCheck className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h3 className="font-black text-black mb-1">GDPR Compliant</h3>
                <p className="text-xs text-gray-500">Your rights are respected</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Share2 className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h3 className="font-black text-black mb-1">No Third-Party Sharing</h3>
                <p className="text-xs text-gray-500">We don't sell your data</p>
              </div>
            </div>

            {/* Main Privacy Policy Content */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <Database className="w-8 h-8 text-[#FFC107]" />
                  Information We Collect
                </h2>
              </div>
              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-black text-black mb-3">1. Information You Provide to Us</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    When you subscribe to YourFlix, we may collect the following information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Your WhatsApp phone number (for communication and support)</li>
                    <li>Payment information (processed securely via PayPal, credit card, or other payment gateways)</li>
                    <li>Subscription plan and device selection preferences</li>
                    <li>Communication history with our support team</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">2. Automatically Collected Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    When you use our service, we may automatically collect:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>IP address and approximate geographic location</li>
                    <li>Device type, operating system, and IPTV player app information</li>
                    <li>Service usage data (channels watched, streaming quality, connection stability)</li>
                    <li>Access timestamps and session duration</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3 bg-gray-50 p-3 rounded-lg">
                    <strong>Note:</strong> This data helps us improve service quality, troubleshoot issues, and prevent unauthorized access.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">3. Cookies and Tracking Technologies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our website uses cookies to enhance user experience, analyze traffic, and remember preferences. 
                    You can control cookie settings through your browser preferences. Essential cookies are required for 
                    basic website functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <Eye className="w-8 h-8 text-[#FFC107]" />
                  How We Use Your Information
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-black text-black mb-1">Service Delivery</h4>
                      <p className="text-sm text-gray-600">Provide, activate, and maintain your IPTV subscription</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-black text-black mb-1">Customer Support</h4>
                      <p className="text-sm text-gray-600">Respond to inquiries and resolve technical issues</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-black text-black mb-1">Service Improvement</h4>
                      <p className="text-sm text-gray-600">Analyze usage patterns to enhance streaming quality</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-black text-black mb-1">Security & Fraud Prevention</h4>
                      <p className="text-sm text-gray-600">Protect against unauthorized access and abuse</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-black text-black mb-1">Legal Compliance</h4>
                      <p className="text-sm text-gray-600">Fulfill legal obligations and enforce our Terms</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-black text-black mb-1">Communication</h4>
                      <p className="text-sm text-gray-600">Send service updates, renewal reminders, and important notices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Sharing and Disclosure */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <Share2 className="w-8 h-8 text-[#FFC107]" />
                  Data Sharing and Disclosure
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-5">
                  YourFlix does <strong className="text-black">not</strong> sell, trade, or rent your personal information to third parties. 
                  We may share your data only in the following limited circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-3">
                  <li>
                    <strong>Payment Processors:</strong> We share necessary payment information with trusted payment 
                    gateways (PayPal, Stripe, etc.) to process your subscription payments securely.
                  </li>
                  <li>
                    <strong>Service Providers:</strong> We may use third-party tools for analytics, customer support, 
                    or infrastructure that process data on our behalf under strict confidentiality agreements.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose information if required by law, court order, 
                    or government regulation to protect our rights, property, or safety.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, 
                    user information may be transferred as part of the transaction.
                  </li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <UserCheck className="w-8 h-8 text-[#FFC107]" />
                  Your Privacy Rights (GDPR & CCPA)
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-5">
                  Depending on your location (including the European Economic Area, UK, or California), 
                  you may have the following rights regarding your personal data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-black text-black mb-2">Right to Access</h4>
                    <p className="text-sm text-gray-600">Request a copy of the personal data we hold about you</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-black text-black mb-2">Right to Rectification</h4>
                    <p className="text-sm text-gray-600">Correct inaccurate or incomplete information</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-black text-black mb-2">Right to Erasure</h4>
                    <p className="text-sm text-gray-600">Request deletion of your personal data (subject to legal retention)</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-black text-black mb-2">Right to Restrict Processing</h4>
                    <p className="text-sm text-gray-600">Limit how we use your data in certain circumstances</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-black text-black mb-2">Right to Data Portability</h4>
                    <p className="text-sm text-gray-600">Receive your data in a structured, machine-readable format</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-black text-black mb-2">Right to Object</h4>
                    <p className="text-sm text-gray-600">Object to processing for direct marketing or legitimate interests</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm text-gray-700">
                    <strong>To exercise any of these rights,</strong> please contact us via WhatsApp or email. 
                    We will respond to verified requests within 30 days as required by applicable data protection laws.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <Server className="w-8 h-8 text-[#FFC107]" />
                  Data Security
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Encrypted data transmission using TLS/SSL protocols</li>
                  <li>Secure authentication and access controls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited employee access to personal data</li>
                  <li>Secure payment processing via trusted partners</li>
                </ul>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> While we strive to protect your data, no method of transmission over the internet 
                    is 100% secure. We cannot guarantee absolute security, but we continuously work to maintain industry standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies Policy */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <Cookie className="w-8 h-8 text-[#FFC107]" />
                  Cookie Policy
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website uses cookies to improve your browsing experience. Cookies are small text files stored on your device. 
                  We use the following types of cookies:
                </p>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-black text-black mb-1">Essential Cookies</h4>
                    <p className="text-sm text-gray-600">Required for website functionality, security, and basic features.</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-black text-black mb-1">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">Help us understand how visitors interact with our website (Google Analytics).</p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-black text-black mb-1">Preference Cookies</h4>
                    <p className="text-sm text-gray-600">Remember your settings and preferences for future visits.</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  You can manage or disable cookies through your browser settings. However, disabling essential cookies may 
                  affect website functionality.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <Clock className="w-8 h-8 text-[#FFC107]" />
                  Data Retention
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Active Subscribers:</strong> Data retained for the duration of your subscription</li>
                  <li><strong>Inactive Subscribers:</strong> Data retained for up to 24 months after subscription ends</li>
                  <li><strong>Payment Information:</strong> Retained as required for tax and legal purposes (typically 7 years)</li>
                  <li><strong>Support Communications:</strong> Retained for up to 12 months to maintain service history</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  You may request deletion of your personal data at any time, subject to legal retention requirements.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <AlertCircle className="w-8 h-8 text-[#FFC107]" />
                  Children's Privacy
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  YourFlix is not intended for children under 18 years of age. We do not knowingly collect personal information 
                  from minors. If you believe a minor has provided us with personal data, please contact us immediately, 
                  and we will take steps to remove that information.
                </p>
              </div>
            </div>

            {/* International Data Transfers */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <Globe className="w-8 h-8 text-[#FFC107]" />
                  International Data Transfers
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  YourFlix operates globally. Your personal information may be transferred to and processed in countries 
                  outside your residence. We ensure appropriate safeguards are in place to protect your data in accordance 
                  with applicable privacy laws, including Standard Contractual Clauses where required.
                </p>
              </div>
            </div>

            {/* Updates to Privacy Policy */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#FFC107]" />
                  Updates to This Privacy Policy
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                  The "Last updated" date at the top of this page indicates when changes were made. We encourage you to 
                  review this page regularly. Continued use of our service after changes constitutes acceptance of the 
                  updated Privacy Policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <Mail className="w-8 h-8 text-[#FFC107]" />
                  Contact Us
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, wish to exercise your privacy rights, 
                  or report a privacy concern, please contact our Data Protection team:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <MessageCircle className="w-5 h-5 text-[#FFC107]" />
                    <span className="text-gray-700">WhatsApp: <strong>+44 7549 589503</strong></span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Mail className="w-5 h-5 text-[#FFC107]" />
                    <span className="text-gray-700">Email: <strong>privacy@yourflix.vip</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-gray-400 text-xs pt-8 border-t border-gray-200">
              Last updated: May 3, 2026 — YourFlix Privacy Policy is compliant with GDPR, CCPA, and other applicable 
              data protection regulations. This policy may be updated periodically.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}