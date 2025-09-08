import { 
  Users, 
  Clock, 
  CreditCard, 
  TrendingUp, 
  GraduationCap, 
  MessageSquare,
  UserCheck,
  Shield,
  Bot,
  Heart
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Users,
    title: "Employee Database",
    description: "Comprehensive employee profiles with role management, document storage, and organizational hierarchy tracking.",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Attendance Management",
    description: "Smart attendance tracking with calendar views, leave management, and remote check-in capabilities.",
    color: "text-secondary"
  },
  {
    icon: CreditCard,
    title: "Payroll System",
    description: "Automated payroll processing with tax calculations, salary slips generation, and stipend management.",
    color: "text-accent"
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Real-time performance insights with goal tracking, feedback systems, and comprehensive reporting.",
    color: "text-success"
  },
  {
    icon: GraduationCap,
    title: "Training Portal",
    description: "Learning management with resource uploads, progress tracking, and automated certificate generation.",
    color: "text-warning"
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Integrated announcement system with chat functionality and email/SMS notification management.",
    color: "text-destructive"
  },
  {
    icon: UserCheck,
    title: "Exit Management",
    description: "Streamlined offboarding process with resignation handling, clearance tracking, and document automation.",
    color: "text-primary"
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Intelligent chatbot for instant HR support, policy queries, and automated routine task assistance.",
    color: "text-secondary"
  },
  {
    icon: Heart,
    title: "Wellness Tracking",
    description: "Employee wellness monitoring with health reminders, wellness insights, and work-life balance metrics.",
    color: "text-accent"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need to manage your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              workforce
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            From employee onboarding to performance management, our comprehensive suite 
            of tools helps you streamline every aspect of human resource management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 border-card-border bg-gradient-card">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-muted group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "50K+", label: "Employees Managed" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "500+", label: "Companies Trust Us" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}