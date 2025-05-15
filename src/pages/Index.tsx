
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MovieCard } from "@/components/MovieCard";
import { CategoryCard } from "@/components/CategoryCard";

const popularMovies = [
  {
    id: 1,
    title: "Дюна: Часть вторая",
    year: 2024,
    rating: 8.4,
    imgUrl: "https://images.unsplash.com/photo-1634157703702-3c124b455499?q=80&w=1888&auto=format&fit=crop",
    genres: ["Фантастика", "Приключения"]
  },
  {
    id: 2,
    title: "Оппенгеймер",
    year: 2023,
    rating: 8.5,
    imgUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop",
    genres: ["Биография", "Драма", "История"]
  },
  {
    id: 3,
    title: "Убийцы цветочной луны",
    year: 2023,
    rating: 7.9,
    imgUrl: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2067&auto=format&fit=crop",
    genres: ["Драма", "Криминал"]
  },
  {
    id: 4,
    title: "Бедные-несчастные",
    year: 2024,
    rating: 7.5,
    imgUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    genres: ["Комедия", "Фэнтези"]
  },
  {
    id: 5,
    title: "Анатомия падения",
    year: 2023,
    rating: 7.7,
    imgUrl: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?q=80&w=1740&auto=format&fit=crop",
    genres: ["Драма", "Триллер"]
  },
  {
    id: 6,
    title: "Зона интересов",
    year: 2023,
    rating: 7.8,
    imgUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1770&auto=format&fit=crop",
    genres: ["Драма", "Военный"]
  }
];

const newMovies = [
  {
    id: 7,
    title: "Гнев человеческий",
    year: 2023,
    rating: 7.6,
    imgUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    genres: ["Боевик", "Триллер"]
  },
  {
    id: 8,
    title: "Тихое место 2",
    year: 2023,
    rating: 7.3,
    imgUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1770&auto=format&fit=crop",
    genres: ["Ужасы", "Фантастика"]
  },
  {
    id: 9,
    title: "Черная вдова",
    year: 2023,
    rating: 7.1,
    imgUrl: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop",
    genres: ["Боевик", "Приключения"]
  },
  {
    id: 10,
    title: "Круэлла",
    year: 2023,
    rating: 7.4,
    imgUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop",
    genres: ["Комедия", "Криминал"]
  }
];

const categories = [
  { id: 1, name: "Боевики", count: 254, icon: "Sword", color: "#F97316" },
  { id: 2, name: "Комедии", count: 176, icon: "Laugh", color: "#8B5CF6" },
  { id: 3, name: "Драмы", count: 321, icon: "TheatreMasks", color: "#0EA5E9" },
  { id: 4, name: "Фантастика", count: 189, icon: "Rocket", color: "#F43F5E" },
  { id: 5, name: "Ужасы", count: 142, icon: "Skull", color: "#10B981" },
  { id: 6, name: "Мультфильмы", count: 98, icon: "Gamepad2", color: "#FBBF24" }
];

const Index = () => {
  return (
    <div className="bg-[#1A1F2C] min-h-screen text-white font-['Roboto',sans-serif]">
      <Navbar />
      <Hero
        title="Дюна: Часть вторая"
        description="Продолжение истории Пола Атрейдеса, который объединяется с Чани и фрименами, чтобы отомстить заговорщикам, уничтожившим его семью."
        imageUrl="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop"
        year={2024}
        rating={8.4}
        duration="166 мин"
      />

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="popular" className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-['Montserrat',sans-serif] font-bold">Фильмы</h2>
            <TabsList className="bg-[#2A2F3C]">
              <TabsTrigger value="popular" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">Популярные</TabsTrigger>
              <TabsTrigger value="new" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">Новинки</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="popular">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {popularMovies.map((movie) => (
                  <CarouselItem key={movie.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <MovieCard movie={movie} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static bg-[#2A2F3C] hover:bg-[#9b87f5] hover:text-white transform-none" />
                <CarouselNext className="static bg-[#2A2F3C] hover:bg-[#9b87f5] hover:text-white transform-none" />
              </div>
            </Carousel>
          </TabsContent>

          <TabsContent value="new">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {newMovies.map((movie) => (
                  <CarouselItem key={movie.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <MovieCard movie={movie} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static bg-[#2A2F3C] hover:bg-[#9b87f5] hover:text-white transform-none" />
                <CarouselNext className="static bg-[#2A2F3C] hover:bg-[#9b87f5] hover:text-white transform-none" />
              </div>
            </Carousel>
          </TabsContent>
        </Tabs>

        <section className="mb-12">
          <h2 className="text-2xl font-['Montserrat',sans-serif] font-bold mb-6">Категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-[#2A2F3C] border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-['Montserrat',sans-serif] font-bold mb-3">Премиум подписка</h3>
                  <p className="text-gray-300 mb-6">Смотрите фильмы в отличном качестве без рекламы и с возможностью скачивания для просмотра офлайн.</p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">Подключить за 299 ₽/мес</Button>
                    <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10">Подробнее</Button>
                  </div>
                </div>
                <div className="h-full min-h-[200px] bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop')] bg-cover bg-center"></div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-[#141821] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <Icon name="FilmIcon" className="text-[#9b87f5] mr-2" size={24} />
              <span className="text-xl font-['Montserrat',sans-serif] font-bold">Cinema Life</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon"><Icon name="Facebook" /></Button>
              <Button variant="ghost" size="icon"><Icon name="Instagram" /></Button>
              <Button variant="ghost" size="icon"><Icon name="Twitter" /></Button>
              <Button variant="ghost" size="icon"><Icon name="Youtube" /></Button>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
            <p>© 2024 Cinema Life. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
