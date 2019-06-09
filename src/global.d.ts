// declare global {
// 	interface Element {
// 		click(): void;
// 	}
	
// }
interface Window {
	XMLHttpRequest:any,
	DocumentTouch:any,
}
declare function ActiveXObject(s: string):void;
declare function DocumentTouch():any;

