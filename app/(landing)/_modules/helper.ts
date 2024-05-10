export const extractMonthAndDay = (inputDate: string) => {
    const date = new Date(inputDate);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    return { month, day };
};