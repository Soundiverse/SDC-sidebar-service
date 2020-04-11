import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 100 }, 
    { duration: '5s', target: 125 },
    { duration: '10s', target: 250 }, 
    { duration: '30s', target: 500 }, 
    { duration: '60s', target: 1000 }, 
    { duration: '60s', target: 0 }, 
  ],
};

export default function() {

  let responses = http.get(`http://localhost:3400/song`);
  check(responses, {
    'status was 200': r => r.status == 200,
    'transaction time OK': r => r.timings.duration < 200,
  });
  sleep(1);
}