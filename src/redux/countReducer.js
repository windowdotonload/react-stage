/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
const initState = 0
export default function countReducer(preState = initState, action) {
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