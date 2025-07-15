import { Navigation } from '@/components/navigation';
import { AIChatbot } from '@/components/ai-chatbot';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play,
  Clock,
  Target,
  Dumbbell,
  Heart,
  Zap,
  CheckCircle,
  Plus
} from 'lucide-react';

const Workouts = () => {
  const workoutPlans = [
    {
      id: 1,
      name: 'Full Body Strength',
      duration: '45 min',
      difficulty: 'Intermediate',
      calories: '300-400',
      exercises: 8,
      type: 'Strength',
      description: 'Complete strength training targeting all major muscle groups',
      color: 'bg-primary'
    },
    {
      id: 2,
      name: 'HIIT Cardio Blast',
      duration: '30 min',
      difficulty: 'Advanced',
      calories: '250-350',
      exercises: 6,
      type: 'Cardio',
      description: 'High-intensity interval training for maximum calorie burn',
      color: 'bg-accent'
    },
    {
      id: 3,
      name: 'Upper Body Focus',
      duration: '40 min',
      difficulty: 'Beginner',
      calories: '200-300',
      exercises: 6,
      type: 'Strength',
      description: 'Targeted upper body workout for building strength and definition',
      color: 'bg-secondary'
    },
    {
      id: 4,
      name: 'Yoga Flow',
      duration: '25 min',
      difficulty: 'Beginner',
      calories: '100-150',
      exercises: 10,
      type: 'Flexibility',
      description: 'Relaxing yoga sequence for flexibility and mindfulness',
      color: 'bg-gym-accent'
    }
  ];

  const todayWorkout = {
    name: 'Push Day - Chest & Triceps',
    exercises: [
      { name: 'Push-ups', sets: 3, reps: '12-15', rest: '60s', completed: true },
      { name: 'Bench Press', sets: 3, reps: '8-10', rest: '90s', completed: true },
      { name: 'Dumbbell Flyes', sets: 3, reps: '10-12', rest: '60s', completed: false },
      { name: 'Tricep Dips', sets: 3, reps: '8-12', rest: '60s', completed: false },
      { name: 'Overhead Press', sets: 3, reps: '8-10', rest: '90s', completed: false }
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Workouts</h1>
              <p className="text-muted-foreground">
                Choose your workout and start training with AI guidance
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Create Custom Workout
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Workout Plans */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-foreground mb-6">Available Workouts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workoutPlans.map((workout) => (
                  <Card key={workout.id} className="p-6 bg-card border-border card-shadow transition-smooth hover:transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${workout.color}/20`}>
                        <Dumbbell className={`h-6 w-6 ${workout.color.replace('bg-', 'text-')}`} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {workout.type}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">{workout.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{workout.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{workout.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{workout.exercises} exercises</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{workout.calories} cal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getDifficultyColor(workout.difficulty)}`}></div>
                        <span className="text-muted-foreground">{workout.difficulty}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Play className="h-4 w-4 mr-2" />
                      Start Workout
                    </Button>
                  </Card>
                ))}
              </div>
            </div>

            {/* Today's Workout Progress */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-card border-border card-shadow">
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Today's Workout
                </h2>
                
                <div className="mb-6">
                  <h3 className="font-medium text-foreground mb-2">{todayWorkout.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>2/5 exercises completed</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {todayWorkout.exercises.map((exercise, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${
                      exercise.completed ? 'bg-accent/10 border-accent/30' : 'bg-muted/50 border-border'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{exercise.name}</h4>
                        {exercise.completed && (
                          <CheckCircle className="h-5 w-5 text-accent" />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>{exercise.sets} sets × {exercise.reps} reps</p>
                        <p>Rest: {exercise.rest}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6 bg-accent hover:bg-accent/90">
                  Continue Workout
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <AIChatbot />
    </div>
  );
};

export default Workouts;