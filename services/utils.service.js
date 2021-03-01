export class utilsService {
  sanitizeRut(str) {
    return str.replace(/\./g, '').replace(/\-/g, '');
  }
}


