import { Button } from "@/components/ui/button";

const JoinSection = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Ranks</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Ready to become part of an elite team? We're always looking for dedicated agents to join our ranks.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JoinSection;