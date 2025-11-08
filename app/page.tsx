import { articles } from '@/lib/data';
import { ArticleCard } from '@/components/news/ArticleCard';

export default function Home() {
  const featuredArticles = articles.filter(article => article.featured);
  const latestArticles = articles.slice(0, 6); // Show first 6 articles as latest

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50 py-12 md:py-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Latest News & Updates</h1>
            
            {/* Featured Articles */}
            {featuredArticles.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {featuredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} variant="featured" />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Latest News</h2>
              <a href="/category/all" className="text-sm font-medium text-primary hover:underline">
                View All News →
              </a>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-muted/50 py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Browse by Category</h2>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: 'Politics', count: 24, icon: '🏛️' },
                { name: 'Sports', count: 18, icon: '⚽' },
                { name: 'Technology', count: 15, icon: '💻' },
                { name: 'Business', count: 12, icon: '💼' },
                { name: 'Entertainment', count: 21, icon: '🎬' },
                { name: 'Health', count: 9, icon: '🏥' },
              ].map((category) => (
                <a
                  key={category.name}
                  href={`/category/${category.name.toLowerCase()}`}
                  className="flex items-center justify-between p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="font-medium">{category.name}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{category.count} articles</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest news and updates.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
