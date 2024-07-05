
import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
  enabledEnv: "development",
});

const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

export default withAutoCert(nextConfig);