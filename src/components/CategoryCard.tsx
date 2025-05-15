
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Category {
  id: number;
  name: string;
  count: number;
  icon: string;
  color: string;
}

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="overflow-hidden border-none bg-[#2A2F3C] hover:bg-[#353B4B] transition-colors cursor-pointer group">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${category.color}20` }}
        >
          <Icon 
            name={category.icon} 
            size={24} 
            className="transition-colors"
            style={{ color: category.color }} 
          />
        </div>
        
        <h3 className="text-white font-medium mb-1">{category.name}</h3>
        <p className="text-xs text-gray-400">{category.count} фильмов</p>
      </CardContent>
    </Card>
  );
};
