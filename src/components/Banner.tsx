"use client";

import { motion } from "framer-motion";

export default function Banner() {
  const scrollToRegister = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="banner"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.webp')" }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-white bg-opacity-20 text-white px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              首批到店 · 全新旗舰车型限量开售
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            全新旗舰车系到店
            <br /> {}
            <span className="text-yellow-400">尊享经销商专属礼遇</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            厂家授权经销网络，首批到店现车同步全国。金融、置换与终身保养
            方案一站打包，预约即可锁定限量交车礼遇。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToRegister}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 w-full sm:w-auto"
              aria-label="预约试驾"
            >
              预约试驾
            </button>

            <button
              onClick={() => {
                const element = document.getElementById("features");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm border-2 border-white border-opacity-30 w-full sm:w-auto"
              aria-label="查看库存"
            >
              查看库存
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: "60+", desc: "全新上市车型" },
            { label: "5年", desc: "厂家质保支持" },
            { label: "48h", desc: "极速交付承诺" },
            { label: "400+", desc: "认证销售顾问" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.2 + index * 0.1,
              }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20"
            >
              <div className="text-3xl font-bold text-white mb-1">
                {stat.label} {}
              </div>
              <div className="text-blue-200 text-sm">
                {stat.desc} {}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
