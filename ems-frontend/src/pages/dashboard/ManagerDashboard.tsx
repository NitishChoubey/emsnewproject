import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  UserCheck, 
  Calendar,
  AlertTriangle,
  Target,
  FileText,
  MessageSquare,
  Plus,
  Filter
} from "lucide-react"

const teamStats = [
  {
    title: "Team Size",
    value: "12",
    change: "+2 this month",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Active Projects",
    value: "8",
    change: "3 due this week",
    icon: Target,
    color: "text-secondary"
  },
  {
    title: "Team Performance",
    value: "92%",
    change: "+5% from last month",
    icon: TrendingUp,
    color: "text-success"
  },
  {
    title: "Pending Reviews",
    value: "4",
    change: "2 overdue",
    icon: FileText,
    color: "text-warning"
  }
]

const teamMembers = [
  { name: "Alice Johnson", role: "Senior Developer", performance: 95, status: "active", tasks: 8 },
  { name: "Bob Smith", role: "Frontend Developer", performance: 88, status: "active", tasks: 6 },
  { name: "Carol Wilson", role: "UX Designer", performance: 91, status: "on-leave", tasks: 4 },
  { name: "David Brown", role: "Backend Developer", performance: 87, status: "active", tasks: 7 },
  { name: "Eva Davis", role: "QA Engineer", performance: 93, status: "active", tasks: 5 }
]

const pendingApprovals = [
  { 
    type: "Leave Request", 
    employee: "Alice Johnson", 
    details: "Vacation leave - March 25-29",
    urgency: "medium",
    submitted: "2 hours ago"
  },
  { 
    type: "Expense Report", 
    employee: "Bob Smith", 
    details: "Client meeting expenses - $245",
    urgency: "low",
    submitted: "1 day ago"
  },
  { 
    type: "Performance Review", 
    employee: "Carol Wilson", 
    details: "Q1 2024 Performance Assessment",
    urgency: "high",
    submitted: "3 days ago"
  },
  { 
    type: "Budget Request", 
    employee: "David Brown", 
    details: "Additional software licenses - $1,200",
    urgency: "high",
    submitted: "1 week ago"
  }
]

const upcomingDeadlines = [
  { project: "E-commerce Redesign", deadline: "March 28", progress: 85, team: ["Alice", "Bob", "Carol"] },
  { project: "API Integration", deadline: "April 2", progress: 65, team: ["David", "Eva"] },
  { project: "Mobile App Update", deadline: "April 8", progress: 40, team: ["Alice", "Carol"] }
]

export default function ManagerDashboard() {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Manager Dashboard</h1>
            <p className="text-muted-foreground">
              Oversee your team's performance and manage approvals
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Assign Task
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamStats.map((stat) => (
            <Card key={stat.title} className="border-card-border bg-gradient-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Team Management */}
          <div className="lg:col-span-2 space-y-6">
            {/* Team Performance */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      Team Overview
                    </CardTitle>
                    <CardDescription>Monitor your team members' performance and workload</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-card-border">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-hero" />
                      <div>
                        <h4 className="font-medium">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-sm font-medium">{member.performance}%</div>
                        <div className="text-xs text-muted-foreground">Performance</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm font-medium">{member.tasks}</div>
                        <div className="text-xs text-muted-foreground">Tasks</div>
                      </div>
                      
                      <Badge variant={member.status === 'active' ? 'default' : 'secondary'}>
                        {member.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Project Deadlines */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Upcoming Deadlines
                </CardTitle>
                <CardDescription>Projects requiring attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingDeadlines.map((project, index) => (
                  <div key={index} className="space-y-3 p-4 rounded-lg border border-card-border">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{project.project}</h4>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{project.deadline}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Progress</span>
                        <span className="text-sm font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {project.team.map((member, idx) => (
                          <div key={idx} className="h-6 w-6 rounded-full bg-gradient-hero border-2 border-background" />
                        ))}
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Pending Approvals */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  Pending Approvals
                  <Badge variant="destructive" className="ml-2">
                    {pendingApprovals.length}
                  </Badge>
                </CardTitle>
                <CardDescription>Items requiring your approval</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {pendingApprovals.map((approval, index) => (
                  <div key={index} className="p-3 rounded-lg border border-card-border space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          approval.urgency === 'high' ? 'bg-destructive' : 
                          approval.urgency === 'medium' ? 'bg-warning' : 'bg-success'
                        }`} />
                        <span className="font-medium text-sm">{approval.type}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{approval.employee}</p>
                    <p className="text-xs">{approval.details}</p>
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">Reject</Button>
                      <Button size="sm" className="flex-1">Approve</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used manager functions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <UserCheck className="mr-2 h-4 w-4" />
                  Schedule 1-on-1s
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Performance Reviews
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Team Announcements
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Plan Sprint
                </Button>
              </CardContent>
            </Card>

            {/* Team Metrics */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Team Metrics</CardTitle>
                <CardDescription>This month's performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">94%</div>
                    <p className="text-xs text-muted-foreground">Task Completion</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">4.8</div>
                    <p className="text-xs text-muted-foreground">Avg Rating</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Team Productivity</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                
                <div className="pt-4 border-t border-card-border">
                  <div className="flex items-center text-sm">
                    <TrendingUp className="mr-2 h-4 w-4 text-success" />
                    <span className="text-success">+8.2%</span>
                    <span className="ml-1 text-muted-foreground">from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="border-card-border bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-2 bg-warning/10 border border-warning/20 rounded-lg">
                  <p className="text-sm font-medium">2 overdue performance reviews</p>
                  <p className="text-xs text-muted-foreground">Action required by Friday</p>
                </div>
                <div className="p-2 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm font-medium">New team member starting Monday</p>
                  <p className="text-xs text-muted-foreground">Prepare onboarding materials</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}