import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, Send, Upload, X, Minimize2, Maximize2 } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface UserData {
  height?: string;
  weight?: string;
  bodyType?: string;
  target?: string;
  image?: File;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState<UserData>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const steps = [
    'greeting',
    'height',
    'weight', 
    'bodyType',
    'target',
    'image',
    'analysis'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addAIMessage("Hi there! I'm your AI Gym Trainer. To get started, please provide me with your height, weight, fitness target, and a recent body image. This will help me create a personalized workout and diet plan for you. Let's start with your height (in cm or ft/inches)?");
      }, 500);
    }
  }, [isOpen]);

  const addMessage = (content: string, type: 'user' | 'ai') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addAIMessage = (content: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(content, 'ai');
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    processUserInput(inputValue);
    setInputValue('');
  };

  const processUserInput = (input: string) => {
    const step = steps[currentStep];

    switch (step) {
      case 'height':
        setUserData(prev => ({ ...prev, height: input }));
        addAIMessage("Great! Now, what's your current weight (in kg or lbs)?");
        setCurrentStep(1);
        break;
      case 'weight':
        setUserData(prev => ({ ...prev, weight: input }));
        addAIMessage("Perfect! How would you describe your current body type? (skinny/average/overweight)");
        setCurrentStep(2);
        break;
      case 'bodyType':
        setUserData(prev => ({ ...prev, bodyType: input }));
        addAIMessage("Excellent! What's your fitness goal? (weight gain/weight loss/muscle building/general fitness)");
        setCurrentStep(3);
        break;
      case 'target':
        setUserData(prev => ({ ...prev, target: input }));
        addAIMessage("Almost done! Please upload a recent body image so I can better analyze your physique and create the most effective plan for you. Click the upload button below.");
        setCurrentStep(4);
        break;
      default:
        addAIMessage("I understand. Let me help you with that!");
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setUserData(prev => ({ ...prev, image: file }));
        addMessage(`Image uploaded: ${file.name}`, 'user');
        generateRecommendations();
      } else {
        toast.error('Please upload an image file.');
      }
    }
  };

  const generateRecommendations = () => {
    addAIMessage("Perfect! I'm analyzing your information and creating your personalized workout and diet plan. This might take a moment...");
    
    setTimeout(() => {
      const workoutPlan = generateWorkoutPlan();
      const dietPlan = generateDietPlan();
      
      addAIMessage(`Based on your profile (Height: ${userData.height}, Weight: ${userData.weight}, Goal: ${userData.target}), here's your personalized plan:\n\n**WORKOUT PLAN:**\n${workoutPlan}\n\n**DIET RECOMMENDATIONS:**\n${dietPlan}\n\nWould you like me to adjust anything or explain any exercises?`);
      setCurrentStep(6);
    }, 3000);
  };

  const generateWorkoutPlan = () => {
    // This is where you'd integrate with Gemini API
    // For now, returning a sample plan
    return `**Week 1-2 (Beginner):**
• Monday: Push-ups (3x8), Squats (3x10), Plank (30s)
• Wednesday: Lunges (3x10), Deadlifts (3x8), Pull-ups (3x5)
• Friday: Full body circuit training

**Progressive Overload:** Increase reps by 2 each week`;
  };

  const generateDietPlan = () => {
    // This is where you'd integrate with Gemini API
    return `**Daily Nutrition (${userData.target}):**
• Breakfast: Protein oatmeal with fruits
• Lunch: Grilled chicken with quinoa and vegetables
• Dinner: Salmon with roasted vegetables
• Snacks: Greek yogurt, nuts, protein shake

**Macros:** Protein: 150g, Carbs: 200g, Fats: 70g`;
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 glow-primary pulse-neon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 bg-card border-border card-shadow transition-smooth ${
        isMinimized ? 'h-16' : 'h-[500px]'
      }`}>
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-dark-surface rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="font-semibold text-foreground">AI Trainer</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0 hover:bg-muted"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[380px]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg transition-smooth chat-bubble-enter ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-4 bg-dark-surface rounded-b-lg">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-input border-border"
                />
                {currentStep === 4 && (
                  <>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3"
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                  </>
                )}
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-3 bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}