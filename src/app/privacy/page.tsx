export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-secondary">
        <div className="container-main">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-main max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground-light mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">Introduction</h2>
            <p className="text-foreground-light mb-4">
              Strategic Care & Health Foundation ("SCHF", "we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or use our services.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p className="text-foreground-light mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-foreground-light mb-4 space-y-2">
              <li>Register on the Website</li>
              <li>Express an interest in obtaining information about us or our products and services</li>
              <li>Participate in activities on the Website</li>
              <li>Contact us</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-foreground-light mb-4">
              We use personal information collected via our Website for a variety of business purposes described below. 
              We process your personal information for these purposes in reliance on our legitimate business interests, 
              in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">Sharing Your Information</h2>
            <p className="text-foreground-light mb-4">
              We only share information with the following third parties:
            </p>
            <ul className="list-disc pl-6 text-foreground-light mb-4 space-y-2">
              <li>Service Providers - to monitor and analyze the use of our Website</li>
              <li>Donation Processors - to process your donations securely</li>
              <li>Legal Obligations - when required by law or in response to valid requests</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="text-foreground-light mb-4">
              If you have questions or comments about this policy, you may email us at info@schf.org.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
