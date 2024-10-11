import {
  FolderIcon,
  ArrowPathRoundedSquareIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "TNVS application",
    description:
      "We assist drivers with TNVS applications by helping with registration, document submission, and regulatory compliance.",
    icon: FolderIcon,
  },
  {
    name: "Renewals",
    description:
      "We help drivers with PA (Provisional Authority) renewals by guiding them through the process and ensuring timely document submission for approval.",
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: "Office transactions",
    description:
      "We encourage you to transact at our office for personalized assistance and immediate support.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Insurance",
    description:
      "We help drivers with car insurance by selecting the right coverage and simplifying the application process.",
    icon: ShieldCheckIcon,
  },
];

export default function services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to start your TNVS journey
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get support for your TNVS application, from
            documentation to approval, ensuring a smooth and hassle-free start.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
