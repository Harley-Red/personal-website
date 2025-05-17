import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);