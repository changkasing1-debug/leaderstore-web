import { Link, useParams } from "wouter";
import Layout from "@/components/layout";
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck, FileText, ArrowUpRight, ShoppingCart } from "lucide-react";
import { products } from "@/lib/data";
import { useCart } from "@/context/cart";
import { StarRating } from "@/components/star-rating";

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

export default function ProductDetail() {
  const { id } = useParams();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-xl font-bold mb-2 text-[#07121A]">Product Not Found</h1>
          <p className="text-[#526880] mb-6">The product you're looking for doesn't exist in our catalog.</p>
          <Link
            href={`${base}/catalog`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#001A2E] text-white rounded-lg font-bold text-sm"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Catalog
          </Link>
        </div>
      </Layout>
    );
  }

  const accent = brandColor[product.brand] ?? "#001A2E";
  const accentLight = accent + "15";

  return (
    <Layout>
      {/* Brand header bar */}
      <div className="h-1.5 w-full" style={{ background: accent }} />

      <div className="bg-[#F0F4F8] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">

          {/* Breadcrumb */}
          <Link
            href={`${base}/catalog`}
            className="inline-flex items-center gap-1.5 text-sm text-[#526880] hover:text-[#001A2E] font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* LEFT — Image */}
            <div className="bg-white rounded-2xl border border-[#CFD9E6] overflow-hidden shadow-sm">
              <div className="h-72 md:h-96 flex items-center justify-center p-8 bg-[#F0F4F8]">
                <img
                  src={`${base}/${product.image}`}
                  alt={product.name}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `${base}/cat-electronics.png`;
                  }}
                />
              </div>

              {/* Trust badges */}
              <div className="px-6 py-5 grid grid-cols-2 gap-3">
                {[
                  { icon: ShieldCheck, text: "100% Authentic — U.S. Sourced" },
                  { icon: Truck, text: "Door-to-door to Latin America" },
                  { icon: FileText, text: "Import docs included" },
                  { icon: CheckCircle2, text: product.availability },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-2 text-xs text-[#526880]">
                    <Icon className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-[#015D2C]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Info */}
            <div className="space-y-6">

              {/* Brand + category badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider"
                  style={{ background: accentLight, color: accent }}
                >
                  {product.brand}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#CFD9E6] text-[#526880]">
                  {product.category}
                </span>
              </div>

              {/* Name */}
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#07121A] leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
              </div>

              {/* Description */}
              <p className="text-sm text-[#526880] leading-relaxed">{product.description}</p>

              {/* SKU identifiers */}
              <div className="bg-white rounded-xl border border-[#CFD9E6] p-4 flex flex-wrap gap-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#526880] mb-1">SKU / MPN</p>
                  <p className="font-mono font-bold text-[#07121A] text-sm tracking-wider">{product.sku}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#526880] mb-1">Availability</p>
                  <p className="font-bold text-[#07121A] text-sm">In Stock</p>
                </div>
              </div>

              {/* Specs table */}
              <div className="bg-white rounded-xl border border-[#CFD9E6] overflow-hidden">
                <div className="px-5 py-3 border-b border-[#CFD9E6]" style={{ background: accentLight }}>
                  <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: accent }}>
                    Technical Specs
                  </p>
                </div>
                <div className="divide-y divide-[#F0F4F8]">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="grid grid-cols-[2fr_3fr] px-5 py-3">
                      <span className="text-xs font-bold text-[#526880] self-center">{spec.label}</span>
                      <span className="text-sm text-[#07121A] font-medium leading-snug">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl border border-[#CFD9E6] p-5">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#526880] mb-3">Key Features</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 rounded-full text-xs font-semibold border border-[#CFD9E6] text-[#07121A] bg-[#F0F4F8]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#526880] uppercase tracking-wider mr-1">Certs:</span>
                {product.certifications.map((c) => (
                  <span
                    key={c}
                    className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#001A2E] text-white"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* Price */}
              <p className="text-2xl font-extrabold text-[#015D2C]">
                ${product.unitPrice.toFixed(2)}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      sku: product.sku,
                      image: product.image,
                      brand: product.brand,
                      unitPrice: product.unitPrice,
                    })
                  }
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white transition-colors hover:opacity-90"
                  style={{ background: accent }}
                >
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </button>
                <Link
                  href={`${base}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-[#07121A] bg-white border border-[#CFD9E6] hover:border-[#001A2E] transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Related products */}
          {(() => {
            const related = products
              .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
              .slice(0, 4);
            if (related.length === 0) return null;
            return (
              <div className="mt-16">
                <h2 className="text-xl font-extrabold text-[#07121A] mb-6">Related Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {related.map((p) => (
                    <Link
                      key={p.id}
                      href={`${base}/product/${p.id}`}
                      className="group bg-white rounded-xl border border-[#CFD9E6] overflow-hidden hover:shadow-lg hover:border-[#001A2E]/30 transition-all duration-300"
                    >
                      <div className="h-1" style={{ background: brandColor[p.brand] ?? "#001A2E" }} />
                      <div className="h-28 bg-[#F0F4F8] flex items-center justify-center p-3">
                        <img
                          src={`${base}/${p.image}`}
                          alt={p.name}
                          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => { (e.target as HTMLImageElement).src = `${base}/cat-electronics.png`; }}
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-[10px] font-extrabold uppercase tracking-wider mb-1"
                          style={{ color: brandColor[p.brand] ?? "#001A2E" }}>{p.brand}</p>
                        <p className="text-xs font-bold text-[#07121A] line-clamp-2 leading-snug">{p.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </Layout>
  );
}
