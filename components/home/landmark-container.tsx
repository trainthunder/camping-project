import { fetchLandmarks, fetchLandmarksHero } from "@/actions/actions";
import LandmarkList from "./landmark-list";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/hero";
import CategoriesList from "./categories-list";
import EmptyList from "./empty-list";

const LandmarkContainer = async ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({
    search,
    category,
  });
  const landmarksHero: LandmarkCardProps[] = await fetchLandmarksHero();
  // console.log(landmarks);

  return (
    <div>
      <Hero landmarks={landmarksHero} />
      <CategoriesList search={search} category={category} />
      {landmarks.length === 0 ? (
        <EmptyList heading="No results" btnText="Clear Filters" />
      ) : (
        <LandmarkList landmarks={landmarks} />
      )}
    </div>
  );
};
export default LandmarkContainer;
