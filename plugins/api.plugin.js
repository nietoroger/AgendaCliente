import { apiService } from '@/services/api.service';
import { utilsService } from '@/services/utils.service';

export default ({ app }, inject) => {
  const svc = new apiService(app);
  const utils = new utilsService();

  inject('api', svc);
  inject('utils', utils);
}
