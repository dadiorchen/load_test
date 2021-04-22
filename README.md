The repo for load test against the web map tile server.

---------------------

Restul report

* Case 1

```
k6> k6 run --vus 10 --duration 30s test.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: test.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
           * default: 10 looping VUs for 30s (gracefulStop: 30s)


running (0m33.4s), 00/10 VUs, 80 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  30s

     ✓ response code was 200

     checks.........................: 100.00% ✓ 80   ✗ 0
     data_received..................: 138 kB  4.1 kB/s
     data_sent......................: 7.2 kB  215 B/s
     http_req_blocked...............: avg=57.44µs min=2µs   med=6µs   max=567µs p(90)=339.1µs p(95)=446.7µs
     http_req_connecting............: avg=45.75µs min=0s    med=0s    max=480µs p(90)=293.7µs p(95)=404.54µs
     http_req_duration..............: avg=3.05s   min=1.77s med=3.07s max=5.09s p(90)=3.61s   p(95)=3.88s
       { expected_response:true }...: avg=3.05s   min=1.77s med=3.07s max=5.09s p(90)=3.61s   p(95)=3.88s
     http_req_failed................: 0.00%   ✓ 0    ✗ 80
     http_req_receiving.............: avg=76.52µs min=22µs  med=69µs  max=189µs p(90)=113µs   p(95)=147.3µs
     http_req_sending...............: avg=37.14µs min=11µs  med=27µs  max=178µs p(90)=71.8µs  p(95)=92.14µs
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s    max=0s    p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=3.05s   min=1.77s med=3.07s max=5.09s p(90)=3.61s   p(95)=3.88s
     http_reqs......................: 80      2.398392/s
     iteration_duration.............: avg=4.05s   min=2.77s med=4.07s max=6.09s p(90)=4.61s   p(95)=4.89s
     iterations.....................: 80      2.398392/s
     vus............................: 3       min=3  max=10
     vus_max........................: 10      min=10 max=10
```
  * command: 
```

* Case2

```
k6> k6 run browser.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

INFO[0000] url to request:
http://127.0.0.1:23101/2/0/0.png
http://127.0.0.1:23101/2/0/1.png
http://127.0.0.1:23101/2/0/2.png
http://127.0.0.1:23101/2/1/0.png
http://127.0.0.1:23101/2/1/1.png
http://127.0.0.1:23101/2/1/2.png
http://127.0.0.1:23101/2/2/0.png
http://127.0.0.1:23101/2/2/1.png
http://127.0.0.1:23101/2/2/2.png
http://127.0.0.1:23101/2/3/0.png
http://127.0.0.1:23101/2/3/1.png
http://127.0.0.1:23101/2/3/2.png
http://127.0.0.1:23101/2/0/0.grid.json
http://127.0.0.1:23101/2/0/1.grid.json
http://127.0.0.1:23101/2/0/2.grid.json
http://127.0.0.1:23101/2/1/0.grid.json
http://127.0.0.1:23101/2/1/1.grid.json
http://127.0.0.1:23101/2/1/2.grid.json
http://127.0.0.1:23101/2/2/0.grid.json
http://127.0.0.1:23101/2/2/1.grid.json
http://127.0.0.1:23101/2/2/2.grid.json
http://127.0.0.1:23101/2/3/0.grid.json
http://127.0.0.1:23101/2/3/1.grid.json
http://127.0.0.1:23101/2/3/2.grid.json  source=console
  execution: local
     script: browser.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)

INFO[0000] url to request:
 http://127.0.0.1:23101/2/0/0.png
http://127.0.0.1:23101/2/0/1.png
http://127.0.0.1:23101/2/0/2.png
http://127.0.0.1:23101/2/1/0.png
http://127.0.0.1:23101/2/1/1.png
http://127.0.0.1:23101/2/1/2.png
http://127.0.0.1:23101/2/2/0.png
http://127.0.0.1:23101/2/2/1.png
http://127.0.0.1:23101/2/2/2.png
http://127.0.0.1:23101/2/3/0.png
http://127.0.0.1:23101/2/3/1.png
http://127.0.0.1:23101/2/3/2.png
http://127.0.0.1:23101/2/0/0.grid.json
http://127.0.0.1:23101/2/0/1.grid.json
http://127.0.0.1:23101/2/0/2.grid.json
http://127.0.0.1:23101/2/1/0.grid.json
http://127.0.0.1:23101/2/1/1.grid.json
http://127.0.0.1:23101/2/1/2.grid.json
http://127.0.0.1:23101/2/2/0.grid.json
http://127.0.0.1:23101/2/2/1.grid.json
http://127.0.0.1:23101/2/2/2.grid.json
http://127.0.0.1:23101/2/3/0.grid.json
http://127.0.0.1:23101/2/3/1.grid.json
http://127.0.0.1:23101/2/3/2.grid.json  source=console
INFO[0000] url to request:
 http://127.0.0.1:23101/2/0/0.png
http://127.0.0.1:23101/2/0/1.png
http://127.0.0.1:23101/2/0/2.png
http://127.0.0.1:23101/2/1/0.png
http://127.0.0.1:23101/2/1/1.png
http://127.0.0.1:23101/2/1/2.png
http://127.0.0.1:23101/2/2/0.png
http://127.0.0.1:23101/2/2/1.png
http://127.0.0.1:23101/2/2/2.png
http://127.0.0.1:23101/2/3/0.png
http://127.0.0.1:23101/2/3/1.png
http://127.0.0.1:23101/2/3/2.png
http://127.0.0.1:23101/2/0/0.grid.json
http://127.0.0.1:23101/2/0/1.grid.json
http://127.0.0.1:23101/2/0/2.grid.json
http://127.0.0.1:23101/2/1/0.grid.json
http://127.0.0.1:23101/2/1/1.grid.json
http://127.0.0.1:23101/2/1/2.grid.json
http://127.0.0.1:23101/2/2/0.grid.json
http://127.0.0.1:23101/2/2/1.grid.json
http://127.0.0.1:23101/2/2/2.grid.json
http://127.0.0.1:23101/2/3/0.grid.json
http://127.0.0.1:23101/2/3/1.grid.json
http://127.0.0.1:23101/2/3/2.grid.json  source=console
INFO[0017] url to request:
 http://127.0.0.1:23101/2/0/0.png
http://127.0.0.1:23101/2/0/1.png
http://127.0.0.1:23101/2/0/2.png
http://127.0.0.1:23101/2/1/0.png
http://127.0.0.1:23101/2/1/1.png
http://127.0.0.1:23101/2/1/2.png
http://127.0.0.1:23101/2/2/0.png
http://127.0.0.1:23101/2/2/1.png
http://127.0.0.1:23101/2/2/2.png
http://127.0.0.1:23101/2/3/0.png
http://127.0.0.1:23101/2/3/1.png
http://127.0.0.1:23101/2/3/2.png
http://127.0.0.1:23101/2/0/0.grid.json
http://127.0.0.1:23101/2/0/1.grid.json
http://127.0.0.1:23101/2/0/2.grid.json
http://127.0.0.1:23101/2/1/0.grid.json
http://127.0.0.1:23101/2/1/1.grid.json
http://127.0.0.1:23101/2/1/2.grid.json
http://127.0.0.1:23101/2/2/0.grid.json
http://127.0.0.1:23101/2/2/1.grid.json
http://127.0.0.1:23101/2/2/2.grid.json
http://127.0.0.1:23101/2/3/0.grid.json
http://127.0.0.1:23101/2/3/1.grid.json
http://127.0.0.1:23101/2/3/2.grid.json  source=console

running (00m16.6s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m16.6s/10m0s  1/1 iters, 1 per VU
INFO[0017] url to request:
 http://127.0.0.1:23101/2/0/0.png
http://127.0.0.1:23101/2/0/1.png
http://127.0.0.1:23101/2/0/2.png
http://127.0.0.1:23101/2/1/0.png
http://127.0.0.1:23101/2/1/1.png
http://127.0.0.1:23101/2/1/2.png
http://127.0.0.1:23101/2/2/0.png
http://127.0.0.1:23101/2/2/1.png
http://127.0.0.1:23101/2/2/2.png
http://127.0.0.1:23101/2/3/0.png
http://127.0.0.1:23101/2/3/1.png
http://127.0.0.1:23101/2/3/2.png
http://127.0.0.1:23101/2/0/0.grid.json
http://127.0.0.1:23101/2/0/1.grid.json
http://127.0.0.1:23101/2/0/2.grid.json
http://127.0.0.1:23101/2/1/0.grid.json
http://127.0.0.1:23101/2/1/1.grid.json
http://127.0.0.1:23101/2/1/2.grid.json
http://127.0.0.1:23101/2/2/0.grid.json
http://127.0.0.1:23101/2/2/1.grid.json
http://127.0.0.1:23101/2/2/2.grid.json
http://127.0.0.1:23101/2/3/0.grid.json
http://127.0.0.1:23101/2/3/1.grid.json
http://127.0.0.1:23101/2/3/2.grid.json  source=console

     ✓ response code was 200

     checks.........................: 100.00% ✓ 24  ✗ 0
     data_received..................: 76 kB   4.6 kB/s
     data_sent......................: 2.2 kB  134 B/s
     http_req_blocked...............: avg=325.74µs min=2µs      med=4.5µs  max=1.6ms  p(90)=1.38ms   p(95)=1.55m
s
     http_req_connecting............: avg=143.29µs min=0s       med=0s     max=1.04ms p(90)=477.09µs p(95)=523.0
4µs
     http_req_duration..............: avg=3.62s    min=867.65ms med=3.48s  max=8.88s  p(90)=5.9s     p(95)=6.7s

       { expected_response:true }...: avg=3.62s    min=867.65ms med=3.48s  max=8.88s  p(90)=5.9s     p(95)=6.7s

     http_req_failed................: 0.00%   ✓ 0   ✗ 24
     http_req_receiving.............: avg=92.41µs  min=58µs     med=88.5µs max=193µs  p(90)=132.79µs p(95)=155.7
4µs
     http_req_sending...............: avg=256.83µs min=12µs     med=23µs   max=1.19ms p(90)=1.07ms   p(95)=1.16m
s
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s     max=0s     p(90)=0s       p(95)=0s

     http_req_waiting...............: avg=3.62s    min=867.54ms med=3.48s  max=8.88s  p(90)=5.9s     p(95)=6.7s

     http_reqs......................: 24      1.444335/s
     iteration_duration.............: avg=16.61s   min=16.61s   med=16.61s max=16.61s p(90)=16.61s   p(95)=16.61
s
     iterations.....................: 1       0.060181/s
     vus............................: 1       min=1 max=1
     vus_max........................: 1       min=1 max=1
```


