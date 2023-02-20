import { CacheProvider, Global } from "emotion";
import createCache from "@emotion/cache";
import weakMemoize from "@emotion/weak-memoize";
import { ThemeProvider } from "react";

const memoizedCreateCacheWithContainer = weakMemoize((container) => {
  const newCache = createCache({ container });

  return newCache;
});

export const Component = (props) => {
  const iframe = document.querySelector("#nc-root iframe");
  const iframeHeadElem = iframe && iframe.contentDocument.head;

  if (!iframeHeadElem) {
    return null;
  }

  return (
    <CacheProvider value={memoizedCreateCacheWithContainer(iframeHeadElem)}>
      <ThemeProvider>
        <Global />
        <div>
          <Component {...props} />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};
