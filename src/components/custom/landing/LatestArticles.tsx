import { Button } from "@/components/ui/button";
import { LATEST_ARTICLES } from "@/lib/constants";

export default function LatestArticles() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Articles
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest research findings, industry insights,
            and thought leadership from our academic community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LATEST_ARTICLES.map((article, index) => (
            <article
              key={article.id}
              className={`group cursor-pointer ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                <div
                  className={`bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center ${
                    index === 0 ? "h-64 lg:h-80" : "h-48"
                  }`}
                >
                  <div className="text-center text-white">
                    <div
                      className={`bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 ${
                        index === 0 ? "w-20 h-20" : "w-16 h-16"
                      }`}
                    >
                      <div
                        className={`bg-white rounded-full ${
                          index === 0 ? "w-10 h-10" : "w-8 h-8"
                        }`}
                      ></div>
                    </div>
                    <p className="font-medium">Article Image</p>
                  </div>
                </div>

                <div className={`p-6 ${index === 0 ? "lg:p-8" : ""}`}>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.readTime}
                    </span>
                  </div>

                  <h3
                    className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 ${
                      index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                    }`}
                  >
                    {article.title}
                  </h3>

                  <p
                    className={`text-gray-600 mb-4 ${
                      index === 0 ? "text-lg" : ""
                    }`}
                  >
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">
                        {article.author}
                      </p>
                      <p className="text-sm text-gray-500">{article.date}</p>
                    </div>
                    <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outlineBlue">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
