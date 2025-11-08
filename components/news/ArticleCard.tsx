import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { CalendarDays, Clock, User } from 'lucide-react';
import Image from 'next/image';
import { Article } from '@/lib/data';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured';
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const isFeatured = variant === 'featured';
  const date = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={article.image}
          alt={article.title}
          fill
          unoptimized
          className="object-cover transition-transform group-hover:scale-105"
          sizes={isFeatured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
          style={{
            backgroundColor: article.image.includes('placehold.co') ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-1 p-6">
        <CardHeader className="p-0 mb-4">
          <h3 className={`font-semibold leading-tight ${isFeatured ? 'text-2xl' : 'text-xl'} line-clamp-2`}>
            <Link href={`/news/${article.id}`} className="hover:underline">
              {article.title}
            </Link>
          </h3>
        </CardHeader>
        
        <CardContent className="p-0 mb-4 flex-1">
          <p className="text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="p-0 mt-auto">
          <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={article.date}>{date}</time>
            </div>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
