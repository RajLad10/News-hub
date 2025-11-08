import { notFound } from 'next/navigation';
import Image from 'next/image';
import { articles } from '@/lib/data';
import { formatDate } from '@/lib/utils';

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="container py-12">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-4">
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <span>{article.author.name}</span>
            </div>
            <span>•</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>
        </div>

        <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8 bg-muted">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed mb-6">{article.content}</p>
          
          <p className="text-muted-foreground">
            Thank you for reading this article. Stay tuned for more updates!
          </p>
        </div>
      </article>

      {/* Related Articles */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles
            .filter((a) => a.id !== article.id && a.category === article.category)
            .slice(0, 3)
            .map((relatedArticle) => (
              <a
                key={relatedArticle.id}
                href={`/news/${relatedArticle.id}`}
                className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium mb-2">{relatedArticle.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {relatedArticle.excerpt}
                </p>
              </a>
            ))}
        </div>
      </section>
    </div>
  );
}
