import { Button } from "@/components/ui/button";
import { PARTNERS } from "@/lib/constants";

export default function PartnersSection() {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum":
        return "from-purple-600 to-purple-800";
      case "Gold":
        return "from-yellow-500 to-yellow-600";
      case "Silver":
        return "from-gray-400 to-gray-600";
      case "Bronze":
        return "from-amber-600 to-amber-800";
      default:
        return "from-blue-600 to-blue-800";
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry Partners & Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading organizations to drive innovation,
            provide real-world experience, and create opportunities for our
            community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {PARTNERS.map((partner, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${getTierColor(partner.tier)} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-bold text-lg">
                    {partner.logo}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {partner.name}
                </h3>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    partner.tier === "Platinum"
                      ? "bg-purple-100 text-purple-800"
                      : partner.tier === "Gold"
                        ? "bg-yellow-100 text-yellow-800"
                        : partner.tier === "Silver"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {partner.tier} Partner
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Partner With Us
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our network of industry leaders and help shape the next
            generation of innovators. Together, we're building a thriving tech
            ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="white">
              Become a Partner
            </Button>
            <Button size="lg" variant="outlineWhite">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
