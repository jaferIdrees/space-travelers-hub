import { missionsHttp } from './common-http';

export default function getMissions() {
  return missionsHttp.get('');
}
