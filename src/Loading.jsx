import React, { useEffect, useState } from "react";

function Loading({ ms = 1000 }) {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  useEffect(
    function() {
      const timeoutId = setTimeout(function() {
        setShouldDisplay(true);
      }, ms);

      return function() {
        clearTimeout(timeoutId);
      };
    },
    [ms, shouldDisplay]
  );

  if (shouldDisplay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

export default Loading;
