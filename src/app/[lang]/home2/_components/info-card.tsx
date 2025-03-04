import { Card, CardContent } from "@/components/ui/card";
import { History, Globe } from "lucide-react";

const icons = {
  history: History,
  globe: Globe,
};

interface InfoCardProps {
  title: string
  description: string
  IconComponent: React.ElementType
  variant: "default" | "hover"
}


export default function InfoCard({
  title,
  description,
  IconComponent,
  variant = "default",
}: InfoCardProps) {
  const hoverClass =
    variant === "hover" ? "hover:border-yellow-500 transition-colors text-center" : "";
  const iconSize = variant === "hover" ? "h-10 w-10 mx-auto" : "h-12 w-12";
  const textSize = variant === "hover" ? "text-lg" : "text-xl";
  const descSize = variant === "hover" ? "text-sm" : "";

  return (
    <Card className={`bg-[#111] border-[#333] text-white ${hoverClass}`}>
      <CardContent className="pt-6">
        <IconComponent className={`${iconSize} mb-4 text-yellow-500`} />
        <h3 className={`${textSize} font-bold mb-2 font-heading`}>{title}</h3>
        <p className={`text-gray-400 font-body ${descSize}`}>{description}</p>
      </CardContent>
    </Card>
  );
}