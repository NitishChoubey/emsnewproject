import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Clock, CreditCard, TrendingUp, UserPlus, FileText, AlertCircle, CheckCircle2 } from "lucide-react"

const stats = [
  {
    title: "Total Employees",
    value: "1,247",
    change: "+12%",
    changeType: "positive",
    icon: Users,
    description: "Active employees"
  },
  {
    title: "Attendance Rate",
    value: "96.4%",
    change: "+2.1%",
    changeType: "positive",
    icon: Clock,
    description: "This month"
  },
  {
    title: "Payroll Processed",
    value: "$2.4M",
    change: "+8.2%",
    changeType: "positive",
    icon: CreditCard,
    description: "Monthly payroll"
  },
  {
    title: "Performance Score",
    value: "8.7/10",
    change: "+0.3",
    changeType: "positive",
    icon: TrendingUp,
    description: "Average score"
  }
]

const recentActivities = [
  {
    id: 1,
    type: "employee",
    message: "New employee Sarah Johnson joined Marketing Department",
    time: "2 hours ago",
    icon: UserPlus
  },
  {
    id: 2,
    type: "approval",
    message: "Leave request from John Doe requires approval",
    time: "4 hours ago",
    icon: AlertCircle
  },
  {
    id: 3,
    type: "payroll",
    message: "Monthly payroll for March 2024 has been processed",
    time: "1 day ago",
    icon: CheckCircle2
  },
  {
    id: 4,
    type: "report",
    message: "Q1 Performance report is ready for review",
    time: "2 days ago",
    icon: FileText
  }
]

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your organization's workforce and operations
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Employee
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-card-border bg-gradient-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className={`font-medium ${
                    stat.changeType === 'positive' ? 'text-success' : 'text-destructive'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="ml-1">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Recent Activities */}
          <Card className="lg:col-span-2 border-card-border bg-gradient-card">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                Latest updates and notifications from your organization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <activity.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm leading-none">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full mt-4">
                View All Activities
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-card-border bg-gradient-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Frequently used administrative functions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Manage Employees
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Clock className="mr-2 h-4 w-4" />
                Attendance Reports
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <CreditCard className="mr-2 h-4 w-4" />
                Process Payroll
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                Performance Reviews
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Generate Reports
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Pending Approvals */}
        <Card className="border-card-border bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              Pending Approvals
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs font-medium text-destructive-foreground">
                3
              </span>
            </CardTitle>
            <CardDescription>
              Items requiring your immediate attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: "Leave Request", employee: "John Doe", department: "Engineering", urgency: "high" },
                { type: "Expense Report", employee: "Sarah Johnson", department: "Marketing", urgency: "medium" },
                { type: "Performance Review", employee: "Mike Wilson", department: "Sales", urgency: "low" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-card-border">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      item.urgency === 'high' ? 'bg-destructive' : 
                      item.urgency === 'medium' ? 'bg-warning' : 'bg-success'
                    }`} />
                    <div>
                      <p className="font-medium">{item.type}</p>
                      <p className="text-sm text-muted-foreground">{item.employee} - {item.department}</p>
                    </div>
                  </div>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline">Reject</Button>
                    <Button size="sm">Approve</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}