import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-black text-white min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-deep-red mb-12 text-center">
          About Dasoma Trading
        </h1>

        {/* Overview */}
        <div className="md:flex md:gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <p className="text-gray-300 mb-4 leading-relaxed">
              Dasoma Group is a conglomerate based in Addis Ababa, Ethiopia, with over a decade of
              experience in automotive, trading, tourism, event organizing, and mega projects.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Founded by Mr. Daniel Yohannes with a capital of 100,000,000.00 Birr (USD 1.67M),
              Dasoma Group has grown to include multiple companies and brands, leading the industry
              in innovation, professionalism, and social impact.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Our vision: To be the trading company of choice for customers, principals, and
              investors through dedicated professionalism.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/images/about-hero.png"
              alt="Dasoma Group"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div>
            <h3 className="text-deep-red text-2xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-300">
              To be the trading company of choice for customers, principals, and investors.
            </p>
          </div>
          <div>
            <h3 className="text-deep-red text-2xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-300">
              To provide top-quality services, act as an agent of development, and inspire social
              transformation.
            </p>
          </div>
          <div>
            <h3 className="text-deep-red text-2xl font-semibold mb-4">Values</h3>
            <p className="text-gray-300">
              Ethics, honesty, trust, creativity, teamwork, speed, accuracy, and customer
              satisfaction.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gray-900 p-8 rounded-lg text-center max-w-4xl mx-auto">
          <h3 className="text-deep-red text-2xl font-semibold mb-4">Philosophy</h3>
          <p className="text-gray-300 leading-relaxed">
            "BE HONEST. BE INNOVATIVE." Profits and integrity coexist. We follow the law, communicate
            openly, focus on customer needs, and continuously innovate to maximize success.
          </p>
        </div>
      </div>
    </section>
  );
}
