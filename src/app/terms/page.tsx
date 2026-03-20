export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-secondary">
        <div className="container-main">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Terms of Service
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-main max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground-light mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-foreground-light mb-4">
              By accessing and using the Strategic Care & Health Foundation (SCHF) website, you accept and agree to be 
              bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">Use License</h2>
            <p className="text-foreground-light mb-4">
              Permission is granted to temporarily use the SCHF website for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-foreground-light mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Transfer the materials to another person or entity</li>
              <li>Attempt to reverse engineer any software contained on the Website</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">Donations</h2>
            <p className="text-foreground-light mb-4">
              All donations made through our website are voluntary and non-refundable. SCHF is a registered non-profit 
              organization. Your donations may be tax-deductible to the extent allowed by law. You will receive a receipt 
              for your records.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">User Contributions</h2>
            <p className="text-foreground-light mb-4">
              The Website may contain message boards, chat rooms, personal web pages, profiles, forums, and other 
              interactive features that allow users to post, submit, publish, display, or transmit to other users 
              content or materials.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">Disclaimer</h2>
            <p className="text-foreground-light mb-4">
              The materials on SCHF's website are provided on an 'as is' basis. SCHF makes no warranties, expressed 
              or implied, and hereby disclaims and negates all other warranties including without limitation, implied 
              warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of 
              intellectual property.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">Limitations</h2>
            <p className="text-foreground-light mb-4">
              In no event shall SCHF or its suppliers be liable for any damages arising out of the use or inability 
              to use the materials on our website.
            </p>

            <h2 className="text-2xl font-heading font-bold text-foreground mt-8 mb-4">Contact Information</h2>
            <p className="text-foreground-light mb-4">
              If you have any questions about these Terms of Service, please contact us at info@schf.org.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
