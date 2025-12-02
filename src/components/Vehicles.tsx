"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = ["SUV", "sedan", "sports"] as const;

type CategoryKey = (typeof categories)[number];

const vehicles = [
  {
    name: "特斯拉 Model Y",
    image: "/images/test-car.png",
    tag: "全新车辆",
    subtitle: "体验最佳的购车方式",
    cta: "立即选购",
  },
  {
    name: "特斯拉 Model 3",
    image: "/images/test-car.png",
  },
  {
    name: "宝马 X5",
    image: "/images/test-car.png",
  },
  {
    name: "奔驰 GLE",
    image: "/images/test-car.png",
  },
  {
    name: "奥迪 Q7",
    image: "/images/test-car.png",
  },
  {
    name: "保时捷 Cayenne",
    image: "/images/test-car.png",
  },
  {
    name: "丰田 汉兰达",
    image: "/images/test-car.png",
  },
  {
    name: "本田 CR-V",
    image: "/images/test-car.png",
  },
  {
    name: "大众 途观",
    image: "/images/test-car.png",
  },
  {
    name: "比亚迪 唐",
    image: "/images/test-car.png",
  },
];

function VehicleCard({
  vehicle,
  index,
  isFirst,
  t,
}: {
  vehicle: (typeof vehicles)[0];
  index: number;
  isFirst: boolean;
  t: ReturnType<typeof useLanguage>["t"];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (isFirst) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.5 }}
        className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-between h-full"
      >
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {t.vehicles.newVehicle}
          </h3>
          <p className="text-gray-600 mb-6">{t.vehicles.newVehicleSubtitle}</p>
        </div>
        <button className="text-left font-semibold text-gray-900 hover:text-primary transition-colors">
          {t.vehicles.shopNow}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative h-48 bg-gray-50">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {vehicle.name}
        </h3>
        <button className="font-semibold text-gray-900 hover:text-primary transition-colors">
          {t.vehicles.shopNow}
        </button>
      </div>
    </motion.div>
  );
}

export default function Vehicles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("SUV");
  const { t } = useLanguage();

  const categoryLabels: Record<CategoryKey, string> = {
    SUV: t.vehicles.categories.suv,
    sedan: t.vehicles.categories.sedan,
    sports: t.vehicles.categories.sports,
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{t.vehicles.title}</h2>

          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full whitespace-nowrap font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={index}
              vehicle={vehicle}
              index={index}
              isFirst={index === 0}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
