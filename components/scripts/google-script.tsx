import { GoogleAnalytics } from "@next/third-parties/google";

const GoogleScript = () => {
  return (
    <>
      {process.env.GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
    </>
  );
};

export default GoogleScript;
