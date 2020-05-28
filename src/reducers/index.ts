import reducer from './reducers';

export * from './actions';
export * from './interface';

export type IReducer = ReturnType<typeof reducer>;
export default reducer;
