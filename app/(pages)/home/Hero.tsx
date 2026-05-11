/* eslint-disable @next/next/no-img-element */
import { IMAGE_HELPER } from "@/app/helper/imageHelper";
import { SecondaryButton, PrimaryButton } from "@/app/component/Buttons";
import { BigHeading } from "@/app/component/Typography";
import { Lens } from "@/components/ui/lens";
import LensImagesDisplay from "@/app/component/LensImagesDisplay";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center gap-x-4">
      <div className="w-1/2 h-[80vh] object-cover rounded-2xl">
        <LensImagesDisplay
          img={IMAGE_HELPER.HOME_HERO_LEFT_IMAGE}
          height="80vh"
        />
      </div>
      <div className="w-1/2 h-full bg-secondary-color rounded-2xl flex items-left justify-center px-[5vw] flex-col gap-4">
        <BigHeading
          heading={
            <h1 className="text-6xl font-extrabold">
              Engineered Buildings <br /> Built the Right Way
            </h1>
          }
        />
        <p>
          Architecture, Structural Design, Soil Study, MEP Coordination, and
          Construction — Delivered Through One Structured Workflow.
        </p>
        <div className="flex items-center gap-4">
          <PrimaryButton text="Start Your Project" />
          <SecondaryButton text="View Our Projects" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
