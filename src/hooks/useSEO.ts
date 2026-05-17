export interface SEOConfig {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string[];
}

export function useSEO(config: SEOConfig) {
  // Update document title
  document.title = config.title;

  // Update or create meta tags
  const updateMeta = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  };

  const updateOGMeta = (property: string, content: string) => {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  };

  updateMeta('description', config.description);
  if (config.keywords) updateMeta('keywords', config.keywords.join(', '));
  
  updateOGMeta('og:title', config.ogTitle || config.title);
  updateOGMeta('og:description', config.ogDescription || config.description);
  if (config.ogImage) updateOGMeta('og:image', config.ogImage);

  // Update canonical URL
  if (config.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = config.canonicalUrl;
  }
}