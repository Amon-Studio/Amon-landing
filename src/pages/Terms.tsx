
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Use - Amon Studio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Amon Studio Terms of Use - Read our terms and conditions for using our iOS applications and services.');
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gradient mb-8">Terms of Use</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Amon Studio. These Terms of Use govern your access to and use of our iOS applications and services. By downloading, installing, or using our apps, you agree to be bound by these terms.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using any Amon Studio application, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, you must not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">License Grant</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Subject to your compliance with these Terms, Amon Studio grants you a limited, non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Download and install our apps on devices you own or control</li>
                <li>Use our apps for personal, non-commercial purposes</li>
                <li>Access and use features and content within our apps</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Prohibited Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Reverse engineer, decompile, or disassemble our applications</li>
                <li>Use our apps for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Upload or transmit malicious code, viruses, or harmful content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Interfere with the proper functioning of our apps</li>
                <li>Remove or modify any copyright notices or proprietary markings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our apps, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of Amon Studio and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to our apps at any time, with or without notice, for any reason, including violation of these Terms. Upon termination, you must immediately cease using our apps and delete all copies from your devices. Sections of these Terms that by their nature should survive termination will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our apps are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that our apps will be uninterrupted, error-free, or completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Amon Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or relating to your use of our apps, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved through binding arbitration or in courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of material changes through our apps or other reasonable means. Your continued use of our apps after such changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <p className="text-primary font-medium mt-2">
                contact@amonstudio.io
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
