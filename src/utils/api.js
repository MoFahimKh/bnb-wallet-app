export const fetchTransactionList = async (address, page, offset) => {
  const data = await fetch(
    `https://api.bscscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=${page}&offset=${offset}&sort=desc&apikey=ZFJVQFPYD1P3JBPWVZFTYNKSY17JIQSCKA`
  );
  const response = await data.json();
  console.log(response);
  const transactionData = response.result.map((item) => ({
    transactionHash: item.hash,
    value: parseFloat(item.value) / 1e18,
    from: item.from,
    to: item.to,
    blockNumber: item.blockNumber,
    timestamp: new Date(parseInt(item.timeStamp * 1000)).toLocaleDateString(),
  }));
  return transactionData;
};
