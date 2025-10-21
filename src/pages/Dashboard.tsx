import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Trophy,
  BookOpen,
  Shield,
  FileText,
  TrendingUp,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const stats = [
    { label: "Verified Skills", value: "24", icon: Shield, color: "text-secondary" },
    { label: "Ongoing Projects", value: "5", icon: Clock, color: "text-primary" },
    { label: "Completed Courses", value: "12", icon: CheckCircle2, color: "text-accent" },
    { label: "Resume Updates", value: "156", icon: TrendingUp, color: "text-primary" },
  ];

  const platforms = [
    {
      title: "Internships & Training",
      icon: Briefcase,
      description: "Track your internships and professional training",
      link: "/internships",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Hackathons",
      icon: Trophy,
      description: "Compete and showcase your achievements",
      link: "/hackathons",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Online Courses",
      icon: BookOpen,
      description: "Learn new skills with verified certifications",
      link: "/courses",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Project Verification",
      icon: Shield,
      description: "Get your skills and projects verified",
      link: "/verification",
      color: "from-orange-500 to-red-500",
    },
  ];

  const recentActivities = [
    { title: "Completed React Masterclass", time: "2 hours ago", type: "course" },
    { title: "Submitted Hackathon Project", time: "1 day ago", type: "hackathon" },
    { title: "Started Frontend Internship", time: "3 days ago", type: "internship" },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome Back, <span className="gradient-text">Student</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Your AI-powered career ecosystem at a glance
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass hover:glow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Platform Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Your Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <Link key={index} to={platform.link}>
                <Card className="glass hover:glow transition-all duration-300 group cursor-pointer h-full">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{platform.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{platform.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity & Resume Preview */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Resume Sync Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Overall Progress</span>
                  <span className="text-sm font-semibold">87%</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Skills Synced</span>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Experience Updated</span>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Projects Verified</span>
                  <Clock className="w-4 h-4 text-yellow-500" />
                </div>
              </div>
              <Link to="/resume">
                <Button className="w-full bg-gradient-primary glow mt-4">
                  View Full Resume
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
