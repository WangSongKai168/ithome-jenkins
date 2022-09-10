// ithome-sample.js
import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: '5s', target: 10 }, 
    { duration: '1m', target: 10 },
    { duration: '5s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'],
  },
  ext: {
    loadimpact: {
      projectID: 3600288,
      name: "ithome-day9-sample-k6-testing"
    }
  }
};

export default function () {
  http.get('https://test.k6.io');
}

export function handleSummary(data) {
  return {
	    "ithome-sample.html": htmlReport(data),
  	};
}
