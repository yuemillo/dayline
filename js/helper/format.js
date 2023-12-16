export function formateDate(date,type='yyyy/mm/dd') {
	if (typeof date === 'number') date = new Date(date);
	let temp = '';

	if ((type = 'yyyy/mm/dd')) {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const days = date.getDate();
		return `${year}/${month}/${days}`;
	}else{
        return date.tolocalString()
    }
}
