
import { useEffect } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Amon Studio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Amon Studio. We would love to hear from you about your iOS app ideas and projects.');
    }
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:contact@amonstudio.io";
  };

  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 p-8 md:p-12 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cosmic-500 to-purple-500 rounded-full flex items-center justify-center glow-effect">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl font-bold text-gradient">Get In Touch</h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                We'd love to hear from you.
              </p>
              
              <p className="text-muted-foreground max-w-md mx-auto">
                Whether you have a question about our apps, need support, or want to discuss a potential collaboration, we're here to help.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handleEmailClick}
                size="lg"
                className="bg-gradient-to-r from-cosmic-600 to-purple-600 hover:from-cosmic-700 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 glow-effect"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send us an email
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                contact@amonstudio.io
              </p>
            </div>

            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
