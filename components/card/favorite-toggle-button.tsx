import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { SIgnInCardButton } from "../form/buttons";
import { fetchFavoriteId } from "@/actions/actions";
import FavoriteToggleForm from "./favorite-toggle-form";

const FavoriteToggleButton = async ({ landmarkId }: { landmarkId: string }) => {
  const { userId } = await auth();
  if (!userId) return <SIgnInCardButton />;
  const favoriteId = await fetchFavoriteId({ landmarkId });

  return <FavoriteToggleForm favoriteId={favoriteId} landmarkId={landmarkId} />;
};
export default FavoriteToggleButton;
