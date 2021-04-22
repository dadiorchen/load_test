import http from 'k6/http';
import { sleep, check } from 'k6';
export default function () {
  //    http.get('http://test.k6.io');
//  const res = http.get('https://dev-k8s.treetracker.org/tiles/2/1/1.png');
  const res = http.get('http://127.0.0.1:23101/2/1/1.png');
  //console.log("result:", JSON.stringify(res));
  check(res, {
    'response code was 200': (res) => res.status == 200,
  });
  sleep(1);
}
