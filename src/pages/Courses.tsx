import { motion } from "framer-motion";
import { BookOpen, Play, CheckCircle2, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Courses = () => {
  const activeCourses = [
    {
      title: "Advanced React Patterns",
      instructor: "Sarah Johnson",
      progress: 75,
      lessons: "12/16",
    },
    {
      title: "TypeScript Mastery",
      instructor: "Mike Chen",
      progress: 45,
      lessons: "8/18",
    },
  ];

  const completedCourses = [
    {
      title: "Frontend Development Bootcamp",
      instructor: "Emily Davis",
      completedDate: "Jan 2025",
      certificate: true,
    },
    {
      title: "UI/UX Design Fundamentals",
      instructor: "Alex Turner",
      completedDate: "Dec 2024",
      certificate: true,
    },
    {
      title: "Git & GitHub Essentials",
      instructor: "Robert Kim",
      completedDate: "Nov 2024",
      certificate: true,
    },
  ];

  const recommendedCourses = [
    {
      title: "Next.js 14 Complete Guide",
      instructor: "Jessica Williams",
      duration: "12 hours",
      level: "Intermediate",
    },
    {
      title: "Node.js Backend Development",
      instructor: "David Brown",
      duration: "15 hours",
      level: "Advanced",
    },
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
            <span className="gradient-text">Online Courses</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Learn, grow, and earn verified certifications
          </p>
        </motion.div>

        <Tabs defaultValue="active" className="space-y-8">
          <TabsList className="glass">
            <TabsTrigger value="active">Active Courses</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {activeCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass hover:glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress: {course.lessons} lessons</span>
                            <span className="font-semibold">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <div className="flex gap-3">
                          <Button className="bg-gradient-primary glow">
                            <Play className="w-4 h-4 mr-2" />
                            Continue Learning
                          </Button>
                          <Button variant="outline" className="glass">
                            Sync to Resume
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass hover:glow transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-3">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4" />
                          Completed {course.completedDate}
                        </div>
                        {course.certificate && (
                          <Button variant="outline" className="w-full glass">
                            View Certificate
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommended" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {recommendedCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass hover:glow transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                        <BookOpen className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span>{course.level}</span>
                      </div>
                      <Button className="w-full bg-gradient-primary glow">
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Courses;
