import { Navigation } from '@/components/navigation';
import { AIChatbot } from '@/components/ai-chatbot';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Apple,
  Clock,
  Target,
  Plus,
  Utensils,
  TrendingUp,
  Calendar
} from 'lucide-react';

const Nutrition = () => {
  const todayMeals = [
    {
      type: 'Breakfast',
      name: 'Protein Power Oatmeal',
      image: '🥣',
      calories: 420,
      protein: 25,
      carbs: 45,
      fats: 12,
      time: '07:30',
      completed: true
    },
    {
      type: 'Lunch',
      name: 'Grilled Chicken Salad',
      image: '🥗',
      calories: 380,
      protein: 35,
      carbs: 15,
      fats: 18,
      time: '12:30',
      completed: true
    },
    {
      type: 'Snack',
      name: 'Greek Yogurt with Berries',
      image: '🍓',
      calories: 180,
      protein: 15,
      carbs: 20,
      fats: 5,
      time: '15:00',
      completed: false
    },
    {
      type: 'Dinner',
      name: 'Salmon with Roasted Vegetables',
      image: '🍽️',
      calories: 450,
      protein: 40,
      carbs: 25,
      fats: 22,
      time: '19:00',
      completed: false
    }
  ];

  const nutritionGoals = {
    calories: { current: 800, target: 2000 },
    protein: { current: 75, target: 150 },
    carbs: { current: 80, target: 200 },
    fats: { current: 35, target: 70 }
  };

  const mealSuggestions = [
    {
      name: 'High-Protein Smoothie',
      calories: 250,
      protein: 30,
      type: 'Snack',
      ingredients: ['Whey protein', 'Banana', 'Almond milk', 'Spinach'],
      image: '🥤'
    },
    {
      name: 'Quinoa Buddha Bowl',
      calories: 420,
      protein: 18,
      type: 'Lunch',
      ingredients: ['Quinoa', 'Chickpeas', 'Avocado', 'Mixed vegetables'],
      image: '🥙'
    },
    {
      name: 'Lean Beef Stir-fry',
      calories: 380,
      protein: 35,
      type: 'Dinner',
      ingredients: ['Lean beef', 'Broccoli', 'Bell peppers', 'Brown rice'],
      image: '🍖'
    }
  ];

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-accent';
    if (percentage >= 60) return 'bg-primary';
    return 'bg-secondary';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Nutrition</h1>
              <p className="text-muted-foreground">
                Track your meals and optimize your nutrition for better results
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Log Meal
            </Button>
          </div>

          <Tabs defaultValue="today" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="planner">Meal Planner</TabsTrigger>
              <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
            </TabsList>

            <TabsContent value="today" className="space-y-6">
              {/* Daily Progress */}
              <Card className="p-6 bg-card border-border card-shadow">
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Daily Progress
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {Object.entries(nutritionGoals).map(([key, goal]) => {
                    const percentage = getProgressPercentage(goal.current, goal.target);
                    return (
                      <div key={key} className="text-center">
                        <div className="relative w-20 h-20 mx-auto mb-3">
                          <svg className="w-20 h-20 transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="30"
                              stroke="currentColor"
                              strokeWidth="6"
                              fill="transparent"
                              className="text-muted/30"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="30"
                              stroke="currentColor"
                              strokeWidth="6"
                              fill="transparent"
                              strokeDasharray={`${2 * Math.PI * 30}`}
                              strokeDashoffset={`${2 * Math.PI * 30 * (1 - percentage / 100)}`}
                              className={getProgressColor(percentage).replace('bg-', 'text-')}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-foreground">
                              {Math.round(percentage)}%
                            </span>
                          </div>
                        </div>
                        <h3 className="font-medium text-foreground capitalize">{key}</h3>
                        <p className="text-sm text-muted-foreground">
                          {goal.current}/{goal.target}{key === 'calories' ? '' : 'g'}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Today's Meals */}
              <Card className="p-6 bg-card border-border card-shadow">
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-accent" />
                  Today's Meals
                </h2>
                
                <div className="space-y-4">
                  {todayMeals.map((meal, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${
                      meal.completed ? 'bg-accent/10 border-accent/30' : 'bg-muted/50 border-border'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{meal.image}</div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-foreground">{meal.name}</h3>
                              <Badge variant="secondary" className="text-xs">{meal.type}</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {meal.time}
                              </span>
                              <span>{meal.calories} cal</span>
                              <span>P: {meal.protein}g</span>
                              <span>C: {meal.carbs}g</span>
                              <span>F: {meal.fats}g</span>
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant={meal.completed ? "secondary" : "default"}
                          size="sm"
                          className={meal.completed ? "" : "bg-primary hover:bg-primary/90"}
                        >
                          {meal.completed ? 'Logged' : 'Log Meal'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="planner" className="space-y-6">
              <Card className="p-6 bg-card border-border card-shadow">
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Weekly Meal Planner
                </h2>
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">Meal planner coming soon!</p>
                  <Button className="bg-primary hover:bg-primary/90">
                    Generate Weekly Plan
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="suggestions" className="space-y-6">
              <Card className="p-6 bg-card border-border card-shadow">
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  AI Meal Suggestions
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mealSuggestions.map((suggestion, index) => (
                    <Card key={index} className="p-4 bg-muted/50 border-border">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{suggestion.image}</div>
                        <h3 className="font-medium text-foreground">{suggestion.name}</h3>
                        <Badge variant="outline" className="mt-1 text-xs">{suggestion.type}</Badge>
                      </div>
                      
                      <div className="text-sm text-muted-foreground mb-4">
                        <p className="flex justify-between">
                          <span>Calories:</span>
                          <span className="font-medium">{suggestion.calories}</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Protein:</span>
                          <span className="font-medium">{suggestion.protein}g</span>
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-foreground mb-2">Ingredients:</p>
                        <div className="flex flex-wrap gap-1">
                          {suggestion.ingredients.map((ingredient, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {ingredient}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                        Add to Plan
                      </Button>
                    </Card>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <AIChatbot />
    </div>
  );
};

export default Nutrition;