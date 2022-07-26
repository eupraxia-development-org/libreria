import { IOption } from './option-interface';
export declare class Option {
    wrappedOption: IOption;
    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    hovered?: boolean;
    shown: boolean;
    group: boolean;
    constructor(option: IOption);
    get value(): string;
    get label(): string;
    get icon(): string;
}
