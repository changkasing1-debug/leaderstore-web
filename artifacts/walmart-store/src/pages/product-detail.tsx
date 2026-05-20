import { Link, useParams } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Package,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Truck,
  FileText,
  Star,
  ArrowRight,
} from "lucide-react";
import { products } from "@/lib/data";

export default function ProductDetail() {
  const { id } = useParams();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <Package className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
          <h1 className="text-xl font-bold mb-2">Product Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The product you are looking for does not exist in our catalog.
          </p>
          <Button asChild>
            <Link href={base + "/catalog"}>Back to Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="ghost" size="sm" className="mb-4" asChild>
          <Link href={base + "/catalog"}>
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 gap-8">
          {/* Image */}
          <div className="bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center min-h-[300px]">
            <Package className="h-24 w-24 text-muted-foreground/20" />
          </div>

          {/* Info */}
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <Badge>{product.brand}</Badge>
              <Badge variant="outline">{product.category}</Badge>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              {product.name}
            </h1>
            <p className="text-muted-foreground mb-6">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="pt-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    Wholesale Price
                  </div>
                  <div className="text-xl font-bold text-accent">
                    {product.priceRange}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    Minimum Order
                  </div>
                  <div className="text-xl font-bold">{product.moq}</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>{product.availability}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>100% Authentic — U.S. Sourced</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span>Door-to-door delivery to Latin America</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText className="h-4 w-4 text-primary" />
                <span>Import documentation included</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <Link href={base + "/contact"}>
                  Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Download Spec Sheet
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <Star className="h-3.5 w-3.5 text-accent" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((c) => (
                  <Badge key={c} variant="secondary">
                    {c}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
