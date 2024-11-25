import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";

export default function LandingPage() {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        className="fixed inset-0 w-full h-full object-cover"
        src="/video/gif.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full items-center justify-center bg-black bg-opacity-50 text-white">
        <TypewriterEffectSmoothDemo />
      </div>
    </div>
  );
}
