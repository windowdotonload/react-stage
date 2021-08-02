/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
export const createAddAction = data => ({ type: 'add', data })

export const createAsyncAddAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createAddAction(data))
        }, time)
    }
}