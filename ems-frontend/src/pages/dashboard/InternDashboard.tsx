import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Trophy, 
  Target, 
  BookOpen, 
  Award, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Star,
  Download,
  TrendingUp,
  Users,
  Zap
} from "lucide-react"

const badges = [
  { name: "Quick Learner", icon: Zap, color: "text-yellow-500", earned: true },
  { name: "Team Player", icon: Users, color: "text-blue-500", earned: true },
  { name: "Goal Crusher", icon: Target, color: "text-green-500", earned: true },
  { name: "Code Master", icon: Award, color: "text-purple-500", earned: false },
  { name: "Innovation Star", icon: Star, color: "text-orange-500", earned: false },
  { name: "Leadership", icon: Trophy, color: "text-red-500", earned: false }
]

const dailyTasks = [
  { id: 1, title: "Complete React Component Tutorial", status: "completed", priority: "high" },
  { id: 2, title: "Review Code with Mentor", status: "in-progress", priority: "medium" },
  { id: 3, title: "Update Project Documentation", status: "pending", priority: "low" },
  { id: 4, title: "Attend Team Standup Meeting", status: "completed", priority: "high" }
]

const learningModules = [
  { title: "JavaScript Fundamentals", progress: 100, status: "completed" },
  { title: "React Development", progress: 75, status: "in-progress" },
  { title: "Git & Version Control", progress: 90, status: "in-progress" },
  { title: "API Integration", progress: 30, status: "pending" }
]

export default function InternDashboard() {
  const completedTasks = dailyTasks.filter(task => task.status === 'completed').length
  const totalTasks = dailyTasks.length
  const completionRate = Math.round((completedTasks / totalTasks) * 100)

  return (
    <DashboardLayout role="intern">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Intern Dashboard 🚀</h1>
            <p className="text-muted-foreground">
              Track your internship progress and achievements
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Certificate
            </Button>
            <Button>
              <BookOpen className="mr-2 h-4 w-4" />
              Continue Learning
            </Button>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-card-border bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Internship Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">2 months remaining</p>
            </CardContent>
          </Card>

          <Card className="border-card-border bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedTasks}/{totalTasks}</div>
              <p className="text-xs text-muted-foreground">{completionRate}% completion rate</p>
            </CardContent>
          </Card>

          <Card className="border-card-border bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
              <Award className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3/6</div>
              <p className="text-xs text-muted-foreground">50% achievement rate</p>
            </CardContent>
          </Card>

          <Card className="border-card-border bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Score</CardTitle>
              <Star className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.7/10</div>
              <p className="text-xs text-success">Excellent progress!</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily Tasks */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Today's Tasks
                </CardTitle>
                <CardDescription>Your daily learning and project tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {dailyTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 rounded-lg border border-card-border">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        task.status === 'completed' ? 'bg-success' : 
                        task.status === 'in-progress' ? 'bg-warning' : 'bg-muted-foreground'
                      }`} />
                      <div>
                        <p className={`font-medium text-sm ${task.status === 'completed' ? 'line-through text-muted-foreground' : ''}`}>
                          {task.title}
                        </p>
                        <Badge variant={
                          task.priority === 'high' ? 'destructive' : 
                          task.priority === 'medium' ? 'default' : 'secondary'
                        } className="text-xs">
                          {task.priority}
                        </Badge>
                      </div>
                    </div>
                    {task.status !== 'completed' && (
                      <Button size="sm" variant="outline">
                        {task.status === 'in-progress' ? 'Continue' : 'Start'}
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learning Modules
                </CardTitle>
                <CardDescription>Track your skill development progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {learningModules.map((module, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{module.title}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">{module.progress}%</span>
                        {module.status === 'completed' && <CheckCircle className="h-4 w-4 text-success" />}
                      </div>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Weekly Timeline */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  This Week's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { day: "Monday", activity: "React Components Deep Dive", time: "2:00 PM - 4:00 PM" },
                    { day: "Tuesday", activity: "Code Review with Mentor", time: "10:00 AM - 11:00 AM" },
                    { day: "Wednesday", activity: "Team Project Meeting", time: "3:00 PM - 4:00 PM" },
                    { day: "Thursday", activity: "API Integration Workshop", time: "1:00 PM - 3:00 PM" },
                    { day: "Friday", activity: "Weekly Presentation", time: "4:00 PM - 5:00 PM" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <p className="font-medium text-sm">{item.activity}</p>
                        <p className="text-xs text-muted-foreground">{item.day} • {item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Achievement Badges */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5" />
                  Achievements
                </CardTitle>
                <CardDescription>Badges you've earned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {badges.map((badge, index) => (
                    <div key={index} className="text-center">
                      <div className={`flex h-12 w-12 mx-auto items-center justify-center rounded-lg ${
                        badge.earned ? 'bg-primary/10' : 'bg-muted/30'
                      }`}>
                        <badge.icon className={`h-6 w-6 ${badge.earned ? badge.color : 'text-muted-foreground'}`} />
                      </div>
                      <p className={`text-xs mt-1 ${badge.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {badge.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mentor Feedback */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Latest Feedback</CardTitle>
                <CardDescription>From your mentor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm">"Great progress on the React project! Your code quality has improved significantly."</p>
                    <p className="text-xs text-muted-foreground mt-2">- Sarah Johnson, Senior Developer</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Rating:</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`h-4 w-4 ${star <= 4 ? 'text-warning fill-warning' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Internship Timeline */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Internship Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Started</span>
                    <span className="text-sm text-muted-foreground">Jan 15, 2024</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Completion</span>
                    <span className="text-sm text-muted-foreground">May 15, 2024</span>
                  </div>
                  
                  <div className="pt-4 border-t border-card-border">
                    <div className="text-center">
                      <div className="text-lg font-bold">58 days</div>
                      <p className="text-xs text-muted-foreground">remaining</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" size="sm">
                  <Clock className="mr-2 h-4 w-4" />
                  Log Hours
                </Button>
                <Button className="w-full justify-start" variant="outline" size="sm">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Resources
                </Button>
                <Button className="w-full justify-start" variant="outline" size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  Contact Mentor
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}