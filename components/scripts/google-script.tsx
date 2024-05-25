import { GOOGLE_ANALYTICS_ID } from "@/lib/env";
import { GoogleAnalytics } from "@next/third-parties/google";

const GoogleScript = () => {
  return (
    <>{GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}</>
  );
};

export default GoogleScript;
