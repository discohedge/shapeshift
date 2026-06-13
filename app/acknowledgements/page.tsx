import { JumpArrows } from "@/app/components/JumpArrows";
import { SiteHeader } from "@/app/components/SiteHeader";
import Link from "next/link";

export default function AcknowledgementsPage() {
  return (
    <main id="top" className="min-h-screen bg-white px-5 py-32 font-sans sm:px-8 md:py-40">
      <SiteHeader />
      <JumpArrows />

      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center gap-10">
        <p className="text-xs uppercase tracking-[0.22em] text-orange-600">
          Acknowledgements
        </p>
        <div className="space-y-6 text-sm font-light leading-7 text-neutral-600 sm:text-base sm:leading-8">
          <p>
            Shape_Shift was developed by{" "}
            <Link
              href="https://nadineaderhold.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none text-orange-600 transition hover:text-neutral-900"
            >
              Nadine Aderhold
            </Link>
            ,{" "}
            <Link
              href="https://www.linkedin.com/in/brmartino/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none text-orange-600 transition hover:text-neutral-900"
            >
              Bryan Martino
            </Link>
            , and{" "}
            <Link
              href="https://quwang.design"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none text-orange-600 transition hover:text-neutral-900"
            >
              Qu Wang
            </Link>{" "}
            within the Integrative Technologies and Architectural Design Research
            (ITECH) M.Sc. program at the University of Stuttgart.
          </p>
          <p>
            The project was guided by Ekin Sila Sahin (ICD - Institute for
            Computational Design and Construction) and Fabian Eidner (ITKE -
            Institute of Building Structures and Structural Design), under the
            supervision of Prof. Achim Menges (ICD) and Prof. Jan Knippers
            (ITKE).
          </p>
          <p>
            We would like to thank Laura Kiesewetter, Tiffany Cheng, and Laura
            Marsillo for their support throughout the project. Special thanks to
            Kai Parthy and LayFilaments GmbH for providing discounted filament,
            and to Stuwe e.V. for their generous sponsorship, which made this
            research possible.
          </p>
          <p>
            Finally, we extend our gratitude to our friends and families for
            their encouragement, patience, and unwavering support throughout this
            journey.
          </p>
        </div>
      </section>

      <div id="page-end" className="h-24" />
    </main>
  );
}
