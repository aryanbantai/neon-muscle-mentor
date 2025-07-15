import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AIChatbot } from '@/components/ai-chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AIChatbot />
    </div>
  );
};

export default Index;
