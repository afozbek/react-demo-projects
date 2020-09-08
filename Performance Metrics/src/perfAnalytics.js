let basePostUrl = "https://performance-measure.herokuapp.com/browser-metrics";
// let basePostUrl = "http://localhost:8080/browser-metrics";

function logMetrics({
  measureName,
  measureValue,
  timestamp,
  url = basePostUrl,
}) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      timestamp,
      measureValue,
      measureName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

(function () {
  var logStyle =
    "color: green; font-weight: bold; font-size: 14px; text-transform: uppercase";

  // TTFB - Time To First Byte
  var navigationEntry = performance.getEntriesByType("navigation")[0];
  var ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
  console.log("%cTTFB:", logStyle, ttfb + " ms");

  // FCP - First Contentful Paint
  var fcp;
  // Dom Load
  var contentLoadTime;
  // Window Load
  var loadTime;

  var timestamp = new Date().valueOf();
  logMetrics({
    timestamp,
    measureName: "ttfb",
    measureValue: ttfb,
  });

  const observer = new PerformanceObserver(function (list, obj) {
    var perfEntries = list.getEntries();
    // console.log(perfEntries);
    for (let entry of perfEntries) {
      const { entryType } = entry;
      if (entryType === "navigation") {
        contentLoadTime = entry.domContentLoadedEventEnd;
        loadTime = entry.loadEventEnd;
        logMetrics({
          timestamp,
          measureName: "dom-load-time",
          measureValue: contentLoadTime,
        });
        logMetrics({
          timestamp,
          measureName: "load-time",
          measureValue: loadTime,
        });
        console.log("%cDOM Load Time: ", logStyle, contentLoadTime + " ms");
        console.log("%cLoad Time: ", logStyle, loadTime + " ms");
      } else if (
        entryType === "paint" &&
        entry.name === "first-contentful-paint"
      ) {
        fcp = entry.startTime;

        logMetrics({
          timestamp,
          measureName: entry.name,
          measureValue: fcp,
        });
        console.log(`%c${entry.name} :`, logStyle, entry.startTime + " ms");
      } else if (entryType === "resource") {
        if (entry.initiatorType === "fetch") {
          break;
        }
        logMetrics({
          timestamp,
          measureName: "resource",
          measureValue: entry.responseEnd,
        });
        console.log("Resource :", entry);
      }
    }
  });

  observer.observe({
    entryTypes: ["paint", "navigation", "resource"],
    // type: "paint",
    buffered: true,
  });
  setTimeout(() => {
    observer.disconnect();
  }, 10000);
  // Network Timings
})();

// setTimeout(() => {
//   window.location.reload();
// }, 1000 * 30);
