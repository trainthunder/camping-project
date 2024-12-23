"use client";
import { toggleFavoriteAction } from "@/actions/actions";
import FormContainer from "../form/form-container";
import { usePathname } from "next/navigation";
import { CardSubmitButton } from "../form/buttons";
const FavoriteToggleForm = ({
  favoriteId,
  landmarkId,
}: {
  favoriteId: string | null;
  landmarkId: string;
}) => {
  const pathname = usePathname();
  console.log("id", favoriteId);
  const toggleAction = toggleFavoriteAction.bind(null, {
    favoriteId,
    landmarkId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};
export default FavoriteToggleForm;
