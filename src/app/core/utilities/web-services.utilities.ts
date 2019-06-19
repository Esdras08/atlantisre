import {CommonUtilities} from './common.utilities';

export class WebServicesUtilities {
    private static useHostedWcf: Boolean = false;
    private static useNodeApi: Boolean = false;

    private static HostedWcfAdressBase = 'http://147.135.253.152';
    private static UrlHostedReportingBase: string;
    private static UrlServiceBase = 'http://147.135.253.152:2052/api';
    private static UrlReportRdl: string;
    private static ReportServerName: string;
    private static ReportFolder: string;

    constructor() {



    }

    public static getSimpleUrl(uri: string, method: string): string {
        return WebServicesUtilities.UrlServiceBase + '/' + uri + '/' + method;
    }

    public static getSimpleUrl2(uri: string, method: string): string {
        // return 'http://inexa-srv-dc:4000/api/' + uri + '/' + method;
        return 'http://192.168.43.146:2000/api/' + uri + '/' + method;
         // return 'http://localhost:25493/api/' + uri + '/' + method;
    }


    public static getUrl(base: string, uri: string, method: string) {
        let port = '';
        if (WebServicesUtilities.useHostedWcf) {
            if (WebServicesUtilities.useNodeApi) {
                base = '/api';
            } else {
                switch (base) {
                    case WebServicesUtilities.UrlServiceBase:
                        port = '2052';
                        break;
                    default:
                }
            }
            base = WebServicesUtilities.HostedWcfAdressBase + ':' + port;
        }

        const url = base + '/' + uri + '/' + method;
        console.log(url);
        return url;

    }

    public static getUrlWebService = function(link: string, service: string, method: string) {
        return WebServicesUtilities.getUrl(link, service + '/', method);
    };

    public static getUrlServiceBase = function() {
        return WebServicesUtilities.UrlServiceBase;
    };

    public static getReportingUrl(base: string) {

        const url = base + '/Reports/';
        return url;
    }

    public static getReportRdlUrlBase = function() {

        const base = !this.useHostedWcf ? this.UrlReportRdl : this.UrlHostedReportingBase;
        const url = base + '/' + this.ReportServerName + '/Pages/ReportViewer.aspx?%2f' + this.ReportFolder + '%2f';
        CommonUtilities.WriteInConsole(url);
        return url;

    };

}
