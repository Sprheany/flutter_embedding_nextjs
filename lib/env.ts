export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.VERCEL_URL}`;

export const { GOOGLE_ANALYTICS_ID, MICROSOFT_CLARITY_ID } =
  process.env as Record<string, string | undefined>;
