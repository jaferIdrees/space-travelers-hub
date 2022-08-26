import { rocketsHttp } from './common-http';

export default function getRockets() {
  return rocketsHttp.get('');
}
