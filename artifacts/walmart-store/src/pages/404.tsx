import { Link } from "wouter";
import Layout from "@/components/layout";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="h-24 w-24 bg-[#F0F4F8] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-extrabold text-[#001A2E]">404</span>
            </div>
            <h1 className="text-3xl font-bold text-[#07121A] mb-3">Page Not Found</h1>
            <p className="text-[#526880] leading-relaxed">
              The page you are looking for does not exist or has been moved. Please check the URL or navigate to one of our main pages.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={base + "/"}>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#001A2E] text-white text-sm font-semibold rounded-lg hover:bg-[#001A2E]/90 transition-all">
                <Home className="h-4 w-4" />
                Back to Home
              </button>
            </Link>
            <Link href={base + "/catalog"}>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#CFD9E6] text-[#07121A] text-sm font-semibold rounded-lg hover:bg-[#F0F4F8] transition-all">
                <Search className="h-4 w-4" />
                Browse Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
