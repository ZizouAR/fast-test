export default function ViedeoShowPlayer() {
  return (
    <div className="rounded-2xl">
      <iframe

        src="https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-2xl w-full h-62 md:h-[440px]"
      ></iframe>
    </div>
  );
}
