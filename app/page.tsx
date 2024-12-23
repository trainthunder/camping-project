import LoadingCard from "@/components/card/loading-card";
import LandmarkContainer from "@/components/home/landmark-container";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

const HomePage = async ({
  searchParams,
}: {
  searchParams: { search?: string; category?: string };
}) => {
  const { search, category } = await searchParams;
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </section>
  );
};
export default HomePage;
