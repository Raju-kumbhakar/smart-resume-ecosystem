import { motion } from "framer-motion";
import { Shield, CheckCircle2, Clock, XCircle, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Verification = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration",
      status: "verified",
      verifiedBy: "Tech Expert - John Doe",
      date: "Jan 15, 2025",
    },
    {
      title: "AI Chatbot System",
      description: "NLP-powered chatbot using Python and TensorFlow",
      status: "pending",
      submittedDate: "Feb 1, 2025",
    },
    {
      title: "Mobile Weather App",
      description: "React Native app with real-time weather data",
      status: "rejected",
      reason: "Insufficient documentation",
      date: "Dec 20, 2024",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case "rejected":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      verified: "default",
      pending: "secondary",
      rejected: "destructive",
    };
    return variants[status] || "secondary";
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Project <span className="gradient-text">Verification</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Get your skills and projects verified by industry experts
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="glass">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Verified Projects</p>
                  <h3 className="text-2xl font-bold">8</h3>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Under Review</p>
                  <h3 className="text-2xl font-bold">3</h3>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Skill Score</p>
                  <h3 className="text-2xl font-bold">87/100</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Request Verification Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="glass glow">
            <CardContent className="p-8 text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Submit New Project</h3>
              <p className="text-muted-foreground mb-6">
                Upload your project for expert verification and boost your resume
              </p>
              <Button className="bg-gradient-primary glow" size="lg">
                Request Verification
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6">Your Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass hover:glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        {getStatusIcon(project.status)}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <Badge variant={getStatusBadge(project.status)}>
                              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">{project.description}</p>
                          
                          {project.status === "verified" && (
                            <div className="space-y-1">
                              <p className="text-sm text-green-500">✓ Verified by {project.verifiedBy}</p>
                              <p className="text-sm text-muted-foreground">on {project.date}</p>
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                                Auto-synced to Resume
                              </motion.div>
                            </div>
                          )}
                          
                          {project.status === "pending" && (
                            <p className="text-sm text-muted-foreground">
                              Submitted on {project.submittedDate}
                            </p>
                          )}
                          
                          {project.status === "rejected" && (
                            <div className="text-sm">
                              <p className="text-red-500">Reason: {project.reason}</p>
                              <p className="text-muted-foreground">{project.date}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" className="glass">
                        View Details
                      </Button>
                      {project.status === "rejected" && (
                        <Button className="bg-gradient-primary">
                          Resubmit
                        </Button>
                      )}
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

export default Verification;
