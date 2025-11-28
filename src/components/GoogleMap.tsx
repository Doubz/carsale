"use client";

import { useEffect, useRef } from "react";

interface GoogleMapProps {
  heightClass?: string;
  showOpenLink?: boolean;
  className?: string;
  mapClassName?: string;
}

export default function GoogleMap({
  heightClass = "h-[450px]",
  showOpenLink = true,
  className = "",
  mapClassName = "",
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current && typeof window !== "undefined") {
      const iframe = document.createElement("iframe");

      iframe.width = "100%";
      iframe.height = "100%";
      iframe.style.border = "0";
      iframe.style.height = "100%";
      iframe.loading = "lazy";
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = "no-referrer-when-downgrade";

      iframe.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.1913173536475!2d114.14578629676892!3d22.33917659851342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040755c892cc21%3A0x5f94c8f7b24d01bb!2z6aaZ5riv6ZW35rKZ54Gj55OK5p6X6KGXODPomZ8!5e0!3m2!1szh-CN!2s!4v1764234363965!5m2!1szh-CN!2s";

      mapRef.current.innerHTML = "";

      mapRef.current.appendChild(iframe);
    }
  }, []);

  const wrapperClasses = ["w-full", className].filter(Boolean).join(" ");
  const mapContainerClasses = [
    "w-full",
    "rounded-lg",
    "overflow-hidden",
    heightClass,
    mapClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      <div
        ref={mapRef}
        className={mapContainerClasses}
        role="region"
        aria-label="谷歌地图显示展厅位置：荔枝角金榄街83号 Tower B 1602-03室"
      >
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">加载地图中...</p>
        </div>
      </div>

      {showOpenLink && (
        <div className="mt-4 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=%E9%A6%99%E6%B8%AF%E9%95%B7%E6%B2%99%E7%81%A3%E7%90%8C%E6%9E%97%E8%A1%9783%E8%99%9F"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-blue-700 font-medium underline"
          >
            在谷歌地图中打开
          </a>
        </div>
      )}
    </div>
  );
}
