import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 100 }, 
    { duration: '5s', target: 125 },
    { duration: '10s', target: 250 }, 
    { duration: '30s', target: 500 }, 
    { duration: '60s', target: 1000 }, 
    { duration: '30s', target: 0 }, 
  ],
};

export default function() {
// the controller is set to a random id so 1 will be replaced every request
  let res = http.get(`ec2-54-215-198-82.us-west-1.compute.amazonaws.com`);
  check(res, {
    'status was 200': r => r.status == 200,
    'transaction time OK': r => r.timings.duration < 2000,
  });
  sleep(1);
}