
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  imgUrl: string;
  genres: string[];
}

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden border-none bg-transparent relative h-[360px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        style={{ backgroundImage: `url(${movie.imgUrl})` }}
      />
      
      {/* Градиент наложение */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
      
      {/* Контент */}
      <CardContent className="relative h-full flex flex-col justify-end p-4 z-10">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="bg-[#9b87f5]/20 text-[#D6BCFA] border-[#9b87f5]/30">
            {movie.year}
          </Badge>
          <div className="flex items-center">
            <Icon name="Star" className="text-yellow-400 mr-1" size={14} />
            <span className="text-white text-sm">{movie.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg md:text-xl font-['Montserrat',sans-serif] font-bold text-white mb-1">
          {movie.title}
        </h3>
        
        <div className="mb-4">
          <p className="text-xs text-gray-300">{movie.genres.join(" • ")}</p>
        </div>
        
        {/* Кнопки появляются при наведении */}
        <div className={`flex gap-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button size="sm" className="bg-[#9b87f5] hover:bg-[#7E69AB] flex-1">
            <Icon name="Play" className="mr-2" size={14} />
            Смотреть
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 bg-[#2A2F3C]/80 hover:bg-[#2A2F3C]">
            <Icon name="Plus" size={14} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
