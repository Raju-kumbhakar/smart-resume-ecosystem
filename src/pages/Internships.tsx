import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Internships = () => {
  const availableInternships = [
    {
      role: "Frontend Developer Intern",
      company: "TechCorp",
      location: "Remote",
      duration: "3 months",
      techStack: ["React", "TypeScript", "Tailwind"],
    },
    {
      role: "Full Stack Intern",
      company: "StartupXYZ",
      location: "Hybrid",
      duration: "6 months",
      techStack: ["Node.js", "React", "MongoDB"],
    },
    {
      role: "UI/UX Design Intern",
      company: "DesignHub",
      location: "On-site",
      duration: "4 months",
      techStack: ["Figma", "Adobe XD", "Prototyping"],
    },
  ];

  const ongoingTraining = [
    {
      title: "React Advanced Patterns",
      progress: 65,
      company: "Meta Learning",
    },
    {
      title: "Cloud Computing Basics",
      progress: 40,
      company: "AWS Academy",
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
            <span className="gradient-text">Internships</span> & Training
          </h1>
          <p className="text-muted-foreground text-lg">
            Find opportunities and track your professional growth
          </p>
        </motion.div>

        {/* Ongoing Training */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Ongoing Training</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ongoingTraining.map((training, index) => (
              <Card key={index} className="glass">
                <CardHeader>
                  <CardTitle className="text-lg">{training.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{training.company}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-semibold">{training.progress}%</span>
                    </div>
                    <Progress value={training.progress} className="h-2" />
                  </div>
                  <Button className="w-full mt-4 bg-gradient-primary glow">
                    Continue Training
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Available Internships */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6">Available Internships</h2>
          <div className="grid gap-6">
            {availableInternships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass hover:glow transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{internship.role}</h3>
                            <p className="text-muted-foreground mb-3">{internship.company}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {internship.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {internship.duration}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {internship.techStack.map((tech, i) => (
                                <Badge key={i} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button className="bg-gradient-primary glow group-hover:scale-105 transition-transform">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" className="glass">
                          Sync to Resume
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Internships;
