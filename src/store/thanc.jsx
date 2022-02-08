// export const fetchMarketThunk = createAsyncThunk(
//   FinancialActionTypes.GET_MARKET,
//   async () => {​​​
//     const marketResponse = await FinancialInfoApi.getMarket();
//     return marketResponse?.data;
//   }​​​
// );

// const loadPortfolioInfo = useCallback(async () => {​​​
//   await Promise.all([
//     dispatch(fetchUserAccountsThunk()),
//     dispatch(fetchMarketThunk()),
//   ]);
// }​​​, [dispatch]);
