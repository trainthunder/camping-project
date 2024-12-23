import { fetchFavorites } from "@/actions/actions";
import EmptyList from "@/components/home/empty-list";
import LandmarkList from "@/components/home/landmark-list";

const FavoritePage = async () => {
  const favorite = await fetchFavorites();
  if (favorite.length === 0) {
    return <EmptyList heading="No items Favorites" />;
  }
  return <LandmarkList landmarks={favorite} />;
};
export default FavoritePage;
