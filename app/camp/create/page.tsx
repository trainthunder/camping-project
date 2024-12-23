import FormInput from "@/components/form/form-input";
import { SubmitButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";
import { createLandmarkAction } from "@/actions/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CategoryInput from "@/components/form/category-input";
import TextAreaInput from "@/components/form/text-area-input";
import ProvinceInput from "@/components/form/province-input";
import MapLandmark from "@/components/map/map-landmark";
import ImageInput from "@/components/form/image-input";

const ProfileCreatePage = async () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create Landmark
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createLandmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              label="Landmark Name"
              type="text"
              placeholder="Landmark Name"
            />
            <CategoryInput />
          </div>

          <TextAreaInput name="description" />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="price"
              label="Price"
              type="number"
              placeholder="Price"
            />
            <ProvinceInput />
          </div>
          <ImageInput />
          <MapLandmark />
          <SubmitButton text="Create Landmark" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default ProfileCreatePage;
