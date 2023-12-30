const analysisXY = datasXY => {
  let xSum = 0;
  let ySum = 0;

  let xDistSum = 0;
  let yDistSum = 0;

  // 2次元から1次元に変換
  const datasX = datasXY[0];
  const datasY = datasXY[1];

  // 平均を求める
  datasX.map(dataX => {
    xSum += dataX ;
  })

  const xAvg = xSum / datasX.length ;
  console.log(xAvg);

  datasY.map(dataY => {
    ySum += dataY ;
  })
  const yAvg = ySum / datasX.length;

  // 分散を求める
  datasX.map(dataX => {
    xDistSum += (dataX - xAvg) **2 //xでの偏差の二乗
  })
  const xDist = xDistSum / datasX.length ;

  datasY.map(dataY => {
    yDistSum += (dataY - yAvg) **2
  })
  const yDist = yDistSum / datasX.length;

  const xStandard = Math.sqrt(xDist);
  const yStandard = Math.sqrt(yDist);

  // 共分散
  let share = 0;
  for(let i=0; i<datasX.length; i++) {
    const deviationX = (datasX[i] - xAvg);
    const deviationY = (datasY[i] - yAvg);
    share += deviationX * deviationY ;
  }
  // console.log(share);

  const covariance = share / datasX.length;

  // 相関係数
  const correlation = covariance / (xStandard * yStandard);

  return {
    sum: {
      x: xSum ,
      y: ySum
    } ,
    average: {
      x: xAvg ,
      y: yAvg ,
    } ,
    distributed: {
      x: xDist ,
      y: yDist
    } ,
    standard: {
      x: xStandard ,
      y: yStandard ,
    } ,
    covariance: covariance ,
    correlation: correlation
  };
  
}
