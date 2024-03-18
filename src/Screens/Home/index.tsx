import BodyScreen from "@/Components/BodyScreen";
import { LinkButton } from "@/Components/Buttons";
import Image from "next/image";

function HomeScreen() {
  return (
    <>
      <div className="max-h-[400px] overflow-hidden">
        <Image
          src={"https://placehold.co/1080x400"}
          alt="1080x600"
          width={600}
          height={400}
          className="w-full"
          priority
        />
      </div>
      <BodyScreen className="mt-8">
        <h1 className="text-4xl font-bold uppercase text-center mb-6">
          What is Lorem Ipsum
        </h1>
        <div className="flex flex-row flex-wrap justify-around gap-3">
          {new Array(3).fill("").map((_, idx) => (
            <div key={idx} className="rounded-t-lg overflow-hidden w-1/4">
              <Image
                src={"https://placehold.co/400"}
                alt="1080x600"
                width={400}
                height={400}
                className="w-full"
                priority
              />
              <div className="py-4">
                <h2 className="font-bold text-lg line-clamp-2">
                  WHAT IS LOREM IPSUM
                </h2>
                <p className="line-clamp-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur quibusdam adipisci nemo ullam rem, excepturi
                  placeat eligendi dolore deserunt, pariatur veritatis
                  exercitationem non magnam dicta voluptates velit quas, ex
                  porro?
                </p>
                <LinkButton className="p-2 text-sm mt-2" href={"#"}>
                  Continuar a ler
                </LinkButton>
              </div>
            </div>
          ))}
        </div>
      </BodyScreen>
    </>
  );
}

export default HomeScreen;
