
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
  year: number;
  rating: number;
  duration: string;
}

export const Hero = ({ title, description, imageUrl, year, rating, duration }: HeroProps) => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Фоновое изображение с затемнением */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Градиентное наложение */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-[#1A1F2C]/80 to-transparent" />
      
      {/* Контент */}
      <div className="container mx-auto px-4 relative h-full">
        <div className="absolute bottom-16 left-0 right-0 px-4 md:max-w-2xl">
          <Badge className="mb-4 bg-[#9b87f5]">Премьера</Badge>
          
          <h1 className="text-4xl md:text-5xl font-['Montserrat',sans-serif] font-bold mb-3 text-white">{title}</h1>
          
          <div className="flex items-center mb-4 text-sm text-gray-300 space-x-4">
            <span>{year}</span>
            <span className="flex items-center">
              <Icon name="Star" className="text-yellow-400 mr-1" size={16} />
              {rating}
            </span>
            <span>{duration}</span>
          </div>
          
          <p className="text-gray-300 mb-6 line-clamp-3">{description}</p>
          
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
              <Icon name="Play" className="mr-2" size={18} />
              Смотреть
            </Button>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Icon name="Plus" className="mr-2" size={18} />
              В избранное
            </Button>
            
            <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full bg-[#2A2F3C]/80 hover:bg-[#2A2F3C]">
              <Icon name="Info" size={18} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Индикатор скролла */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-white opacity-70" size={24} />
      </div>
    </div>
  );
};
