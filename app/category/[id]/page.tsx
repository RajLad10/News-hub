import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArticleCard } from '@/components/news/ArticleCard';
import { articles, categories } from '@/lib/data';

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((c) => c.id === params.id);
  
  if (!category) {
    notFound();
  }

  const categoryArticles = articles.filter(
    (article) => article.category === category.id
  );

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{category.name} News</h1>
        <p className="text-muted-foreground">
          Stay updated with the latest {category.name.toLowerCase()} news and updates.
        </p>
      </div>

      {categoryArticles.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No articles found in this category.</p>
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
