import {
  FolderIcon,
  ArrowPathRoundedSquareIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image"

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
    <main className="flex flex-col row-start-2 p-20 items-center sm:items-center">
      <div className="overflow-hidden bg-white py-10 sm:py-10">
        <div className="mx-auto mb-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to start your TNVS journey
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get support for your TNVS application, from documentation to
              approval, ensuring a smooth and hassle-free start.
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

        <div className=" mx-auto my-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  TNVS Appication
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  TNVS requirements can be overwhelming, but we make it easy.
                  Let us handle the paperwork while you focus on driving. Start
                  your application today!
                </p>
                {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
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
                </dl> */}
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="https://images.unsplash.com/photo-1695388474402-ed805a890d8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>

        <div className=" mx-auto my-20 max-w-7xl px-6 lg:px-8">
          <div className=" mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Renewals
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  TNVS requirements can be overwhelming, but we make it easy.
                  Let us handle the paperwork while you focus on driving. Start
                  your application today!
                </p>
                {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
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
                </dl> */}
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="https://images.unsplash.com/photo-1521136095380-08fbd7be93c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>

        <div className=" mx-auto my-20 max-w-7xl px-6 lg:px-8">
          <div className=" mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Office Transactions
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  TNVS requirements can be overwhelming, but we make it easy.
                  Let us handle the paperwork while you focus on driving. Start
                  your application today!
                </p>
                {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
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
                </dl> */}
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="https://images.unsplash.com/photo-1638262052640-82e94d64664a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
