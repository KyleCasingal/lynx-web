import Image from "next/image";
import {
  HandThumbUpIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Hassle-Free Application Process",
    description:
      "We simplify the TNVS application, guiding you step-by-step for faster approval and compliance.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Expert Guidance from Start to Finish",
    description:
      "Our expert team offers one-on-one support, helping you through every stage of your application.",
    icon: UserGroupIcon,
  },
  {
    name: "Time and Cost Efficiency",
    description:
      "With our help, avoid mistakes that cause delays and get quicker TNVS approval.",
    icon: ClockIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sakay na!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                TNVS requirements can be overwhelming, but we make it easy. Let
                us handle the paperwork while you focus on driving. Start your
                application today!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="https://images.unsplash.com/photo-1482029255085-35a4a48b7084?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
