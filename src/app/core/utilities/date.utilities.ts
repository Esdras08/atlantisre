export class DateUtilities {
    public static getDate(moment: any): string {
        try {
            const momen = moment._i;
            const zero_month = (momen.month + 1) < 10 ? '0' : '';
            const zero_day = (momen.date) < 10 ? '0' : '';
            return momen.year + '-' + zero_month + (momen.month + 1) + '-' + zero_day + momen.date;
        } catch (e) {
            return moment;
        }
    }
}
