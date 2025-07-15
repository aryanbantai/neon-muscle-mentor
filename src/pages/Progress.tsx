import { Navigation } from '@/components/navigation';
import { AIChatbot } from '@/components/ai-chatbot';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp,
  TrendingDown,
  Target,
  Calendar,
  Award,
  Activity,
  Scale,
  Flame,
  Timer,
  Camera
} from 'lucide-react';

const Progress = () => {
  const stats = [
    { 
      label: 'Current Weight', 
      value: '72.5 kg', 
      change: '-2.5 kg', 
      trend: 'down',
      icon: Scale,
      color: 'text-accent'
    },
    { 
      label: 'Body Fat %', 
      value: '15.2%', 
      change: '-1.8%', 
      trend: 'down',
      icon: Target,
      color: 'text-primary'
    },
    { 
      label: 'Muscle Mass', 
      value: '42.8 kg', 
      change: '+1.2 kg', 
      trend: 'up',
      icon: Activity,
      color: 'text-secondary'
    },
    { 
      label: 'Calories Burned', 
      value: '2,450', 
      change: '+150', 
      trend: 'up',
      icon: Flame,
      color: 'text-gym-accent'
    }
  ];

  const workoutProgress = [
    { exercise: 'Bench Press', previous: '60kg', current: '65kg', improvement: '+8%' },
    { exercise: 'Squats', previous: '80kg', current: '87.5kg', improvement: '+9%' },
    { exercise: 'Deadlift', previous: '100kg', current: '110kg', improvement: '+10%' },
    { exercise: 'Pull-ups', previous: '8 reps', current: '12 reps', improvement: '+50%' }
  ];

  const weeklyProgress = [
    { day: 'Mon', workouts: 1, calories: 2200 },
    { day: 'Tue', workouts: 0, calories: 1800 },
    { day: 'Wed', workouts: 1, calories: 2400 },
    { day: 'Thu', workouts: 1, calories: 2100 },
    { day: 'Fri', workouts: 0, calories: 1900 },
    { day: 'Sat', workouts: 1, calories: 2600 },
    { day: 'Sun', workouts: 1, calories: 2300 }
  ];

  const achievements = [
    { 
      title: 'First Workout', 
      description: 'Completed your first workout session',
      date: '2 weeks ago',
      earned: true,
      icon: '🏃‍♂️'
    },
    { 
      title: 'Weight Loss Warrior', 
      description: 'Lost 2kg in your fitness journey',
      date: '1 week ago',
      earned: true,
      icon: '⚖️'
    },
    { 
      title: 'Consistency King', 
      description: 'Worked out 5 days this week',
      date: 'Today',
      earned: true,
      icon: '👑'
    },
    { 
      title: 'Strength Seeker', 
      description: 'Increased bench press by 10kg',
      date: 'Coming soon',
      earned: false,
      icon: '💪'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Progress</h1>
              <p className="text-muted-foreground">
                Track your fitness journey and celebrate your achievements
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Camera className="h-4 w-4 mr-2" />
              Add Progress Photo
            </Button>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="body">Body Stats</TabsTrigger>
              <TabsTrigger value="strength">Strength</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-6 bg-card border-border card-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                      <div className={`flex items-center gap-1 text-sm ${
                        stat.trend === 'up' ? 'text-accent' : 'text-primary'
                      }`}>
                        {stat.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        {stat.change}
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Weekly Activity Chart */}
              <Card className="p-6 bg-card border-border card-shadow">
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Weekly Activity
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-7 gap-4">
                    {weeklyProgress.map((day, index) => (
                      <div key={index} className="text-center">
                        <div className="text-sm font-medium text-foreground mb-2">{day.day}</div>
                        <div className="space-y-2">
                          <div className={`h-8 rounded ${
                            day.workouts > 0 ? 'bg-primary' : 'bg-muted'
                          } flex items-center justify-center`}>
                            <span className="text-xs text-white font-medium">
                              {day.workouts}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {day.calories} cal
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-primary"></div>
                      <span>Workouts completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-muted"></div>
                      <span>Rest days</span>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="body" className="space-y-6">
              <Card className="p-6 bg-card border-border card-shadow">
                <h2 className="text-xl font-semibold text-foreground mb-6">Body Composition Trends</h2>
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">Body composition charts coming soon!</p>
                  <Button className="bg-primary hover:bg-primary/90">
                    Log Body Measurements
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="strength" className="space-y-6">
              <Card className="p-6 bg-card border-border card-shadow">
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-accent" />
                  Strength Progress
                </h2>
                
                <div className="space-y-4">
                  {workoutProgress.map((exercise, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-foreground">{exercise.exercise}</h3>
                          <p className="text-sm text-muted-foreground">
                            {exercise.previous} → {exercise.current}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-accent">
                            <TrendingUp className="h-4 w-4" />
                            <span className="font-medium">{exercise.improvement}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <Card className="p-6 bg-card border-border card-shadow">
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Award className="h-5 w-5 text-gym-accent" />
                  Achievements
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${
                      achievement.earned 
                        ? 'bg-accent/10 border-accent/30' 
                        : 'bg-muted/30 border-muted opacity-60'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {achievement.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <Timer className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {achievement.date}
                            </span>
                          </div>
                        </div>
                        {achievement.earned && (
                          <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                    </div>
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

export default Progress;