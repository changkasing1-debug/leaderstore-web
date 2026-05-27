import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { Search, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import { products } from "@/lib/data";

const categories = ["All", "Interior Accessories", "Roof Racks & Cargo", "Lighting", "Tools & Accessories", "Filters & Intake", "Fluids & Lubricants", "Suspension & Lift Kits", "Exterior Protection", "Engine Components", "Sensors & Electrical"];

const brandColor: Record<string, string> = {
  "WeatherTech": "#1A2B3C",
  "ROAM": "#E87722",
  "K&N": "#C41E3A",
  "Anzo": "#1A73E8",
  "STEDI": "#F37021",
  "Rugged Ridge": "#CC0000",
  "Race Ramps": "#111111",
  "Spectre": "#111111",
  "Injen": "#D40000",
  "OVS": "#1A2B3C",
  "Old Man Emu": "#C4956A",
  "ARB": "#D40000",
  "Toyota": "#EB0A1E",
  "Aftermarket": "#333333",
};

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  const filtered = products.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <Layout>
      {/* Page header */}
      <div
        className="relative py-16 md:py-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #001A2E 0%, #012035 60%, #001428 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4ade80] mb-3">Our Inventory</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Auto Parts Catalog</h1>
          <p className="text-base md:text-lg text-[#8aa8c0] max-w-xl mx-auto">
            Wholesale pricing for licensed distributors, repair shops, and fleet operators. Contact us for your quote.
          </p>
        </div>
      </div>

      <div className="bg-[#F0F4F8] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#526880]" />
              <input
                type="text"
                placeholder="Search products or brands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-[#CFD9E6] bg-white text-sm text-[#07121A] placeholder:text-[#526880] focus:outline-none focus:ring-2 focus:ring-[#001A2E]/20 focus:border-[#001A2E]"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal className="h-4 w-4 text-[#526880] flex-shrink-0" />
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                    activeCategory === c
                      ? "bg-[#001A2E] text-white border-[#001A2E]"
                      : "bg-white text-[#526880] border-[#CFD9E6] hover:border-[#001A2E] hover:text-[#001A2E]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p className="text-xs text-[#526880] mb-6 font-medium">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <Link
                key={p.id}
                href={`${base}/product/${p.id}`}
                className="group block bg-white rounded-2xl border border-[#CFD9E6] overflow-hidden hover:shadow-xl hover:border-[#001A2E]/30 transition-all duration-300"
              >
                {/* Brand stripe */}
                <div
                  className="h-1 w-full"
                  style={{ background: brandColor[p.brand] ?? "#001A2E" }}
                />

                {/* Image area */}
                <div className="h-44 bg-[#F0F4F8] flex items-center justify-center overflow-hidden px-4 py-3">
                  <img
                    src={`${base}/${p.image}`}
                    alt={p.name}
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `${base}/cat-electronics.png`;
                    }}
                  />
                </div>

                <div className="p-4">
                  {/* Brand + category */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded"
                      style={{
                        background: (brandColor[p.brand] ?? "#001A2E") + "18",
                        color: brandColor[p.brand] ?? "#001A2E",
                      }}
                    >
                      {p.brand}
                    </span>
                    <span className="text-[10px] text-[#526880] font-medium">{p.category}</span>
                  </div>

                  {/* Name */}
                  <h3 className="font-extrabold text-[#07121A] text-sm leading-snug mb-2 line-clamp-2 group-hover:text-[#001A2E]">
                    {p.name}
                  </h3>

                  {/* SKU / UPC */}
                  <div className="space-y-0.5 mb-3">
                    <p className="text-[10px] text-[#526880]">
                      <span className="font-semibold text-[#07121A]">SKU:</span> {p.sku}
                    </p>
                    <p className="text-[10px] text-[#526880]">
                      <span className="font-semibold text-[#07121A]">UPC:</span> {p.upc}
                    </p>
                  </div>

                  {/* MOQ + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#CFD9E6]">
                    <span className="text-[10px] text-[#526880]">
                      MOQ: <span className="font-bold text-[#07121A]">{p.moq}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#015D2C] group-hover:text-[#001A2E]">
                      View specs <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#526880] text-lg font-medium mb-2">No products match your search</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="mt-3 px-5 py-2 rounded-lg border border-[#CFD9E6] text-sm text-[#526880] hover:bg-white transition"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* CTA strip */}
          <div className="mt-14 rounded-2xl p-8 md:p-12 text-center"
            style={{ background: "linear-gradient(135deg, #001A2E 0%, #012B1E 100%)" }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4ade80] mb-3">Get Pricing</p>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Ready to Place an Order?</h3>
            <p className="text-[#8aa8c0] mb-6 max-w-md mx-auto text-sm">
              Contact our wholesale team for volume pricing, MOQ discounts, and fast fulfillment from our Miami warehouse.
            </p>
            <Link
              href={`${base}/contact`}
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#015D2C] text-white rounded-lg font-bold text-sm hover:bg-[#014d24] transition-colors"
            >
              Request a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
