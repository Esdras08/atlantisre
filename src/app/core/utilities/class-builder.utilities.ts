import {ClassBuilder, ModelImpl} from 'clv-angular-boot';
import {Error} from 'tslint/lib/error';
import {AssureModel} from '../models/assure.model';

export class ClassBuilderImpl implements ClassBuilder {
  getNewIntance(className: string): any {
    switch (className) {
      case 'AssureModel':
        return new AssureModel();
        break;
      case 'GenericModel':
        return new ModelImpl();
        break;
      default:
        throw new Error('Nom de la classe inconnu');
    }
  }
}
