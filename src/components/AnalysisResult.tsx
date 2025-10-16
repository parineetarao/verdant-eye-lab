import { AlertCircle, CheckCircle2, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnalysisResultProps {
  result: {
    status: "healthy" | "diseased";
    confidence: number;
    disease_name?: string | null;
    description: string;
    recommendations: string[];
  };
}

export const AnalysisResult = ({ result }: AnalysisResultProps) => {
  const isHealthy = result.status === "healthy";

  return (
    <Card className="w-full animate-fade-in shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {isHealthy ? (
              <CheckCircle2 className="w-6 h-6 text-primary" />
            ) : (
              <AlertCircle className="w-6 h-6 text-destructive" />
            )}
            <span>Analysis Result</span>
          </CardTitle>
          <Badge 
            variant={isHealthy ? "default" : "destructive"}
            className="text-sm"
          >
            {result.confidence}% Confidence
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
            <Leaf className="w-5 h-5 text-primary" />
            Status: {isHealthy ? "Healthy" : result.disease_name || "Disease Detected"}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {result.description}
          </p>
        </div>

        {result.recommendations && result.recommendations.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">
              {isHealthy ? "Care Tips:" : "Treatment Recommendations:"}
            </h4>
            <ul className="space-y-2">
              {result.recommendations.map((rec, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
