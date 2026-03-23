import { useEffect } from "react";

export function useSEO(title: string, description?: string) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta title
    const metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle) {
      metaTitle.setAttribute("content", title);
    }

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
  }, [title, description]);
}
