export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anand Kumar Sharma",
  "url": "https://anandsharma.info",
  "image": "https://anandsharma.info/logo.png",
  "sameAs": [
    // Add your social media profiles here
    // "https://twitter.com/yourusername",
    "https://www.linkedin.com/in/anands2959/",
    "https://github.com/anands2959"
  ],
  "jobTitle": "Web/Mobile App Developer, Gen AI Engineer, UI/UX Designer",
  "worksFor": {
    "@type": "Organization",
    "name": "Vibe Coding"
  },
  "description": "Professional portfolio of Anand Sharma, a web/mobile app developer, Gen AI engineer, and UI/UX designer with 3+ years of experience.",
  "knowsAbout": ["Web Development", "Mobile App Development", "UI/UX Design", "Gen AI Engineering", "React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Gen AI Engineering",
        "description": "Implementing intelligent solutions using cutting-edge Gen AI technologies."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Web Development",
        "description": "Creating responsive, modern web applications with cutting-edge technologies."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "Building cross-platform mobile applications that deliver exceptional user experiences."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "UI/UX Design",
        "description": "Designing intuitive and visually appealing interfaces that enhance user engagement."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Backend Development",
        "description": "Developing robust server-side applications and APIs to power your digital solutions."
      }
    },
    
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "DevOps & Deployment",
        "description": "Streamlining development workflows and deploying applications to production environments."
      }
    }
  ]
};

export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vibe Coding | Anand Kumar Sharma",
  "url": "https://anandsharma.info",
  "description": "Professional portfolio of Anand Sharma, a web/mobile app developer, Gen AI engineer, and UI/UX designer with 3+ years of experience.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://anandsharma.info/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};