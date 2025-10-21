import { motion } from "framer-motion";
import { Sparkles, Target, Users, Zap } from "lucide-react";

const About = () => {
  const timeline = [
    {
      icon: Sparkles,
      title: "Smart Resume Core",
      description: "AI-powered resume that evolves with your achievements",
    },
    {
      icon: Target,
      title: "Internship Platform",
      description: "Find and track professional opportunities",
    },
    {
      icon: Zap,
      title: "Hackathon Hub",
      description: "Compete, innovate, and showcase your skills",
    },
    {
      icon: Users,
      title: "Learning Platform",
      description: "Access courses with instant verification",
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "Leveraging AI to transform career development",
    },
    {
      title: "Student Focused",
      description: "Built by developers, for aspiring developers",
    },
    {
      title: "Connected Growth",
      description: "One ecosystem for all your career activities",
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Smart Resume Ecosystem</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building the future of career development by connecting every aspect of your
            professional journey into one intelligent, AI-powered platform.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="glass rounded-3xl p-12 md:p-16 text-center glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To empower students and professionals by seamlessly connecting internships, hackathons,
              courses, and project verification into a single, intelligent resume ecosystem that adapts
              and grows with every achievement.
            </p>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">The Ecosystem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:glow transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold mb-3 gradient-text">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-12 glow-strong">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Revolution
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a community that's redefining career growth through AI-powered intelligence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-primary rounded-full text-lg font-semibold glow"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
