export const pageCalc = (first: number, rows: number) => {
	const recalcSize = (last: number, pageS: number, sizeS: number) => {
		return (pageS + 1) * sizeS < last ? recalcPage(last, pageS, sizeS + 1) : {page: pageS, size: sizeS};
	};

	const recalcPage: (last: number, pageP: number, sizeP: number) => {page: number; size: number} = (
		last: number,
		pageP: number,
		sizeP: number,
	) => {
		const left = pageP * sizeP;
		return left > first ? recalcPage(last, pageP - 1, sizeP) : recalcSize(last, pageP, sizeP);
	};

	const initPage = rows > 0 ? Math.floor(first / rows) : 0;
	const lastRowIndex = first + rows;
	const {page, size} = recalcPage(lastRowIndex, initPage, rows);
	return {page: page + 1, size, offset: first - page * size};
};

export function throttle(func: any, ms = 1000) {
	let isThrottled = false;
	let savedArgs: any;
	let savedThis: any;
  
	function wrapper() {
	  if (isThrottled) {
		// eslint-disable-next-line prefer-rest-params
		savedArgs = arguments;
		savedThis = this;
		return;
	  }
  
	  // eslint-disable-next-line prefer-rest-params
	  func.apply(this, arguments);
  
	  isThrottled = true;
  
	  setTimeout(function() {
		isThrottled = false;
		if (savedArgs) {
		  wrapper.apply(savedThis, savedArgs);
		  // eslint-disable-next-line no-multi-assign
		  savedArgs = savedThis = null;
		}
	  }, ms);
	}
  
	return wrapper;
  }
