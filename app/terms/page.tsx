// app/terms/page.tsx
import Link from 'next/link';
import { 
  Shield, 
  FileText, 
  Clock, 
  CreditCard, 
  MessageCircle, 
  AlertCircle, 
  CheckCircle2, 
  Tv, 
  Smartphone, 
  Wifi, 
  Users, 
  Lock, 
  Globe,
  Mail,
  DollarSign,
  Calendar,
  MonitorSmartphone  // Changed from DeviceIcon to MonitorSmartphone
} from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | YourFlix IPTV - Legal Information',
  description: 'YourFlix IPTV terms of service, refund policy, and legal guidelines. 24-hour refund window, fair use policy, and subscription terms.',
  keywords: 'YourFlix terms, IPTV terms of service, refund policy, 24-hour refund, YourFlix legal',
};

export default function TermsPage() {
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
              <FileText className="w-4 h-4" />
              Legal Information
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using the YourFlix IPTV service.
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
                  <AlertCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-sm font-black text-black mb-2">Important Notice</p>
                  <p className="text-gray-700 leading-relaxed">
                    By subscribing to <strong className="text-black">YourFlix IPTV</strong>, you agree to these Terms & Conditions. 
                    Please read this document carefully before making any purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Policy Section - Highlighted */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <Clock className="w-8 h-8 text-[#FFC107]" />
                  Refund Policy
                </h2>
              </div>
              <div className="p-6 md:p-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl mb-6">
                  <p className="text-red-700 font-bold text-lg">⚠️ 24-Hour Refund Window</p>
                  <p className="text-red-600 mt-2">
                    YourFlix offers a <strong className="text-red-800">24-hour refund policy</strong>. Refund requests must be submitted 
                    within 24 hours of purchase. After this period, no refunds will be issued.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-black mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      When You Are Eligible for a Refund
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>You requested a refund within <strong>24 hours</strong> of your purchase time.</li>
                      <li>You are experiencing persistent technical issues that our support team cannot resolve.</li>
                      <li>The service does not work on your device as described.</li>
                      <li>You did not receive your login credentials within 1 hour of purchase.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-black mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      When You Are NOT Eligible for a Refund
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>You request a refund <strong>more than 24 hours after purchase</strong>.</li>
                      <li>You changed your mind after purchasing without trying the service first.</li>
                      <li>The issue is caused by your internet connection, device, or IPTV player app.</li>
                      <li>You did not contact support before requesting a refund.</li>
                      <li>You violated our Fair Use Policy or Terms of Service.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-black mb-3">How to Request a Refund</h3>
                    <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                      <li>Contact YourFlix support via <strong>WhatsApp</strong> within 24 hours of purchase.</li>
                      <li>Provide your order details and explain the issue you are experiencing.</li>
                      <li>Our support team will troubleshoot the issue with you.</li>
                      <li>If the issue cannot be resolved, we will process your refund.</li>
                      <li>Refunds are processed within 5-10 business days to your original payment method.</li>
                    </ol>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="text-sm text-gray-600">
                      <strong className="text-black">Note:</strong> Refunds are issued at the discretion of YourFlix. 
                      We reserve the right to deny refund requests that do not meet the criteria above. 
                      Our goal is to provide the best service possible, and we encourage customers to contact 
                      support before requesting a refund.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-10">
              <div className="bg-black p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <Shield className="w-8 h-8 text-[#FFC107]" />
                  Terms of Service
                </h2>
              </div>
              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-black text-black mb-3">1. Acceptance of Terms</h3>
                  <p className="text-gray-700 leading-relaxed">
                    By purchasing and using the YourFlix IPTV service, you agree to be bound by these Terms & Conditions. 
                    If you do not agree with any part of these terms, please do not use our service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">2. Service Description</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    YourFlix provides an IPTV subscription service that allows users to stream live television channels, 
                    video-on-demand content, and series over the internet. The service requires:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>A compatible IPTV player app</li>
                    <li>A stable internet connection (minimum 15 Mbps for HD, 30 Mbps for 4K)</li>
                    <li>Valid subscription credentials provided by YourFlix</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">3. Subscription Plans and Pricing</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    YourFlix offers multiple subscription plans. Prices vary based on plan duration and number of devices selected. 
                    All prices are in EUR (Euro).
                  </p>
                  <div className="bg-gray-50 rounded-xl p-5 mb-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="font-black text-black">3 Months</p>
                        <p className="text-sm text-gray-600">1 Device: €30</p>
                        <p className="text-sm text-gray-600">2 Devices: €40</p>
                        <p className="text-sm text-gray-600">3 Devices: €55</p>
                      </div>
                      <div className="text-center">
                        <p className="font-black text-black">6 Months</p>
                        <p className="text-sm text-gray-600">1 Device: €50</p>
                        <p className="text-sm text-gray-600">2 Devices: €70</p>
                        <p className="text-sm text-gray-600">3 Devices: €99</p>
                      </div>
                      <div className="text-center">
                        <p className="font-black text-black">12 Months</p>
                        <p className="text-sm text-gray-600">1 Device: €72</p>
                        <p className="text-sm text-gray-600">2 Devices: €99</p>
                        <p className="text-sm text-gray-600">3 Devices: €139</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">4. Account Activation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Upon successful payment, your YourFlix account will be activated instantly. 
                    Login credentials (Xtream Codes API or M3U playlist) will be sent via WhatsApp. 
                    If you do not receive your credentials within 1 hour, please contact support.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">5. Fair Use Policy</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    YourFlix subscriptions are for personal use only. The following activities are strictly prohibited:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Sharing account credentials with non-paying users</li>
                    <li>Reselling or redistributing YourFlix service</li>
                    <li>Using the service for public or commercial purposes</li>
                    <li>Excessive simultaneous streams beyond your purchased device limit</li>
                    <li>Attempting to bypass server restrictions or security measures</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Violation of the Fair Use Policy may result in immediate suspension without refund.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">6. Service Availability and Modifications</h3>
                  <p className="text-gray-700 leading-relaxed">
                    YourFlix strives to provide uninterrupted service, but we do not guarantee 100% uptime. 
                    We reserve the right to modify, suspend, or discontinue any part of the service without prior notice.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">7. Device Compatibility</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    YourFlix works with compatible IPTV player apps on:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <Tv className="w-4 h-4 text-[#FFC107]" />
                      <span className="text-sm text-gray-700">Smart TVs</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <Smartphone className="w-4 h-4 text-[#FFC107]" />
                      <span className="text-sm text-gray-700">Android/iOS</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <MonitorSmartphone className="w-4 h-4 text-[#FFC107]" />
                      <span className="text-sm text-gray-700">Fire Stick</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    We do not provide technical support for all IPTV player apps. Recommended players include 
                    IPTV Smarters Pro, TiviMate, XCIPTV, and Televizo.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">8. Internet Requirements</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    For the best streaming experience, we recommend:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Minimum 15 Mbps for HD streaming</li>
                    <li>Minimum 30 Mbps for 4K streaming</li>
                    <li>Wired Ethernet connection when possible</li>
                    <li>Stable Wi-Fi signal with low latency</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">9. Customer Support</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    YourFlix provides customer support via WhatsApp. Support hours may vary, but we strive to 
                    respond to all inquiries within 24 hours. For technical issues, please provide:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Your device type and model</li>
                    <li>Your IPTV player app name and version</li>
                    <li>A description of the issue</li>
                    <li>Screenshots or video if possible</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">10. Liability Disclaimer</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    YourFlix is not responsible for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Issues caused by your internet service provider</li>
                    <li>Problems with third-party IPTV player apps</li>
                    <li>Content legality or licensing (users are responsible for complying with local laws)</li>
                    <li>Data charges from your mobile or internet provider</li>
                    <li>Device compatibility issues beyond our control</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">11. Privacy and Data Collection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    YourFlix collects minimal personal information required to process payments and provide service access. 
                    We do not share your information with third parties except as required for payment processing. 
                    For more details, please review our <Link href="/privacy" className="text-[#FFC107] hover:underline">Privacy Policy</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">12. Changes to Terms</h3>
                  <p className="text-gray-700 leading-relaxed">
                    YourFlix reserves the right to modify these Terms & Conditions at any time. 
                    Changes will be effective immediately upon posting on this page. 
                    Continued use of the service constitutes acceptance of modified terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">13. Governing Law</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                    where YourFlix operates, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-black mb-3">14. Contact Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    For any questions regarding these Terms & Conditions, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <MessageCircle className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-gray-700">WhatsApp: <strong>+44 7549 589503</strong></span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Mail className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-gray-700">Email: <strong>support@yourflix.vip</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Support CTA */}
            <div className="bg-black text-white p-6 md:p-8 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/20 via-transparent to-[#FFC107]/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-3">Have Questions About Our Terms?</h3>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                  If you need clarification about our Terms & Conditions or Refund Policy, 
                  please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="https://wa.me/447549589503" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 bg-[#FFC107] text-black px-6 py-3 rounded-xl font-bold hover:bg-[#E5AD06] transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact Support
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-gray-400 text-xs pt-8 border-t border-gray-200 mt-8">
              Last updated: May 3, 2026 — YourFlix IPTV Terms & Conditions are subject to change. 
              Please review this page periodically for updates.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}