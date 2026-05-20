import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Search, SlidersHorizontal } from "lucide-react";
import { products } from "@/lib/data";

const categories = ["All", "Electronics", "Apparel", "Toys", "Beauty", "Household"];

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <Layout>
      <div className="bg-muted/50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Product Catalog</h1>
          <p className="text-muted-foreground">Browse our wholesale catalog with MOQs and pricing</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products or brands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
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
            <Link key={p.id} href={base + `/product/${p.id}`} className="group">
              <Card className="h-full transition-all group-hover:shadow-md group-hover:border-primary/20">
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <Package className="h-14 w-14 text-muted-foreground/30" />
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{p.brand}</Badge>
                    <span className="text-xs text-muted-foreground">{p.category}</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{p.description.slice(0, 80)}...</p>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm font-bold text-primary">{p.priceRange}</span>
                    <span className="text-xs text-muted-foreground">MOQ: {p.moq}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Package className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground">No products match your search</p>
            <Button variant="outline" className="mt-3" onClick={() => { setSearch(""); setActiveCategory("All"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
