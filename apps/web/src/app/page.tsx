import ArrowRightSvg from "@/assets/svgs/ArrowRightSvg";
import LandingPage from "@/components/LandingPage";
import { Button } from "@package/ui/button";

export default function Home() {

  return (
    <div className="min-h-screen items-center sm:mx-16 md:mx-40 lg:mx-56 xl:mx-96">
      <LandingPage />
      {/** Controls */}
      <div className="row-span-1 py-8 self-end justify-self-end pr-12">
        <Button>
          See how it works <ArrowRightSvg />
        </Button>
      </div>
    </div>
  );
}
