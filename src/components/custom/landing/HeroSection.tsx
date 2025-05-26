import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white w-full">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Building Tomorrow's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  Tech Leaders
                </span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Discover groundbreaking projects, innovative research, and the
                brilliant minds shaping our city's emergence as a premier
                technology hub.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Explore Projects</Button>
              <Button>Learn More</Button>
              {/* <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
                Explore Projects
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Learn More
              </button> */}
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-blue-200">Active Projects</div>
              </div>
              <div className="">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-blue-200">Industry Partners</div>
              </div>
              <div className="">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-blue-200">Student Innovators</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-blue-500 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-blue-100">Featured Innovation Video</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Latest Innovation Showcase
              </h3>
              <p className="text-blue-100">
                Featuring breakthrough AI research and sustainable technology
                initiatives from our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
