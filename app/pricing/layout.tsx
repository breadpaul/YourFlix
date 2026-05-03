// In your pricing page (app/pricing/page.tsx) - Replace the existing PricingSchemaMarkup with this:

const PricingSchemaMarkup = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "name": "YourFlix IPTV Pricing Plans 2026",
            "description": "Premium YourFlix IPTV subscription plans with 3, 6, and 12 month options. 20,000+ channels, 60,000+ VODs, anti-freeze technology.",
            "url": "https://yourflix.vip/pricing",
            "image": "https://yourflix.vip/img/logo.png"
          },
          {
            "@type": "Product",
            "name": "YourFlix IPTV Subscription",
            "description": "Premium IPTV subscription with 20,000+ live channels and 60,000+ VODs in 4K/8K quality. Anti-Freeze v4.0 technology eliminates buffering.",
            "brand": {
              "@type": "Brand",
              "name": "YourFlix"
            },
            "url": "https://yourflix.vip/",
            "image": "https://yourflix.vip/img/logo.png",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1250",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "3 Month Plan",
                "priceCurrency": "EUR",
                "price": "30.00",
                "availability": "https://schema.org/InStock",
                "url": "https://yourflix.vip/pricing",
                "priceValidUntil": "2026-12-31",
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "EUR"
                  },
                  "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "WW"
                  }
                },
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "WW",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                  "returnDays": "7",
                  "returnMethod": "https://schema.org/ReturnByMail",
                  "returnFees": "https://schema.org/FreeReturn"
                }
              },
              {
                "@type": "Offer",
                "name": "6 Month Plan",
                "priceCurrency": "EUR",
                "price": "50.00",
                "availability": "https://schema.org/InStock",
                "url": "https://yourflix.vip/pricing",
                "priceValidUntil": "2026-12-31",
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "EUR"
                  },
                  "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "WW"
                  }
                },
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "WW",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                  "returnDays": "7",
                  "returnMethod": "https://schema.org/ReturnByMail",
                  "returnFees": "https://schema.org/FreeReturn"
                }
              },
              {
                "@type": "Offer",
                "name": "12 Month Plan",
                "priceCurrency": "EUR",
                "price": "72.00",
                "availability": "https://schema.org/InStock",
                "url": "https://yourflix.vip/pricing",
                "priceValidUntil": "2026-12-31",
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "EUR"
                  },
                  "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "WW"
                  }
                },
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "WW",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                  "returnDays": "7",
                  "returnMethod": "https://schema.org/ReturnByMail",
                  "returnFees": "https://schema.org/FreeReturn"
                }
              }
            ]
          }
        ]
      })
    }}
  />
);