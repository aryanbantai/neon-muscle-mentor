import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dumbbell, Heart, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/gym-hero-bg.jpg';

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-glow">
          Elevate Your Fitness Journey with{' '}
          <span className="text-transparent bg-clip-text primary-gradient">
            AI Precision
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Unlock your potential with personalized workout and diet plans, crafted by our AI-powered gym trainer. 
          Get started today and transform your fitness goals into reality.
        </p>

        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold glow-primary transition-bounce"
        >
          Get Started
        </Button>
      </div>

      {/* Feature Cards */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/80 backdrop-blur-sm border-border card-shadow p-6 transition-smooth hover:transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-accent/20">
                <Dumbbell className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Customized Workout Plans</h3>
            </div>
            <p className="text-muted-foreground">
              Receive workout routines tailored to your fitness level, goals, and available equipment.
            </p>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border card-shadow p-6 transition-smooth hover:transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Nutritional Guidance</h3>
            </div>
            <p className="text-muted-foreground">
              Get personalized meal plans and dietary recommendations to fuel your workouts and support your progress.
            </p>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border card-shadow p-6 transition-smooth hover:transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-secondary/20">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Progress Tracking</h3>
            </div>
            <p className="text-muted-foreground">
              Monitor your progress, track your achievements, and stay motivated on your fitness journey.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}