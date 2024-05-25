import Script from "next/script";

const FlutterScript = () => {
  return (
    <>
      <Script src="/flutter/flutter.js" defer strategy="beforeInteractive" />
    </>
  );
};

export default FlutterScript;
