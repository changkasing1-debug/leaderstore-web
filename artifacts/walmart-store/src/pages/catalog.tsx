import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Search, SlidersHorizontal } from "lucide-react";
import { products } from "@/lib/data";

const categories = [
  "All",
  "Electronics",
  "Kitchen & Home",
  "Pet Supplies",
  "Beauty",
];

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
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-2">Our Products</h1>
          <p className="text-muted-foreground">
            Wholesale catalog with MOQs and pricing for Latin American partners
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Filters */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products or brands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 w-full"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 justify-center">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            {categories.map((c) => (
              <Badge
                key={c}
                variant={activeCategory === c ? "default" : "outline"}
                className="cursor-pointer flex-shrink-0"
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </Badge>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <Link
              key={p.id}
              href={base + `/product/${p.id}`}
              className="group"
            >
              <Card className="h-full transition-colors group-hover:border-accent/30 overflow-hidden">
                <div className="h-48 overflow-hidden bg-muted">
                  <img
                    src={`${base}prod-${p.image}.png`}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {p.brand}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                    {p.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {p.description.slice(0, 80)}...
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm font-bold text-accent">
                      {p.priceRange}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      MOQ: {p.moq}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Package className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground">
              No products match your search
            </p>
            <Button
              variant="outline"
              className="mt-3"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
