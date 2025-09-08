import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Clock, 
  CreditCard, 
  Calendar, 
  TrendingUp, 
  LogIn, 
  FileText, 
  GraduationCap,
  Target,
  Award,
  Coffee
} from "lucide-react"

const todayStats = [
  {
    title: "Check-in Time",
    value: "09:15 AM",
    description: "On time",
    icon: LogIn,
    status: "success"
  },
  {
    title: "Hours Worked",
    value: "6.5h",
    description: "1.5h remaining",
    icon: Clock,
    status: "normal"
  },
  {
    title: "Break Time",
    value: "45 min",
    description: "15 min remaining",
    icon: Coffee,
    status: "warning"
  }
]

const upcomingEvents = [
  { title: "Team Meeting", time: "2:00 PM", type: "meeting" },
  { title: "Project Deadline", time: "Tomorrow", type: "deadline" },
  { title: "Performance Review", time: "Friday", type: "review" }
]

const goals = [
  { title: "Complete React Training", progress: 75, deadline: "End of month" },
  { title: "Improve Code Quality Score", progress: 60, deadline: "Next week" },
  { title: "Team Collaboration Rating", progress: 90, deadline: "Ongoing" }
]

export default function EmployeeDashboard() {
  return (
    <DashboardLayout role="employee">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome Back, John! 👋</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your work today
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Request Leave
            </Button>
            <Button>
              <Clock className="mr-2 h-4 w-4" />
              Check Out
            </Button>
          </div>
        </div>

        {/* Today's Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          {todayStats.map((stat) => (
            <Card key={stat.title} className="border-card-border bg-gradient-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${
                  stat.status === 'success' ? 'text-success' :
                  stat.status === 'warning' ? 'text-warning' :
                  'text-muted-foreground'
                }`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${
                  stat.status === 'success' ? 'text-success' :
                  stat.status === 'warning' ? 'text-warning' :
                  'text-muted-foreground'
                }`}>
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Quick Actions & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button variant="outline" className="h-20 flex-col">
                    <FileText className="h-5 w-5 mb-2" />
                    <span className="text-xs">Pay Slip</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Calendar className="h-5 w-5 mb-2" />
                    <span className="text-xs">Leave</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Clock className="h-5 w-5 mb-2" />
                    <span className="text-xs">Attendance</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <TrendingUp className="h-5 w-5 mb-2" />
                    <span className="text-xs">Performance</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Goals Progress */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  My Goals
                </CardTitle>
                <CardDescription>Track your personal and professional objectives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {goals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{goal.title}</h4>
                      <span className="text-xs text-muted-foreground">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">Due: {goal.deadline}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest workplace interactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10">
                        <LogIn className="h-4 w-4 text-success" />
                      </div>
                      <div>
                        <p className="text-sm">Checked in at 09:15 AM</p>
                        <p className="text-xs text-muted-foreground">Today</p>
                      </div>
                    </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm">Completed "Advanced React" course</p>
                      <p className="text-xs text-muted-foreground">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                      <Award className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm">Received "Team Player" badge</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Upcoming</CardTitle>
                <CardDescription>Events and deadlines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg border border-card-border">
                    <div>
                      <p className="font-medium text-sm">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
                    </div>
                    <Badge variant={event.type === 'deadline' ? 'destructive' : 'secondary'}>
                      {event.type}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* This Month */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle>This Month</CardTitle>
                <CardDescription>March 2024 Summary</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold">22/23</div>
                  <p className="text-sm text-muted-foreground">Days Present</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-card-border">
                  <div className="text-center">
                    <div className="font-bold">184h</div>
                    <p className="text-xs text-muted-foreground">Total Hours</p>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">8.5/10</div>
                    <p className="text-xs text-muted-foreground">Performance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-lg font-bold">3/5</div>
                    <p className="text-sm text-muted-foreground">Courses Completed</p>
                  </div>
                  <Button className="w-full" size="sm">
                    Continue Learning
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}