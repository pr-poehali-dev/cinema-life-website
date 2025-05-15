
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Добавляем эффект тени при скролле
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <nav 
      className={`sticky top-0 z-50 w-full py-4 transition-all duration-300 ${
        isScrolled ? 'bg-[#1A1F2C]/95 backdrop-blur-sm shadow-md' : 'bg-gradient-to-b from-[#1A1F2C] to-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center">
            <Icon name="FilmIcon" className="text-[#9b87f5] mr-2" size={24} />
            <span className="text-xl font-['Montserrat',sans-serif] font-bold text-white">Cinema Life</span>
          </div>

          {/* Навигация для десктопа */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">Главная</a>
            <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">Фильмы</a>
            <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">Сериалы</a>
            <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">Новинки</a>
            <a href="#" className="text-white hover:text-[#9b87f5] transition-colors">Подборки</a>
          </div>

          {/* Кнопки действий */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex relative">
              <Input 
                placeholder="Поиск фильмов..." 
                className="bg-[#2A2F3C] border-none text-white focus-visible:ring-[#9b87f5] pr-10 w-[200px]"
              />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                <Icon name="Search" size={18} />
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Search" />
            </Button>
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] hidden md:flex">
              Войти
            </Button>
            
            {/* Мобильное меню */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1A1F2C] text-white border-l border-[#2A2F3C]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <Icon name="FilmIcon" className="text-[#9b87f5] mr-2" size={24} />
                    <span className="text-xl font-['Montserrat',sans-serif] font-bold">Cinema Life</span>
                  </div>
                  
                  <Input 
                    placeholder="Поиск фильмов..." 
                    className="bg-[#2A2F3C] border-none text-white focus-visible:ring-[#9b87f5] mb-6"
                  />
                  
                  <div className="flex flex-col space-y-4">
                    <a href="#" className="text-white hover:text-[#9b87f5] py-2 transition-colors">Главная</a>
                    <a href="#" className="text-white hover:text-[#9b87f5] py-2 transition-colors">Фильмы</a>
                    <a href="#" className="text-white hover:text-[#9b87f5] py-2 transition-colors">Сериалы</a>
                    <a href="#" className="text-white hover:text-[#9b87f5] py-2 transition-colors">Новинки</a>
                    <a href="#" className="text-white hover:text-[#9b87f5] py-2 transition-colors">Подборки</a>
                  </div>
                  
                  <Separator className="my-6 bg-[#2A2F3C]" />
                  
                  <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] w-full mt-auto">
                    Войти
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
