import {base64_encode} from 'devextreme/data/utils';
import {WebServicesUtilities} from './web-services.utilities';

export class CommonUtilities {

    public static tableStringOperations: String = '[\'contains\',\'startswith\',\'endswith\',\'=\',\'<>\']';
    public static tableNumericOperations: String = '[ \'=\', \'<>\', \'<\', \'>\', \'<=\', \'>=\', \'between\']';
    public static tableDateOperations: String = '[ \'=\', \'<>\', \'<\', \'>\', \'<=\', \'>=\', \'between\']';

    constructor() {
    }

    public static clone(obj: any): any {
        try {
            return JSON.parse(JSON.stringify(obj));
        } catch (e) {
            return undefined;
        }
    }

    public static stringCleanSpace(value) {
        return `${value}`.replace(/\s/g, '');
    }

    public static gotoHref(url) {
        window.open(url, '_blank');
    }

    public static EnumarableFromListEqual(list: any[], column: string, value: string) {
        let subList: any[];
        if (list == null) {
            return subList;
        }
        for (let i = 0; i < list.length; i++) {
            if (list[i][column] === value) {
                subList.push(list[i]);
            }

        }
        return subList;
    }

    public static GetObjectByFieldValue(obj: any[], fieldname: string, fieldvalue: any): any {
        let found = false;
        let cp = 0;
        while (cp < obj.length && !found) {
            if (obj[cp][fieldname] === fieldvalue) {
                found = true;
            } else {
                cp++;
            }
        }

        if (found) {
            return obj[cp];
        }
        return -1;
    }

    public static IsUndefinedOrNull(value: object) {


        return value == null || value == undefined;
    }

    public static range(start: number = 0, end: number): number[] {
        const ranges: number[] = [];
        let ofs = 0;
        for (start; start < end; start++) {
            ranges[ofs] = start;
            ofs++;
        }
        return ranges;
    }


    public static StringIsUndefinedOrNull(value: string) {


        return value == null || value == undefined || value == '';
    }


    public static WriteInConsole = function (text) {
        if (typeof console !== 'undefined') {
            console.log(text);
        } else {


        }
    };


    public static IsJsonValid(text: string) {


        if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

            return true;

        }

        return false;

    }


    public static IsJsonString = function (str) {
        try {
            JSON.parse(JSON.stringify(str));
        } catch (e) {
            return false;
        }
        return true;
    };

    public static IsString = function (str) {
        return typeof str === 'string';
    };

    public static IsArray = function (value) {
        return Array.isArray(value);
    };

    public static Copy = function (copyValue) {
        return Object.assign({}, copyValue);
    };

    public static getOperator(searchOption: string) {
        let operator = '';
        switch (searchOption) {
            case 'contains':
                operator = 'CONTAINS';
                break;
            case 'startswith':
                operator = 'STARSTWITH';
                break;
            case 'endswith':
                operator = 'ENDSWITH';
                break;
            case 'between':
                operator = 'BETWEEN';
                break;
            case '=':
                operator = 'EQUAL';
                break;
            case '<>':
                operator = 'NOTEQUAL';
                break;
            case '<':
                operator = 'LESS';
                break;
            case '>':
                operator = 'MORE';
                break;
            case '<=':
                operator = 'LESS OR EQUAL';
                break;
            case '>=':
                operator = 'MORE OR EQUAL';
                break;
            default:
                operator = '';

        }
        return operator;
    }

    public static RequestSw = function (index?, size?, takeAll?, deepth?, isNotificationToShow?, titleNotificationToShow?, notificationToShow?, showErrorInAlert?, showLoader?, mustFilterByTenant?) {
        const request: any = {
            Index: index || 0,
            Size: size || 10,
            TakeAll: takeAll || false,
            Deepth: CommonUtilities.IsUndefinedOrNull(deepth) ? 0 : deepth,
            IsNotificationToShow: isNotificationToShow || false,
            TitleNotificationToShow: titleNotificationToShow || '',
            NotificationToShow: notificationToShow || '',
            ShowErrorInAlert: showErrorInAlert == true ? true : (showErrorInAlert == false ? false : null),
            ShowLoader: CommonUtilities.IsUndefinedOrNull(showLoader) ? true : showLoader,
            Navigator: navigator,
            MustFilterByTenant: mustFilterByTenant || true
        };
        return request;
    };

    public static ResponseSw = function (data, indexDebut, indexFin, count, message, hasError) {
        return {
            Data: data,
            IndexDebut: indexDebut || 0,
            IndexFin: indexFin || 0,
            Count: count || 0,
            Message: message || '',
            HasError: hasError || false
        };
    };

    public static GenerateSearchInputRequest(loadOptions: any, index?, size?, takeAll?, deepth?, isNotificationToShow?, titleNotificationToShow?, notificationToShow?, showErrorInAlert?, showLoader?, mustFilterByTenant?) {
        const tableParams = CommonUtilities.RequestSw(index, size, takeAll, deepth, isNotificationToShow, titleNotificationToShow, notificationToShow, showErrorInAlert, showLoader, mustFilterByTenant);
        tableParams.SortOrder = 'Ascending';

        const itemToSearch: any = {};
        itemToSearch['InfoSearch' + loadOptions.searchExpr] = {
            Consider: true,
            IsOrderByField: false,
            OperatorToUse: this.getOperator(loadOptions.searchOperation)
        };
        itemToSearch[loadOptions.searchExpr] = loadOptions.searchValue;
        tableParams.itemToSearch = itemToSearch;
        return tableParams;
    }

    public static GenerateParamsRequest(loadOptions: any, takeAll?, deepth?, isNotificationToShow?, titleNotificationToShow?, notificationToShow?, showErrorInAlert?, showLoader?, mustFilterByTenant?) {

        const tableParams = CommonUtilities.RequestSw(loadOptions.skip, loadOptions.take, takeAll, deepth, isNotificationToShow, titleNotificationToShow, notificationToShow, showErrorInAlert, showLoader, mustFilterByTenant);
        tableParams.SortOrder = 'Ascending';


        const itemToSearch: any = {};
        if (loadOptions.sort) {
            if (loadOptions.sort[0].desc) {
                tableParams.SortOrder = 'Descending';
            }

        }
        if (loadOptions.filter) {
            const queryArray = loadOptions.filter.toString().split('and');
            for (let i = 0; i < queryArray.length; i++) {
                const rowQueryArray = queryArray[i].toString().split(',');
                if (rowQueryArray.length == 4 && rowQueryArray[0] == '') {
                    if (i > 0) {
                        rowQueryArray.splice(0, 1);
                    }

                }
                if (rowQueryArray.length > 2) {
                    itemToSearch['InfoSearch' + rowQueryArray[0]] = {
                        Consider: true,
                        IsOrderByField: false,
                        OperatorToUse: this.getOperator(rowQueryArray[1])
                    };
                    itemToSearch[rowQueryArray[0]] = rowQueryArray[2];
                }
            }

        }
        tableParams.itemToSearch = itemToSearch;
        return tableParams;
    }

    public static encodePassword(password: string): string {
        for (let i = 0; i < 3; i++) {
            password = base64_encode(password);
        }
        return password;
    }

    public static displayReport(name: string, params: string) {
        const url = WebServicesUtilities.getReportRdlUrlBase() + name + '&rs:Command=Render&' + params;
        window.open(url);
    }

}
