import { motion } from "framer-motion";
import { Trophy, Users, Calendar, Award, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hackathons = () => {
  const upcomingHackathons = [
    {
      title: "AI Innovation Challenge 2025",
      organizer: "TechGiants Inc",
      date: "Mar 15-17, 2025",
      participants: 2500,
      prize: "$50,000",
    },
    {
      title: "Web3 Hackathon",
      organizer: "Blockchain Alliance",
      date: "Apr 1-3, 2025",
      participants: 1800,
      prize: "$30,000",
    },
    {
      title: "Green Tech Solutions",
      organizer: "EcoTech Foundation",
      date: "Apr 20-22, 2025",
      participants: 1200,
      prize: "$25,000",
    },
  ];

  const mySubmissions = [
    {
      title: "Smart City Dashboard",
      hackathon: "Urban Tech 2024",
      status: "Winner",
      rank: "1st Place",
    },
    {
      title: "AI Study Assistant",
      hackathon: "EdTech Challenge",
      status: "Finalist",
      rank: "Top 10",
    },
  ];

  const leaderboard = [
    { rank: 1, name: "CodeMasters", score: 2845, avatar: "🏆" },
    { rank: 2, name: "Tech Titans", score: 2720, avatar: "🥈" },
    { rank: 3, name: "Innovation Squad", score: 2650, avatar: "🥉" },
  ];

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Hackathons</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Compete, innovate, and showcase your skills
          </p>
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="glass glow-strong">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Trophy className="w-6 h-6 text-accent" />
                Global Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{entry.avatar}</span>
                      <div>
                        <p className="font-semibold text-lg">{entry.name}</p>
                        <p className="text-sm text-muted-foreground">Rank #{entry.rank}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{entry.score}</p>
                      <p className="text-xs text-muted-foreground">Points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* My Submissions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Your Submissions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mySubmissions.map((submission, index) => (
              <Card key={index} className="glass hover:glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{submission.title}</CardTitle>
                    <Badge
                      variant={submission.status === "Winner" ? "default" : "secondary"}
                      className={submission.status === "Winner" ? "bg-gradient-primary" : ""}
                    >
                      {submission.rank}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{submission.hackathon}</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Hackathons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Upcoming Hackathons</h2>
          <div className="grid gap-6">
            {upcomingHackathons.map((hackathon, index) => (
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
                        <h3 className="text-xl font-semibold mb-2">{hackathon.title}</h3>
                        <p className="text-muted-foreground mb-3">{hackathon.organizer}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {hackathon.date}
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            {hackathon.participants} participants
                          </div>
                          <div className="flex items-center gap-1 text-accent font-semibold">
                            <Award className="w-4 h-4" />
                            {hackathon.prize}
                          </div>
                        </div>
                      </div>
                      <Button className="bg-gradient-primary glow group-hover:scale-105 transition-transform">
                        Join Hackathon
                      </Button>
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

export default Hackathons;
