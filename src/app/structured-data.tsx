export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anand Kumar Sharma",
  "url": "https://vibecoding.com",
  "image": "https://vibecoding.com/logo.png",
  "sameAs": [
    // Add your social media profiles here
    // "https://twitter.com/yourusername",
    // "https://www.linkedin.com/in/yourusername/",
    // "https://github.com/yourusername"
  ],
  "jobTitle": "Web/Mobile App Developer, Gen AI Engineer, UI/UX Designer",
  "worksFor": {
    "@type": "Organization",
    "name": "Vibe Coding"
  },
  "description": "Professional portfolio of Anand Sharma, a web/mobile app developer, Gen AI engineer, and UI/UX designer with 3+ years of experience.",
  "knowsAbout": ["Web Development", "Mobile App Development", "UI/UX Design", "Gen AI Engineering", "React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"]
};

export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vibe Coding | Anand Kumar Sharma",
  "url": "https://vibecoding.com",
  "description": "Professional portfolio of Anand Sharma, a web/mobile app developer, Gen AI engineer, and UI/UX designer with 3+ years of experience.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://vibecoding.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};