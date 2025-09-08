import { ReactNode } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { 
  Building2, 
  Home, 
  Users, 
  Clock, 
  CreditCard, 
  TrendingUp, 
  GraduationCap, 
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  BarChart3,
  UserCheck,
  Calendar,
  Bell,
  Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: ReactNode
  role: "admin" | "employee" | "intern" | "manager"
}

const navigationByRole = {
  admin: [
    { name: "Dashboard", href: "/dashboard/admin", icon: Home },
    { name: "Employees", href: "/dashboard/admin/employees", icon: Users },
    { name: "Attendance", href: "/dashboard/admin/attendance", icon: Clock },
    { name: "Payroll", href: "/dashboard/admin/payroll", icon: CreditCard },
    { name: "Performance", href: "/dashboard/admin/performance", icon: TrendingUp },
    { name: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
    { name: "Reports", href: "/dashboard/admin/reports", icon: TrendingUp },
  ],
  employee: [
    { name: "Dashboard", href: "/dashboard/employee", icon: Home },
    { name: "My Profile", href: "/dashboard/employee/profile", icon: Users },
    { name: "Attendance", href: "/dashboard/employee/attendance", icon: Clock },
    { name: "Payroll", href: "/dashboard/employee/payroll", icon: CreditCard },
    { name: "Leave Request", href: "/dashboard/employee/leave", icon: Calendar },
    { name: "Training", href: "/dashboard/employee/training", icon: GraduationCap },
  ],
  intern: [
    { name: "Dashboard", href: "/dashboard/intern", icon: Home },
    { name: "My Tasks", href: "/dashboard/intern/tasks", icon: UserCheck },
    { name: "Progress", href: "/dashboard/intern/progress", icon: TrendingUp },
    { name: "Learning", href: "/dashboard/intern/learning", icon: GraduationCap },
    { name: "Certificates", href: "/dashboard/intern/certificates", icon: GraduationCap },
  ],
  manager: [
    { name: "Dashboard", href: "/dashboard/manager", icon: Home },
    { name: "My Team", href: "/dashboard/manager/team", icon: Users },
    { name: "Task Management", href: "/dashboard/manager/tasks", icon: UserCheck },
    { name: "Performance", href: "/dashboard/manager/performance", icon: TrendingUp },
    { name: "Approvals", href: "/dashboard/manager/approvals", icon: Clock },
  ],
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { toast } = useToast()
  
  const navigation = navigationByRole[role]
  
  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    })
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden",
        sidebarOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 z-50 w-72 bg-sidebar border-r border-sidebar-border">
          <div className="flex h-16 items-center justify-between px-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-sidebar-foreground">EMS Pro</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="mt-6 px-3">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 mb-1 text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col bg-sidebar border-r border-sidebar-border">
          <div className="flex h-16 shrink-0 items-center px-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-sidebar-foreground">EMS Pro</span>
            </Link>
          </div>
          
          <nav className="flex flex-1 flex-col px-3 mt-6">
            <ul role="list" className="flex flex-1 flex-col gap-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive 
                          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
            
            <div className="mt-6 pb-4 space-y-1">
              <Link
                to="/dashboard/settings"
                className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="w-full justify-start space-x-3 text-sidebar-foreground hover:bg-sidebar-accent/50 h-auto py-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top header */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-background/95 backdrop-blur-sm px-4 sm:gap-x-6 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="h-6 w-px bg-border lg:hidden" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="relative flex flex-1 items-center">
              <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-10 w-full max-w-sm"
              />
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <ThemeToggle />
              <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-border" />
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-gradient-hero" />
                <div className="hidden lg:block">
                  <p className="text-sm font-medium capitalize">{role}</p>
                  <p className="text-xs text-muted-foreground">user@company.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="py-8">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}