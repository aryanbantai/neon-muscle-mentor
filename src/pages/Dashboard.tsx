import { Navigation } from '@/components/navigation';
import { AIChatbot } from '@/components/ai-chatbot';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Target, 
  TrendingUp, 
  Calendar,
  Dumbbell,
  Apple,
  Clock,
  Award
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Activity, label: 'Workouts This Week', value: '5', color: 'text-primary' },
    { icon: Target, label: 'Goals Completed', value: '3/5', color: 'text-accent' },
    { icon: TrendingUp, label: 'Weight Progress', value: '-2.5 kg', color: 'text-secondary' },
    { icon: Calendar, label: 'Streak', value: '12 days', color: 'text-gym-accent' }
  ];

  const recentWorkouts = [
    { name: 'Upper Body Strength', date: 'Today', duration: '45 min', calories: 320 },
    { name: 'HIIT Cardio', date: 'Yesterday', duration: '30 min', calories: 280 },
    { name: 'Lower Body Focus', date: '2 days ago', duration: '50 min', calories: 400 }
  ];

  const todaySchedule = [
    { time: '07:00', activity: 'Morning Cardio', type: 'workout' },
    { time: '12:00', activity: 'Protein Lunch', type: 'meal' },
    { time: '18:00', activity: 'Strength Training', type: 'workout' },
    { time: '20:00', activity: 'Recovery Dinner', type: 'meal' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, <span className="text-primary">Alex!</span>
            </h1>
            <p className="text-muted-foreground">
              Ready to crush your fitness goals today? Let's see your progress.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-card border-border card-shadow transition-smooth hover:transform hover:scale-105">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Workouts */}
            <Card className="p-6 bg-card border-border card-shadow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  Recent Workouts
                </h2>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {recentWorkouts.map((workout, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <h3 className="font-medium text-foreground">{workout.name}</h3>
                      <p className="text-sm text-muted-foreground">{workout.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{workout.duration}</p>
                      <p className="text-xs text-muted-foreground">{workout.calories} cal</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Today's Schedule */}
            <Card className="p-6 bg-card border-border card-shadow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  Today's Schedule
                </h2>
              </div>
              <div className="space-y-4">
                {todaySchedule.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-sm font-medium text-muted-foreground w-16">
                      {item.time}
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      item.type === 'workout' ? 'bg-primary' : 'bg-accent'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.activity}</p>
                      <p className="text-xs text-muted-foreground capitalize">{item.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-20 bg-primary hover:bg-primary/90 text-primary-foreground flex flex-col gap-2">
                <Dumbbell className="h-6 w-6" />
                Start Workout
              </Button>
              <Button variant="secondary" className="h-20 flex flex-col gap-2">
                <Apple className="h-6 w-6" />
                Log Meal
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Award className="h-6 w-6" />
                View Achievements
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AIChatbot />
    </div>
  );
};

export default Dashboard;