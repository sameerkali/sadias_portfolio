// AV1 first (about half the size), H.264 MP4 as the fallback for browsers without AV1
// (e.g. older Safari). If a "-av1.mp4" file is missing the browser just falls back to the MP4.
// Codec string = AV1 Main profile, level 3.1, 8-bit: matches the 720p AV1 files in public/videos.
export function VideoSources({ src }: { src: string }) {
  return (
    <>
      <source src={src.replace(/\.mp4$/, "-av1.mp4")} type='video/mp4; codecs="av01.0.05M.08"' />
      <source src={src} type="video/mp4" />
    </>
  );
}
