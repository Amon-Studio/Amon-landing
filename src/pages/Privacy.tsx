
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Amon Studio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Amon Studio Privacy Policy - Learn how we protect your privacy and handle your data in our iOS applications.');
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gradient mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              At Amon Studio, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our iOS applications and services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Collection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Personal information you provide when using our apps (name, email address)</li>
                <li>Usage data and analytics to improve app performance</li>
                <li>Device information (iOS version, device model, unique device identifiers)</li>
                <li>Location data when explicitly permitted by you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use collected information for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Providing and maintaining our app services</li>
                <li>Improving user experience and app functionality</li>
                <li>Analyzing usage patterns to enhance performance</li>
                <li>Communicating with you about updates and support</li>
                <li>Ensuring security and preventing fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our apps may integrate with third-party services such as Apple's frameworks, analytics providers, and cloud services. These services have their own privacy policies, and we encourage you to review them. We do not control these third-party services and are not responsible for their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Log Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you use our apps, we may automatically collect log data including your device's IP address, operating system version, app version, time and date of use, and other statistics. This information helps us diagnose technical issues and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Local Storage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our apps may use local storage and similar technologies to store preferences and improve your experience. You can manage these settings through your device's privacy controls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our apps may contain links to external websites or services. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within our apps and updating the "Effective Date" above. Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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

export default Privacy;
