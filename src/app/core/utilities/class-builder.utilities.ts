import {ClassBuilder, ModelImpl} from 'clv-angular-boot';
import {Error} from 'tslint/lib/error';
import {PersonneModel} from '../models/personne.model';

export class ClassBuilderImpl implements ClassBuilder {
  getNewIntance(className: string): any {
    switch (className) {
      case 'PersonneModel':
        return new PersonneModel();
        break;
      case 'GenericModel':
        return new ModelImpl();
        break;
      default:
        throw new Error('Nom de la classe inconnu');
    }
  }
}
