import { ArrowRight, CheckCircle, Users, BarChart3, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import heroImage from "@/assets/hero-image.jpg"

const features = [
  { icon: Users, text: "Streamlined Employee Management" },
  { icon: Clock, text: "Automated Attendance Tracking" },
  { icon: BarChart3, text: "Real-time Analytics & Reports" },
  { icon: Shield, text: "Secure & Compliant Platform" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="block">Smart Employee</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Management
              </span>
              <span className="block">for a Smarter Workplace</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Transform your HR processes with our comprehensive Employee Management System. 
              Streamline operations, boost productivity, and empower your workforce with 
              intelligent automation and insights.
            </p>

            {/* Features grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground/80">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group" asChild>
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/login">
                  Sign In
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>No Setup Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Free 14-day Trial</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-card shadow-2xl">
              <img
                src={heroImage}
                alt="EMS Pro Dashboard Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-card-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <Users className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-medium">1,247</p>
                  <p className="text-xs text-muted-foreground">Active Employees</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card border border-card-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">98.5%</p>
                  <p className="text-xs text-muted-foreground">Attendance Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}