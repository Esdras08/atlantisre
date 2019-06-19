import {OptionInput} from 'clv-angular-boot';

export interface InputObjectV2Interface<D, R, VA> extends OptionInput<D, R, VA> {
    setIsValid(valid: boolean);

    getIsValid(): boolean;
}
