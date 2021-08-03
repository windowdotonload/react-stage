/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
const initState = 'this'
export default function otherReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case "add":
            return preState + data;
        case "minus":
            return preState - data;
        default:
            return preState
    }
}
