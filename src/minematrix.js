//マインスイーパー行列の部品
    // 第1引数:列数、第2引数:行数、第3引数:地雷数
    let inputRowsNum = document.getElementById('inputRowsNum');
    let inputColumnsNum = document.getElementById('inputColumnsNum');
    function createMatrixBehind(colNum, rowNum, mineNum) {
      const matrix = [];
      //①まず2次元配列[columnNum][rowNum]の行列を作る
      for (let row = 0; row < rowNum; row++) {
        matrix[row] = [];
        for (let col = 0; col < colNum; col++) {
          matrix[row][col] = 0;
        }
      }
	  const rows = matrix.length;
	  const cols = matrix[0].length;

	  //②ランダムな行列の箇所に地雷を埋め込む
		let mine = 0;
		while(true) {
	  	const randomRowIndex = Math.floor(Math.random() * rows);
	  	const randomColIndex = Math.floor(Math.random() * cols);
		   	if (matrix[randomRowIndex][randomColIndex] === '*') {
					// 地雷を選んだ場合は、ランダムな行列の箇所を選び直す
					} else {
						//地雷をセット
			   		matrix[randomRowIndex][randomColIndex] = '*';
						//③matrix[I][j]の周囲8マスに+1をする
			   		if (0 < randomRowIndex && 0 < randomColIndex && '*' != matrix[randomRowIndex - 1][randomColIndex - 1])  {
			   			matrix[randomRowIndex - 1][randomColIndex - 1]++;
			   		}
			   		if (0 < randomRowIndex && '*' != matrix[randomRowIndex - 1][randomColIndex]) {
			   			matrix[randomRowIndex - 1][randomColIndex]++;
			   		}
			   		if (0 < randomRowIndex && randomColIndex + 1 < cols && '*' != matrix[randomRowIndex - 1][randomColIndex + 1]) {
			   			matrix[randomRowIndex - 1][randomColIndex + 1]++;
			   		}
			   		if (0 < randomColIndex && '*' != matrix[randomRowIndex][randomColIndex - 1]) {
			   			matrix[randomRowIndex][randomColIndex - 1]++;
			   		}
			   		if (randomColIndex + 1 < cols && '*' != matrix[randomRowIndex][randomColIndex + 1]) {
			   			matrix[randomRowIndex][randomColIndex + 1]++;
			   		}
			   		if (randomRowIndex + 1 < rows && 0 < randomColIndex && '*' != matrix[randomRowIndex + 1][randomColIndex - 1]) {
			   			matrix[randomRowIndex + 1][randomColIndex - 1]++;
			   		}
			   		if (randomRowIndex + 1 < rows && '*' != matrix[randomRowIndex + 1][randomColIndex]) {
			   			matrix[randomRowIndex + 1][randomColIndex]++;
			   		}
			   		if (randomRowIndex + 1 < rows && randomColIndex + 1 < cols && '*' != matrix[randomRowIndex + 1][randomColIndex + 1]) {
			   			matrix[randomRowIndex + 1][randomColIndex + 1]++;
			   		} 
						// チェック処理
						if(++mine === mineNum ) {
							break;
						}
				}
	   }
      //行列の描画
      matrix.forEach((row) => {
      const line = row.join(' '); // 要素の間にスペースを挿入
      console.log(line); // 改行
      });
      return matrix;
	  }