// import { useEffect, useState } from 'react';

// const useLocalStorage = (key: string, initialValue: any) => {
// 	const [storedValue, setStoredValue] = useState<any>(() => {
// 		try {
// 			const item = window.localStorage.getItem(key);
// 			return item ? JSON.parse(item) : initialValue;
// 		} catch (error) {
// 			console.log(error);
// 			return initialValue;
// 		}
// 	});

// 	const setValue = (value: any) => {
// 		try {
// 			const valueToStore =
// 				value instanceof Function ? value(storedValue) : value;

// 			setStoredValue(valueToStore);

// 			window.localStorage.setItem(key, JSON.stringify(valueToStore));
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	return [storedValue, setValue];
// };

// const useDarkMode = () => {
// 	const [enabled, setEnabled] = useLocalStorage('dark-theme', false);
// 	const isEnabled = typeof enabled === 'undefined' ? false : enabled;

// 	useEffect(() => {
// 		const className = 'dark';
// 		const url = 'LogoDark';
// 		const bodyClass = window.document.body.classList;

// 		isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
// 		isEnabled ? bodyClass.add(url) : bodyClass.remove(url);
// 	}, [enabled, isEnabled]);

// 	return [enabled, setEnabled];
// };

// export default useDarkMode;
