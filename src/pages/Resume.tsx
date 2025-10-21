import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resume = () => {
  const [template, setTemplate] = useState("modern");

  const templates = [
    { id: "classic", name: "Classic" },
    { id: "compact", name: "Compact" },
    { id: "modern", name: "Modern" },
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
            AI-Powered <span className="gradient-text">Resume Builder</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Auto-synced with all your activities across platforms
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className="space-y-6">
            <Card className="glass">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">Your Information</h2>
                </div>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="glass" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="glass" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+1 234 567 8900" className="glass" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea
                      id="summary"
                      placeholder="Brief summary of your professional background..."
                      rows={4}
                      className="glass"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills</Label>
                    <Textarea
                      id="skills"
                      placeholder="React, TypeScript, Node.js, etc..."
                      rows={3}
                      className="glass"
                    />
                  </div>

                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 text-sm">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>Auto-synced: 24 skills, 5 projects, 3 certifications</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="glass sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Live Preview</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="glass">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" className="bg-gradient-primary glow">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                <Tabs value={template} onValueChange={setTemplate} className="mb-6">
                  <TabsList className="glass w-full">
                    {templates.map((t) => (
                      <TabsTrigger key={t.id} value={t.id} className="flex-1">
                        {t.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>

                {/* Resume Preview */}
                <motion.div
                  key={template}
                  initial={{ opacity: 0, rotateY: -10 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white text-black p-8 rounded-lg shadow-2xl min-h-[800px]"
                >
                  <div className="space-y-6">
                    <div className="text-center pb-6 border-b border-gray-300">
                      <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                      <p className="text-gray-600">Frontend Developer</p>
                      <p className="text-sm text-gray-500 mt-2">
                        john@example.com | +1 234 567 8900
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-3 text-purple-600">Professional Summary</h2>
                      <p className="text-gray-700 text-sm">
                        Passionate frontend developer with 2+ years of experience building modern web applications
                        using React, TypeScript, and Tailwind CSS. Proven track record in hackathons and project
                        development.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-3 text-purple-600">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {["React", "TypeScript", "Tailwind CSS", "Node.js", "Git"].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-3 text-purple-600">Experience</h2>
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold">Frontend Developer Intern</h3>
                          <p className="text-sm text-gray-600">TechCorp • Jun 2024 - Present</p>
                          <p className="text-sm text-gray-700 mt-1">
                            Building responsive web applications and improving user experience
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-3 text-purple-600">Achievements</h2>
                      <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                        <li>1st Place - AI Innovation Challenge 2024</li>
                        <li>Completed 12 verified online courses</li>
                        <li>8 verified projects by industry experts</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
