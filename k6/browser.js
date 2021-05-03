/*
 * Simulate a browser try to show the first view of the web map
 */
import http from 'k6/http';
import { sleep, check } from 'k6';


//const tiles = [
//  [2, 0, 0],
//  [2, 0, 1],
//  [2, 0, 2],
//  [2, 1, 0],
//  [2, 1, 1],
//  [2, 1, 2],
//  [2, 2, 0],
//  [2, 2, 1],
//  [2, 2, 2],
//  [2, 3, 0],
//  [2, 3, 1],
//  [2, 3, 2],
//]
const tiles = [];
for(let z = 2; z <= 2; z++){
  for(let x = 0; x <= 2**z - 1; x++){
    for(let y = 0; y <= 2**z -1; y++){
      tiles.push([z, x, y]);
    }
  }
}

const urls = tiles.map(e => `http://127.0.0.1:23101/${e[0]}/${e[1]}/${e[2]}.png`).concat(
  tiles.map(e => `http://127.0.0.1:23101/${e[0]}/${e[1]}/${e[2]}.grid.json`)
);

//console.log("url to request:\n", urls.join("\n"));
console.log("%d tile to request...", urls.length);

export default function () {
  const requests = urls.map(url => ({
    method: "GET",
    url,
  }));
  const requests2 = [{
    method: "GET",
    url: "http://127.0.0.1:23101/9/258/256.grid.json",
  }];
  const responses = http.batch(requests);//.slice(0,1));
  for(const key in responses){
    check(responses[key], {
      'response code was 200': (res) => res.status == 200,
    });
  }
}
